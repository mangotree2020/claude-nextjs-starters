'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { navLinks, siteConfig } from '@/lib/constants'

export function MobileNav() {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant='ghost'
          size='icon'
          className='size-8 md:hidden'
          aria-label='메뉴 열기'
        >
          <Menu className='size-4' />
        </Button>
      </SheetTrigger>
      <SheetContent side='right' className='w-72'>
        <SheetHeader>
          <SheetTitle className='text-left'>{siteConfig.name}</SheetTitle>
        </SheetHeader>
        <nav className='mt-6 flex flex-col gap-1'>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className='flex items-center rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground'
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  )
}
