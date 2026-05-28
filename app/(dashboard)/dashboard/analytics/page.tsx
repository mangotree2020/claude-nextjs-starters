'use client'

import { useState } from 'react'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  BarChart,
  Bar,
} from 'recharts'
import { PageHeader } from '@/components/shared/page-header'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from '@/components/ui/chart'

const generateData = (days: number) =>
  Array.from({ length: days }, (_, i) => ({
    date: `${i + 1}일`,
    방문자: Math.floor(Math.random() * 800 + 200),
    전환: Math.floor(Math.random() * 80 + 20),
  }))

const visitorConfig: ChartConfig = {
  방문자: { label: '방문자', color: 'hsl(var(--chart-1))' },
}

const conversionConfig: ChartConfig = {
  전환: { label: '전환', color: 'hsl(var(--chart-2))' },
}

const summaryStats = [
  { label: '총 방문자', value: '48,392', change: '+14.2%', positive: true },
  { label: '전환율', value: '4.8%', change: '+0.6%', positive: true },
  { label: '이탈률', value: '38.2%', change: '-2.1%', positive: true },
  { label: '평균 세션 시간', value: '3분 42초', change: '+18초', positive: true },
]

export default function AnalyticsPage() {
  const [period, setPeriod] = useState<'7' | '30' | '90'>('30')
  const data = generateData(Number(period))

  return (
    <div>
      <PageHeader
        title='분석'
        description='서비스 지표와 트렌드를 분석합니다.'
      >
        <Tabs value={period} onValueChange={(v) => setPeriod(v as typeof period)}>
          <TabsList>
            <TabsTrigger value='7'>7일</TabsTrigger>
            <TabsTrigger value='30'>30일</TabsTrigger>
            <TabsTrigger value='90'>90일</TabsTrigger>
          </TabsList>
        </Tabs>
      </PageHeader>

      {/* 요약 통계 */}
      <div className='grid grid-cols-2 gap-4 lg:grid-cols-4'>
        {summaryStats.map((stat) => (
          <Card key={stat.label}>
            <CardHeader className='pb-2'>
              <CardTitle className='text-sm font-medium text-muted-foreground'>
                {stat.label}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className='text-2xl font-bold text-foreground'>{stat.value}</p>
              <Badge
                variant='secondary'
                className={
                  stat.positive
                    ? 'mt-1 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400'
                    : 'mt-1 bg-red-500/10 text-red-600'
                }
              >
                {stat.change}
              </Badge>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* 차트 영역 */}
      <div className='mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2'>
        <Card>
          <CardHeader>
            <CardTitle className='text-base font-semibold'>방문자 추이</CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer config={visitorConfig} className='h-56 w-full'>
              <ResponsiveContainer width='100%' height='100%'>
                <LineChart data={data} margin={{ top: 4, right: 4, bottom: 0, left: -20 }}>
                  <CartesianGrid strokeDasharray='3 3' className='stroke-border' />
                  <XAxis
                    dataKey='date'
                    tick={{ fontSize: 11 }}
                    tickLine={false}
                    axisLine={false}
                    interval={Math.floor(data.length / 6)}
                  />
                  <YAxis tick={{ fontSize: 11 }} tickLine={false} axisLine={false} />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Line
                    type='monotone'
                    dataKey='방문자'
                    stroke='var(--color-방문자)'
                    strokeWidth={2}
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className='text-base font-semibold'>전환 현황</CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer config={conversionConfig} className='h-56 w-full'>
              <ResponsiveContainer width='100%' height='100%'>
                <BarChart data={data} margin={{ top: 4, right: 4, bottom: 0, left: -20 }}>
                  <CartesianGrid strokeDasharray='3 3' className='stroke-border' />
                  <XAxis
                    dataKey='date'
                    tick={{ fontSize: 11 }}
                    tickLine={false}
                    axisLine={false}
                    interval={Math.floor(data.length / 6)}
                  />
                  <YAxis tick={{ fontSize: 11 }} tickLine={false} axisLine={false} />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Bar dataKey='전환' fill='var(--color-전환)' radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
