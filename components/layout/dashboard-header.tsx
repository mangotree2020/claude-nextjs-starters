import Link from 'next/link'
import { Bell } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { ThemeToggle } from '@/components/layout/theme-toggle'
import { BreadcrumbNav } from '@/components/layout/breadcrumb-nav'
import { siteConfig } from '@/lib/constants'

export function DashboardHeader() {
  return (
    <header className='flex h-14 items-center justify-between border-b border-border bg-background px-4 lg:px-6'>
      <div className='flex items-center gap-4'>
        <Link
          href='/'
          className='hidden text-sm font-semibold text-foreground transition-opacity hover:opacity-80 lg:block'
        >
          {siteConfig.name}
        </Link>
        <BreadcrumbNav />
      </div>

      <div className='flex items-center gap-2'>
        <Button variant='ghost' size='icon' className='size-8' aria-label='알림'>
          <Bell className='size-4' />
        </Button>
        <ThemeToggle />
        <Avatar className='size-8 cursor-pointer'>
          <AvatarFallback className='text-xs'>관리</AvatarFallback>
        </Avatar>
      </div>
    </header>
  )
}
