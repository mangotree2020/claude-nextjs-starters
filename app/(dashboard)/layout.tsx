import { Sidebar } from '@/components/layout/sidebar'
import { DashboardHeader } from '@/components/layout/dashboard-header'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className='flex h-screen overflow-hidden bg-muted/10'>
      <Sidebar />
      <div className='flex flex-1 flex-col overflow-hidden'>
        <DashboardHeader />
        <main className='flex-1 overflow-y-auto p-6'>{children}</main>
      </div>
    </div>
  )
}
