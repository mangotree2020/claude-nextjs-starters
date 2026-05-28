import { cn } from '@/lib/utils'

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

const sizeClasses = {
  sm: 'size-4 border-2',
  md: 'size-8 border-2',
  lg: 'size-12 border-4',
}

export function LoadingSpinner({ size = 'md', className }: LoadingSpinnerProps) {
  return (
    <div
      className={cn(
        'rounded-full border-border border-t-primary animate-spin',
        sizeClasses[size],
        className,
      )}
      role='status'
      aria-label='로딩 중'
    />
  )
}

export function LoadingPage() {
  return (
    <div className='flex flex-1 flex-col items-center justify-center gap-3 min-h-[400px]'>
      <LoadingSpinner size='lg' />
      <p className='text-sm text-muted-foreground'>로딩 중...</p>
    </div>
  )
}
