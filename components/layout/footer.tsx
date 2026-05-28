import Link from 'next/link'
import { Separator } from '@/components/ui/separator'
import { siteConfig, footerLinks } from '@/lib/constants'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className='border-t border-border bg-muted/30'>
      <div className='mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-2 gap-8 md:grid-cols-4'>
          <div className='col-span-2 md:col-span-1'>
            <Link href='/' className='text-lg font-semibold text-foreground'>
              {siteConfig.name}
            </Link>
            <p className='mt-2 text-sm text-muted-foreground leading-relaxed'>
              {siteConfig.description}
            </p>
          </div>

          <div>
            <h3 className='text-sm font-semibold text-foreground'>제품</h3>
            <ul className='mt-4 space-y-3'>
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className='text-sm text-muted-foreground transition-colors hover:text-foreground'
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className='text-sm font-semibold text-foreground'>회사</h3>
            <ul className='mt-4 space-y-3'>
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className='text-sm text-muted-foreground transition-colors hover:text-foreground'
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className='text-sm font-semibold text-foreground'>법적 고지</h3>
            <ul className='mt-4 space-y-3'>
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className='text-sm text-muted-foreground transition-colors hover:text-foreground'
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className='my-8' />

        <p className='text-center text-sm text-muted-foreground'>
          © {currentYear} {siteConfig.name}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
