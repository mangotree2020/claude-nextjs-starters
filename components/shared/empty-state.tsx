import { type LucideIcon, Inbox } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface EmptyStateProps {
  icon?: LucideIcon
  title: string
  description?: string
  action?: {
    label: string
    onClick: () => void
  }
}

export function EmptyState({
  icon: Icon = Inbox,
  title,
  description,
  action,
}: EmptyStateProps) {
  return (
    <div className='flex flex-col items-center justify-center rounded-lg border border-dashed border-border bg-muted/20 px-6 py-16 text-center'>
      <div className='flex size-12 items-center justify-center rounded-full bg-muted'>
        <Icon className='size-6 text-muted-foreground' />
      </div>
      <h3 className='mt-4 text-sm font-semibold text-foreground'>{title}</h3>
      {description && (
        <p className='mt-2 text-sm text-muted-foreground'>{description}</p>
      )}
      {action && (
        <Button size='sm' className='mt-6' onClick={action.onClick}>
          {action.label}
        </Button>
      )}
    </div>
  )
}
