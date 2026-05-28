import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function CTASection() {
  return (
    <section className='py-24 sm:py-32'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='relative overflow-hidden rounded-3xl bg-primary px-6 py-20 text-center sm:px-16'>
          <h2 className='text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl'>
            지금 바로 시작하세요
          </h2>
          <p className='mx-auto mt-4 max-w-xl text-lg text-primary-foreground/80'>
            복잡한 초기 설정 없이 바로 제품 개발에 집중할 수 있습니다.
          </p>

          <div className='mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row'>
            <Button
              size='lg'
              variant='secondary'
              asChild
              className='gap-2'
            >
              <Link href='/dashboard'>
                대시보드 시작하기
                <ArrowRight className='size-4' />
              </Link>
            </Button>
            <Button
              size='lg'
              variant='outline'
              asChild
              className='border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10'
            >
              <Link href='#features'>기능 살펴보기</Link>
            </Button>
          </div>

          {/* 배경 장식 */}
          <div
            aria-hidden
            className='pointer-events-none absolute inset-0 -z-10'
          >
            <div className='absolute right-0 top-0 size-80 -translate-y-1/2 translate-x-1/2 rounded-full bg-white/10 blur-3xl' />
            <div className='absolute bottom-0 left-0 size-80 translate-y-1/2 -translate-x-1/2 rounded-full bg-white/10 blur-3xl' />
          </div>
        </div>
      </div>
    </section>
  )
}
