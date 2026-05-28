import Link from 'next/link'
import { ArrowRight, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

export function HeroSection() {
  return (
    <section className='relative overflow-hidden bg-gradient-to-b from-background via-muted/20 to-background'>
      <div className='mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40'>
        <div className='flex flex-col items-center gap-8 text-center'>
          <Badge variant='outline' className='gap-1.5 px-3 py-1 text-sm'>
            <span className='relative flex size-2'>
              <span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75' />
              <span className='relative inline-flex size-2 rounded-full bg-primary' />
            </span>
            Next.js 16 + React 19 스타터킷
          </Badge>

          <h1 className='max-w-3xl text-5xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl'>
            빠르게{' '}
            <span className='bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent'>
              웹을 개발
            </span>
            하세요
          </h1>

          <p className='max-w-2xl text-lg text-muted-foreground sm:text-xl leading-relaxed'>
            Next.js 16, TypeScript, TailwindCSS v4, shadcn UI가 완벽하게 통합된 스타터킷.
            설정 없이 바로 비즈니스 로직 개발에 집중하세요.
          </p>

          <div className='flex flex-col items-center gap-3 sm:flex-row'>
            <Button size='lg' asChild className='gap-2'>
              <Link href='/dashboard'>
                대시보드 보기
                <ArrowRight className='size-4' />
              </Link>
            </Button>
            <Button size='lg' variant='outline' asChild className='gap-2'>
              <Link href='https://github.com' target='_blank' rel='noopener noreferrer'>
                <ExternalLink className='size-4' />
                GitHub
              </Link>
            </Button>
          </div>

          <div className='flex flex-wrap items-center justify-center gap-3 text-sm text-muted-foreground'>
            {['Next.js 16', 'React 19', 'TypeScript', 'TailwindCSS v4', 'shadcn UI', 'Zod'].map(
              (tech) => (
                <Badge key={tech} variant='secondary' className='text-xs'>
                  {tech}
                </Badge>
              ),
            )}
          </div>
        </div>
      </div>

      {/* 배경 장식 */}
      <div
        aria-hidden
        className='pointer-events-none absolute inset-0 -z-10 overflow-hidden'
      >
        <div className='absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 size-[600px] rounded-full bg-primary/5 blur-3xl' />
      </div>
    </section>
  )
}
