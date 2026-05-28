'use client'

import { useEffect } from 'react'
import { AlertCircle, RefreshCw, Home } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className='flex flex-1 flex-col items-center justify-center min-h-screen gap-6 px-4'>
      <Alert variant='destructive' className='max-w-md'>
        <AlertCircle className='size-4' />
        <AlertTitle>오류가 발생했습니다</AlertTitle>
        <AlertDescription>
          {error.message || '예기치 않은 오류가 발생했습니다. 다시 시도해주세요.'}
          {error.digest && (
            <span className='mt-1 block text-xs opacity-60'>오류 코드: {error.digest}</span>
          )}
        </AlertDescription>
      </Alert>
      <div className='flex flex-col items-center gap-3 sm:flex-row'>
        <Button onClick={reset} className='gap-2'>
          <RefreshCw className='size-4' />
          다시 시도
        </Button>
        <Button variant='outline' asChild>
          <Link href='/'>
            <Home className='mr-2 size-4' />
            홈으로
          </Link>
        </Button>
      </div>
    </div>
  )
}
