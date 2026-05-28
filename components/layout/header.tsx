import Link from 'next/link'
import { ThemeToggle } from '@/components/layout/theme-toggle'
import { MobileNav } from '@/components/layout/mobile-nav'
import { navLinks, siteConfig } from '@/lib/constants'

export function Header() {
  return (
    <header className='sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md'>
      <div className='mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8'>
        <Link
          href='/'
          className='text-lg font-semibold tracking-tight text-foreground transition-opacity hover:opacity-80'
        >
          {siteConfig.name}
        </Link>

        <nav className='hidden items-center gap-6 md:flex'>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className='text-sm font-medium text-muted-foreground transition-colors hover:text-foreground'
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className='flex items-center gap-2'>
          <ThemeToggle />
          <MobileNav />
        </div>
      </div>
    </header>
  )
}
