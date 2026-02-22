'use client';

import { useSession } from 'next-auth/react';
import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';
import Sidebar from '@/components/dashboard/Sidebar';

export default function DashboardPage() {
  const { data: session } = useSession();
  const { data, isLoading } = useQuery({
    queryKey: ['dashboard'],
    queryFn: () => fetch('/api/dashboard').then((r) => r.json()),
  });

  const stats = data?.stats;

  const statCards = [
    { label: 'Monthly Revenue', value: stats ? `$${stats.monthlyRevenue.toLocaleString()}` : '-', change: stats ? `${stats.revenueGrowth > 0 ? '+' : ''}${stats.revenueGrowth}%` : '', changeType: stats?.revenueGrowth >= 0 ? 'positive' : 'negative', icon: '💰' },
    { label: 'Outstanding', value: stats ? `$${stats.outstanding.toLocaleString()}` : '-', sublabel: `${stats?.overdueInvoices || 0} overdue`, changeType: 'neutral', icon: '📋' },
    { label: 'Collection Rate', value: stats ? `${stats.collectionRate}%` : '-', sublabel: `${stats?.paidInvoices || 0} of ${stats?.totalInvoices || 0}`, changeType: 'neutral', icon: '📊' },
    { label: 'Overdue Amount', value: stats ? `$${stats.overdue.toLocaleString()}` : '-', sublabel: 'Needs attention', changeType: stats?.overdue > 0 ? 'negative' : 'neutral', icon: '⚠️' },
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <main className="flex-1 overflow-y-auto">
        <div className="p-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
              <p className="text-sm text-gray-500 mt-1">Welcome back, {session?.user?.name || 'User'}</p>
            </div>
            <Link href="/dashboard/invoices/new" className="btn-primary">
              <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
              New Invoice
            </Link>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {statCards.map((stat) => (
              <div key={stat.label} className="card">
                <div className="flex items-center justify-between">
                  <span className="text-2xl">{stat.icon}</span>
                  {stat.change && (
                    <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                      stat.changeType === 'positive' ? 'bg-green-50 text-green-700' :
                      stat.changeType === 'negative' ? 'bg-red-50 text-red-700' :
                      'bg-gray-50 text-gray-600'
                    }`}>
                      {stat.change}
                    </span>
                  )}
                </div>
                <div className="mt-4">
                  <p className="text-2xl font-bold text-gray-900">{isLoading ? '...' : stat.value}</p>
                  <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Recent Invoices & Payments */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Recent Invoices */}
            <div className="card">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold text-gray-900">Recent Invoices</h2>
                <Link href="/dashboard/invoices" className="text-sm text-primary-600 hover:text-primary-700 font-medium">View all →</Link>
              </div>
              <div className="space-y-4">
                {isLoading ? (
                  <div className="animate-pulse space-y-4">
                    {[1,2,3].map(i => <div key={i} className="h-12 bg-gray-100 rounded-lg" />)}
                  </div>
                ) : data?.recentInvoices?.map((inv: any) => (
                  <div key={inv.id} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
                    <div>
                      <p className="text-sm font-medium text-gray-900">{inv.invoiceNumber}</p>
                      <p className="text-xs text-gray-500">{inv.client.name}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-semibold text-gray-900">${inv.total.toLocaleString()}</p>
                      <span className={`text-xs font-medium ${
                        inv.status === 'PAID' ? 'text-green-600' :
                        inv.status === 'OVERDUE' ? 'text-red-600' :
                        inv.status === 'SENT' ? 'text-blue-600' :
                        'text-gray-500'
                      }`}>{inv.status}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Top Clients */}
            <div className="card">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold text-gray-900">Top Clients</h2>
                <Link href="/dashboard/clients" className="text-sm text-primary-600 hover:text-primary-700 font-medium">View all →</Link>
              </div>
              <div className="space-y-4">
                {isLoading ? (
                  <div className="animate-pulse space-y-4">
                    {[1,2,3].map(i => <div key={i} className="h-12 bg-gray-100 rounded-lg" />)}
                  </div>
                ) : data?.topClients?.map((client: any, index: number) => (
                  <div key={client.id} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
                    <div className="flex items-center gap-3">
                      <div className="h-8 w-8 rounded-full bg-primary-100 flex items-center justify-center text-sm font-semibold text-primary-700">
                        {index + 1}
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">{client.name}</p>
                        <p className="text-xs text-gray-500">{client.company || 'Individual'}</p>
                      </div>
                    </div>
                    <p className="text-sm font-semibold text-gray-900">${client.totalPaid.toLocaleString()}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
