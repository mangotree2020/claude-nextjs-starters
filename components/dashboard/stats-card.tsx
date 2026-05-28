import {
  Users,
  DollarSign,
  Activity,
  TrendingUp,
  TrendingDown,
  Minus,
  type LucideIcon,
} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'
import type { StatsCard } from '@/types'

const iconMap: Record<string, LucideIcon> = {
  Users,
  DollarSign,
  Activity,
  TrendingUp,
}

const trendConfig = {
  up: { icon: TrendingUp, className: 'text-emerald-600 dark:text-emerald-400' },
  down: { icon: TrendingDown, className: 'text-red-600 dark:text-red-400' },
  neutral: { icon: Minus, className: 'text-muted-foreground' },
}

export function StatsCard({ title, value, change, trend, icon }: StatsCard) {
  const Icon = iconMap[icon]
  const TrendIcon = trendConfig[trend].icon

  return (
    <Card>
      <CardHeader className='flex flex-row items-center justify-between pb-2'>
        <CardTitle className='text-sm font-medium text-muted-foreground'>{title}</CardTitle>
        {Icon && (
          <div className='flex size-8 items-center justify-center rounded-md bg-primary/10'>
            <Icon className='size-4 text-primary' />
          </div>
        )}
      </CardHeader>
      <CardContent>
        <div className='text-2xl font-bold text-foreground'>{value}</div>
        <div className='mt-1 flex items-center gap-1'>
          <TrendIcon
            className={cn('size-3.5', trendConfig[trend].className)}
          />
          <span className={cn('text-xs font-medium', trendConfig[trend].className)}>
            {change}
          </span>
          <span className='text-xs text-muted-foreground'>지난 달 대비</span>
        </div>
      </CardContent>
    </Card>
  )
}
