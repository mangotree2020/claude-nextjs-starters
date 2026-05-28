'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { Button } from '@/components/ui/button'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
import { useMounted } from '@/hooks/use-mounted'

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const mounted = useMounted()

  if (!mounted) {
    return (
      <Button variant='ghost' size='icon' className='size-8' disabled aria-label='테마 전환' />
    )
  }

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          variant='ghost'
          size='icon'
          className='size-8'
          onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
          aria-label='테마 전환'
        >
          {resolvedTheme === 'dark' ? (
            <Sun className='size-4' />
          ) : (
            <Moon className='size-4' />
          )}
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        {resolvedTheme === 'dark' ? '라이트 모드' : '다크 모드'}
      </TooltipContent>
    </Tooltip>
  )
}
