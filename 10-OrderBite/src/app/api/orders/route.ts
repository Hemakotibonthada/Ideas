import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import prisma from '@/lib/prisma';
import { z } from 'zod';

const orderItemSchema = z.object({
  menuItemId: z.string(),
  quantity: z.number().int().positive(),
  notes: z.string().optional(),
  modifierIds: z.array(z.string()).optional(),
});

const orderSchema = z.object({
  type: z.enum(['DINE_IN', 'TAKEOUT', 'DELIVERY']),
  items: z.array(orderItemSchema).min(1),
  customerName: z.string().optional(),
  customerPhone: z.string().optional(),
  customerEmail: z.string().optional(),
  deliveryAddress: z.string().optional(),
  deliveryNotes: z.string().optional(),
  specialInstructions: z.string().optional(),
  tableId: z.string().optional(),
  tip: z.number().min(0).default(0),
  promotionCode: z.string().optional(),
});

// GET /api/orders - List orders
export async function GET(req: Request) {
  try {
    const session = await getServerSession();
    if (!session?.user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

    const { searchParams } = new URL(req.url);
    const status = searchParams.get('status');
    const type = searchParams.get('type');
    const date = searchParams.get('date');

    const where: any = {
      restaurantId: (session.user as any).restaurantId,
    };

    if (status) where.status = status;
    if (type) where.type = type;
    if (date) {
      const d = new Date(date);
      where.createdAt = {
        gte: new Date(d.getFullYear(), d.getMonth(), d.getDate()),
        lt: new Date(d.getFullYear(), d.getMonth(), d.getDate() + 1),
      };
    }

    const orders = await prisma.order.findMany({
      where,
      include: {
        items: {
          include: {
            menuItem: { select: { name: true, image: true } },
            modifiers: true,
          },
        },
        table: { select: { number: true } },
        customer: { select: { name: true, phone: true } },
      },
      orderBy: { createdAt: 'desc' },
      take: 100,
    });

    return NextResponse.json({ orders });
  } catch (error) {
    console.error('Error fetching orders:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

// POST /api/orders - Create new order
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const data = orderSchema.parse(body);
    const restaurantId = body.restaurantId;

    // Get restaurant settings
    const restaurant = await prisma.restaurant.findUnique({
      where: { id: restaurantId },
    });

    if (!restaurant) return NextResponse.json({ error: 'Restaurant not found' }, { status: 404 });

    // Calculate totals
    let subtotal = 0;
    const orderItems: any[] = [];

    for (const item of data.items) {
      const menuItem = await prisma.menuItem.findUnique({
        where: { id: item.menuItemId },
      });
      if (!menuItem) continue;

      let itemTotal = menuItem.price * item.quantity;
      const mods: any[] = [];

      if (item.modifierIds?.length) {
        const modifiers = await prisma.modifier.findMany({
          where: { id: { in: item.modifierIds } },
        });
        for (const mod of modifiers) {
          itemTotal += mod.price * item.quantity;
          mods.push({ name: mod.name, price: mod.price, modifierId: mod.id });
        }
      }

      subtotal += itemTotal;
      orderItems.push({
        menuItemId: item.menuItemId,
        quantity: item.quantity,
        unitPrice: menuItem.price,
        total: itemTotal,
        notes: item.notes,
        modifiers: { create: mods },
      });
    }

    const taxAmount = subtotal * (restaurant.taxRate / 100);
    const serviceCharge = subtotal * (restaurant.serviceCharge / 100);
    const deliveryFee = data.type === 'DELIVERY' ? restaurant.deliveryFee : 0;

    // Apply promotion
    let discount = 0;
    let promotionId = null;
    if (data.promotionCode) {
      const promo = await prisma.promotion.findFirst({
        where: {
          restaurantId,
          code: data.promotionCode,
          isActive: true,
          validFrom: { lte: new Date() },
          OR: [{ validUntil: null }, { validUntil: { gte: new Date() } }],
        },
      });
      if (promo) {
        if (promo.type === 'PERCENTAGE') {
          discount = subtotal * (promo.discount / 100);
          if (promo.maxDiscount) discount = Math.min(discount, promo.maxDiscount);
        } else if (promo.type === 'FIXED') {
          discount = promo.discount;
        } else if (promo.type === 'FREE_DELIVERY') {
          discount = deliveryFee;
        }
        promotionId = promo.id;
      }
    }

    const total = subtotal + taxAmount + serviceCharge + deliveryFee - discount + data.tip;

    // Generate order number
    const today = new Date();
    const dateStr = `${today.getFullYear()}${String(today.getMonth() + 1).padStart(2, '0')}${String(today.getDate()).padStart(2, '0')}`;
    const orderCount = await prisma.order.count({
      where: {
        restaurantId,
        createdAt: {
          gte: new Date(today.getFullYear(), today.getMonth(), today.getDate()),
        },
      },
    });
    const orderNumber = `${dateStr}-${String(orderCount + 1).padStart(4, '0')}`;

    const order = await prisma.order.create({
      data: {
        orderNumber,
        type: data.type,
        restaurantId,
        tableId: data.tableId,
        customerName: data.customerName,
        customerPhone: data.customerPhone,
        customerEmail: data.customerEmail,
        deliveryAddress: data.deliveryAddress,
        deliveryNotes: data.deliveryNotes,
        specialInstructions: data.specialInstructions,
        subtotal,
        taxAmount,
        serviceCharge,
        deliveryFee,
        discount,
        tip: data.tip,
        total,
        promotionId,
        estimatedTime: data.type === 'DELIVERY' ? restaurant.estimatedDeliveryTime : 20,
        items: { create: orderItems },
      },
      include: {
        items: { include: { menuItem: true, modifiers: true } },
        table: true,
      },
    });

    // Update table status for dine-in
    if (data.type === 'DINE_IN' && data.tableId) {
      await prisma.table.update({
        where: { id: data.tableId },
        data: { status: 'OCCUPIED' },
      });
    }

    return NextResponse.json(order, { status: 201 });
  } catch (error) {
    if (error instanceof z.ZodError) return NextResponse.json({ error: 'Validation failed', details: error.errors }, { status: 400 });
    console.error('Error creating order:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
