# InvoiceFlow 💳

**Professional Invoice & Billing SaaS Platform**

Create, send, and manage professional invoices. Track payments, automate billing, and get paid faster.

## Revenue Model
- **Starter**: $9/month (50 invoices, 3 clients)
- **Professional**: $29/month (unlimited invoices, recurring billing, analytics)
- **Enterprise**: $79/month (multi-user, SSO, custom integrations)

## Tech Stack
- **Frontend**: Next.js 14 (App Router), React 18, TypeScript, Tailwind CSS
- **Backend**: Next.js API Routes, Prisma ORM
- **Database**: PostgreSQL
- **Auth**: NextAuth.js (Google, GitHub, Credentials)
- **Payments**: Stripe
- **Email**: Nodemailer
- **PDF**: @react-pdf/renderer
- **Charts**: Chart.js + react-chartjs-2

## Features
- Professional invoice creation with customizable templates
- Client management with billing history
- Product/service catalog
- Online payment collection via Stripe
- Recurring invoice automation
- Smart payment reminders
- Multi-currency support
- Real-time analytics dashboard
- Activity tracking & audit log
- PDF generation & download
- Client portal for invoice viewing
- Role-based access control
- Mobile responsive design

## Getting Started

### Prerequisites
- Node.js 18+
- PostgreSQL 14+
- Stripe account (for payments)

### Installation

```bash
# Clone and install
cd 01-InvoiceFlow
npm install

# Set up environment
cp .env.example .env
# Edit .env with your database URL and API keys

# Set up database
npx prisma migrate dev
npx prisma db seed

# Start development server
npm run dev
```

### Docker

```bash
docker-compose up -d
```

### Environment Variables
See `.env.example` for all required environment variables.

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/dashboard | Dashboard analytics |
| GET | /api/invoices | List invoices (paginated) |
| POST | /api/invoices | Create invoice |
| GET | /api/invoices/:id | Get invoice details |
| PATCH | /api/invoices/:id | Update invoice |
| DELETE | /api/invoices/:id | Delete invoice |
| POST | /api/invoices/:id/send | Send invoice email |
| POST | /api/invoices/:id/pay | Record payment |
| GET | /api/clients | List clients |
| POST | /api/clients | Create client |
| GET | /api/products | List products |
| POST | /api/products | Create product |

## Deployment
Deploy to Vercel, Railway, or any Docker-compatible platform.

```bash
# Vercel
vercel deploy

# Railway
railway up

# Docker
docker-compose up -d --build
```

## License
MIT
