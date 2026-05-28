'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  LayoutDashboard,
  BarChart3,
  Users,
  Settings,
  Menu,
  X,
  ChevronLeft,
  type LucideIcon,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
import { cn } from '@/lib/utils'
import { sidebarLinks, siteConfig } from '@/lib/constants'

const iconMap: Record<string, LucideIcon> = {
  LayoutDashboard,
  BarChart3,
  Users,
  Settings,
}

interface SidebarLinkItemProps {
  href: string
  label: string
  icon: string
  isActive: boolean
  collapsed?: boolean
}

function SidebarLinkItem({ href, label, icon, isActive, collapsed }: SidebarLinkItemProps) {
  const Icon = iconMap[icon]

  if (collapsed) {
    return (
      <Tooltip>
        <TooltipTrigger asChild>
          <Link
            href={href}
            className={cn(
              'flex size-9 items-center justify-center rounded-md transition-colors',
              isActive
                ? 'bg-primary text-primary-foreground'
                : 'text-muted-foreground hover:bg-accent hover:text-foreground',
            )}
          >
            {Icon && <Icon className='size-4' />}
            <span className='sr-only'>{label}</span>
          </Link>
        </TooltipTrigger>
        <TooltipContent side='right'>{label}</TooltipContent>
      </Tooltip>
    )
  }

  return (
    <Link
      href={href}
      className={cn(
        'flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors',
        isActive
          ? 'bg-primary text-primary-foreground'
          : 'text-muted-foreground hover:bg-accent hover:text-foreground',
      )}
    >
      {Icon && <Icon className='size-4 shrink-0' />}
      {label}
    </Link>
  )
}

function SidebarContent({ collapsed = false }: { collapsed?: boolean }) {
  const pathname = usePathname()

  return (
    <ScrollArea className='flex-1 px-3 py-4'>
      <nav className={cn('flex flex-col gap-1', collapsed && 'items-center')}>
        {sidebarLinks.map((link) => (
          <SidebarLinkItem
            key={link.href}
            href={link.href}
            label={link.label}
            icon={link.icon}
            isActive={pathname === link.href}
            collapsed={collapsed}
          />
        ))}
      </nav>
    </ScrollArea>
  )
}

export function Sidebar() {
  const [collapsed, setCollapsed] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <>
      {/* 모바일 사이드바 */}
      <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
        <SheetTrigger asChild>
          <Button
            variant='ghost'
            size='icon'
            className='size-8 lg:hidden fixed top-3 left-4 z-50'
            aria-label='사이드바 열기'
          >
            <Menu className='size-4' />
          </Button>
        </SheetTrigger>
        <SheetContent side='left' className='w-64 p-0'>
          <SheetHeader className='border-b border-border px-4 py-3'>
            <SheetTitle className='text-left text-sm'>{siteConfig.name}</SheetTitle>
          </SheetHeader>
          <SidebarContent />
        </SheetContent>
      </Sheet>

      {/* 데스크탑 사이드바 */}
      <aside
        className={cn(
          'hidden lg:flex flex-col border-r border-border bg-background transition-all duration-300',
          collapsed ? 'w-14' : 'w-56',
        )}
      >
        <div className='flex h-14 items-center justify-end border-b border-border px-2'>
          <Button
            variant='ghost'
            size='icon'
            className='size-8'
            onClick={() => setCollapsed(!collapsed)}
            aria-label={collapsed ? '사이드바 펼치기' : '사이드바 접기'}
          >
            {collapsed ? (
              <Menu className='size-4' />
            ) : (
              <ChevronLeft className='size-4' />
            )}
          </Button>
        </div>
        <SidebarContent collapsed={collapsed} />
      </aside>
    </>
  )
}
