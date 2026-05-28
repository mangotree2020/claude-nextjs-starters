import {
  Zap,
  Shield,
  Palette,
  Smartphone,
  Package,
  Globe,
  type LucideIcon,
} from 'lucide-react'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { features } from '@/lib/constants'

const iconMap: Record<string, LucideIcon> = {
  Zap,
  Shield,
  Palette,
  Smartphone,
  Package,
  Globe,
}

export function FeaturesSection() {
  return (
    <section id='features' className='bg-muted/30 py-24 sm:py-32'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='mx-auto max-w-2xl text-center'>
          <Badge variant='outline' className='mb-4'>기능</Badge>
          <h2 className='text-3xl font-bold tracking-tight text-foreground sm:text-4xl'>
            모든 것이 준비되어 있습니다
          </h2>
          <p className='mt-4 text-lg text-muted-foreground'>
            개발을 시작하는 데 필요한 모든 구성 요소가 이미 통합되어 있습니다.
          </p>
        </div>

        <div className='mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
          {features.map((feature) => {
            const Icon = iconMap[feature.icon]
            return (
              <Card
                key={feature.title}
                className='group relative overflow-hidden transition-shadow hover:shadow-md'
              >
                <CardHeader className='pb-3'>
                  <div className='flex items-start justify-between'>
                    <div className='flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary'>
                      {Icon && <Icon className='size-5' />}
                    </div>
                    {feature.badge && (
                      <Badge variant='secondary' className='text-xs'>
                        {feature.badge}
                      </Badge>
                    )}
                  </div>
                  <h3 className='mt-4 text-lg font-semibold text-foreground'>
                    {feature.title}
                  </h3>
                </CardHeader>
                <CardContent>
                  <p className='text-sm text-muted-foreground leading-relaxed'>
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
