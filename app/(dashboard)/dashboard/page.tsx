import type { Metadata } from 'next'
import { PageHeader } from '@/components/shared/page-header'
import { StatsCard } from '@/components/dashboard/stats-card'
import { ActivityList } from '@/components/dashboard/activity-list'
import { dashboardStats } from '@/lib/constants'

export const metadata: Metadata = {
  title: '대시보드',
}

export default function DashboardPage() {
  return (
    <div>
      <PageHeader
        title='대시보드'
        description='서비스 현황을 한눈에 확인하세요.'
      />

      {/* 통계 카드 */}
      <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4'>
        {dashboardStats.map((stat) => (
          <StatsCard key={stat.title} {...stat} />
        ))}
      </div>

      {/* 하단 섹션 */}
      <div className='mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3'>
        <div className='lg:col-span-2'>
          <ActivityList />
        </div>
        <div className='flex flex-col gap-4'>
          <div className='rounded-lg border border-dashed border-border p-6 text-center text-sm text-muted-foreground'>
            차트 영역 — recharts 기반의 ChartContainer를 여기에 배치하세요
          </div>
        </div>
      </div>
    </div>
  )
}
