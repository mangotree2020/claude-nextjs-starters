import Link from 'next/link'
import { Home } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <div className='flex flex-1 flex-col items-center justify-center min-h-screen gap-6 px-4 text-center'>
      <div>
        <p className='text-8xl font-bold text-muted-foreground/30'>404</p>
        <h1 className='mt-2 text-2xl font-bold tracking-tight text-foreground'>
          페이지를 찾을 수 없습니다
        </h1>
        <p className='mt-3 text-base text-muted-foreground'>
          요청하신 페이지가 존재하지 않거나 이동되었습니다.
        </p>
      </div>
      <Button asChild>
        <Link href='/'>
          <Home className='mr-2 size-4' />
          홈으로 돌아가기
        </Link>
      </Button>
    </div>
  )
}
