import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import prisma from '@/lib/prisma';

// GET /api/dashboard - Dashboard analytics
export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const orgId = (session.user as any).organizationId;
    const now = new Date();
    const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
    const startOfLastMonth = new Date(now.getFullYear(), now.getMonth() - 1, 1);
    const endOfLastMonth = new Date(now.getFullYear(), now.getMonth(), 0);

    const [
      totalRevenue,
      monthlyRevenue,
      lastMonthRevenue,
      outstandingAmount,
      overdueAmount,
      totalInvoices,
      paidInvoices,
      overdueInvoices,
      recentInvoices,
      recentPayments,
      topClients,
      monthlyData,
    ] = await Promise.all([
      // Total revenue (all time)
      prisma.payment.aggregate({
        where: { invoice: { organizationId: orgId } },
        _sum: { amount: true },
      }),
      // This month's revenue
      prisma.payment.aggregate({
        where: {
          invoice: { organizationId: orgId },
          paidAt: { gte: startOfMonth },
        },
        _sum: { amount: true },
      }),
      // Last month's revenue
      prisma.payment.aggregate({
        where: {
          invoice: { organizationId: orgId },
          paidAt: { gte: startOfLastMonth, lte: endOfLastMonth },
        },
        _sum: { amount: true },
      }),
      // Outstanding (unpaid) amount
      prisma.invoice.aggregate({
        where: {
          organizationId: orgId,
          status: { in: ['SENT', 'VIEWED', 'PARTIALLY_PAID'] },
        },
        _sum: { amountDue: true },
      }),
      // Overdue amount
      prisma.invoice.aggregate({
        where: {
          organizationId: orgId,
          status: 'OVERDUE',
        },
        _sum: { amountDue: true },
      }),
      // Total invoices count
      prisma.invoice.count({ where: { organizationId: orgId } }),
      // Paid invoices count
      prisma.invoice.count({ where: { organizationId: orgId, status: 'PAID' } }),
      // Overdue invoices count
      prisma.invoice.count({ where: { organizationId: orgId, status: 'OVERDUE' } }),
      // Recent invoices
      prisma.invoice.findMany({
        where: { organizationId: orgId },
        include: { client: { select: { name: true, company: true } } },
        orderBy: { createdAt: 'desc' },
        take: 5,
      }),
      // Recent payments
      prisma.payment.findMany({
        where: { invoice: { organizationId: orgId } },
        include: {
          invoice: {
            select: { invoiceNumber: true, client: { select: { name: true } } },
          },
        },
        orderBy: { paidAt: 'desc' },
        take: 5,
      }),
      // Top clients by revenue
      prisma.client.findMany({
        where: { organizationId: orgId },
        orderBy: { totalPaid: 'desc' },
        take: 5,
        select: { id: true, name: true, company: true, totalBilled: true, totalPaid: true },
      }),
      // Monthly revenue data (last 12 months)
      prisma.$queryRaw`
        SELECT 
          DATE_TRUNC('month', "paidAt") as month,
          SUM(amount) as revenue
        FROM "Payment" p
        JOIN "Invoice" i ON p."invoiceId" = i.id
        WHERE i."organizationId" = ${orgId}
          AND p."paidAt" >= NOW() - INTERVAL '12 months'
        GROUP BY DATE_TRUNC('month', "paidAt")
        ORDER BY month ASC
      `,
    ]);

    const currentMonthRev = monthlyRevenue._sum.amount || 0;
    const lastMonthRev = lastMonthRevenue._sum.amount || 0;
    const revenueGrowth = lastMonthRev > 0 ? ((currentMonthRev - lastMonthRev) / lastMonthRev) * 100 : 0;

    return NextResponse.json({
      stats: {
        totalRevenue: totalRevenue._sum.amount || 0,
        monthlyRevenue: currentMonthRev,
        revenueGrowth: Math.round(revenueGrowth * 10) / 10,
        outstanding: outstandingAmount._sum.amountDue || 0,
        overdue: overdueAmount._sum.amountDue || 0,
        totalInvoices,
        paidInvoices,
        overdueInvoices,
        collectionRate: totalInvoices > 0 ? Math.round((paidInvoices / totalInvoices) * 100) : 0,
      },
      recentInvoices,
      recentPayments,
      topClients,
      monthlyData,
    });
  } catch (error) {
    console.error('Dashboard error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
