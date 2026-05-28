import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ScrollArea } from '@/components/ui/scroll-area'
import { recentActivity } from '@/lib/constants'

const actionColors: Record<string, string> = {
  가입: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400',
  구매: 'bg-blue-500/10 text-blue-600 dark:text-blue-400',
  업로드: 'bg-violet-500/10 text-violet-600 dark:text-violet-400',
  댓글: 'bg-amber-500/10 text-amber-600 dark:text-amber-400',
  탈퇴: 'bg-red-500/10 text-red-600 dark:text-red-400',
}

export function ActivityList() {
  return (
    <Card className='flex flex-col'>
      <CardHeader>
        <CardTitle className='text-base font-semibold'>최근 활동</CardTitle>
      </CardHeader>
      <CardContent className='flex-1 p-0'>
        <ScrollArea className='h-72 px-6'>
          <ul className='divide-y divide-border'>
            {recentActivity.map((item) => (
              <li key={item.id} className='flex items-center gap-3 py-3'>
                <Avatar className='size-8 shrink-0'>
                  <AvatarFallback className='text-xs'>
                    {item.user.slice(0, 1)}
                  </AvatarFallback>
                </Avatar>
                <div className='min-w-0 flex-1'>
                  <p className='truncate text-sm text-foreground'>
                    <span className='font-medium'>{item.user}</span>
                    {'이 '}
                    <span className='text-muted-foreground'>{item.target}</span>
                    {'에'}
                  </p>
                  <p className='text-xs text-muted-foreground'>{item.time}</p>
                </div>
                <Badge
                  variant='secondary'
                  className={actionColors[item.action] ?? ''}
                >
                  {item.action}
                </Badge>
              </li>
            ))}
          </ul>
        </ScrollArea>
      </CardContent>
    </Card>
  )
}
