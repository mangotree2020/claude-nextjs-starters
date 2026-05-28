'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { toast } from 'sonner'
import { PageHeader } from '@/components/shared/page-header'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'
import { Separator } from '@/components/ui/separator'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

const profileSchema = z.object({
  name: z.string().min(2, '이름은 최소 2자 이상이어야 합니다'),
  email: z.string().email('유효한 이메일을 입력해주세요'),
  company: z.string().optional(),
})

const passwordSchema = z
  .object({
    currentPassword: z.string().min(1, '현재 비밀번호를 입력해주세요'),
    newPassword: z.string().min(8, '비밀번호는 최소 8자 이상이어야 합니다'),
    confirmPassword: z.string(),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: '비밀번호가 일치하지 않습니다',
    path: ['confirmPassword'],
  })

type ProfileForm = z.infer<typeof profileSchema>
type PasswordForm = z.infer<typeof passwordSchema>

const notificationItems = [
  { id: 'email_marketing', label: '마케팅 이메일', description: '새로운 기능 및 업데이트 안내' },
  { id: 'email_security', label: '보안 알림', description: '로그인 및 계정 보안 관련 알림' },
  { id: 'email_activity', label: '활동 요약', description: '주간 서비스 이용 현황 요약' },
  { id: 'push_new', label: '새 메시지 알림', description: '받은 메시지에 대한 푸시 알림' },
]

function ProfileTab() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ProfileForm>({
    resolver: zodResolver(profileSchema),
    defaultValues: { name: '관리자', email: 'admin@example.com', company: '스타터킷' },
  })

  const onSubmit = async (data: ProfileForm) => {
    await new Promise((r) => setTimeout(r, 800))
    toast.success('프로필이 저장되었습니다.')
    console.log(data)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className='text-base'>프로필 정보</CardTitle>
        <CardDescription>공개 프로필 정보를 수정합니다.</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
          <div className='space-y-1.5'>
            <Label htmlFor='name'>이름</Label>
            <Input id='name' {...register('name')} />
            {errors.name && (
              <p className='text-xs text-destructive'>{errors.name.message}</p>
            )}
          </div>
          <div className='space-y-1.5'>
            <Label htmlFor='email'>이메일</Label>
            <Input id='email' type='email' {...register('email')} />
            {errors.email && (
              <p className='text-xs text-destructive'>{errors.email.message}</p>
            )}
          </div>
          <div className='space-y-1.5'>
            <Label htmlFor='company'>회사 (선택)</Label>
            <Input id='company' {...register('company')} />
          </div>
          <Button type='submit' disabled={isSubmitting} className='mt-2'>
            {isSubmitting ? '저장 중...' : '변경사항 저장'}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}

function NotificationsTab() {
  const [enabled, setEnabled] = useState<Record<string, boolean>>({
    email_marketing: false,
    email_security: true,
    email_activity: true,
    push_new: false,
  })

  const handleToggle = (id: string, checked: boolean) => {
    setEnabled((prev) => ({ ...prev, [id]: checked }))
    toast.success(`알림 설정이 ${checked ? '활성화' : '비활성화'}되었습니다.`)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className='text-base'>알림 설정</CardTitle>
        <CardDescription>수신할 알림의 종류를 선택합니다.</CardDescription>
      </CardHeader>
      <CardContent className='space-y-0'>
        {notificationItems.map((item, index) => (
          <div key={item.id}>
            <div className='flex items-center justify-between py-4'>
              <div>
                <p className='text-sm font-medium text-foreground'>{item.label}</p>
                <p className='text-xs text-muted-foreground'>{item.description}</p>
              </div>
              <Switch
                checked={enabled[item.id] ?? false}
                onCheckedChange={(checked) => handleToggle(item.id, checked)}
              />
            </div>
            {index < notificationItems.length - 1 && <Separator />}
          </div>
        ))}
      </CardContent>
    </Card>
  )
}

function SecurityTab() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<PasswordForm>({ resolver: zodResolver(passwordSchema) })

  const onSubmit = async (data: PasswordForm) => {
    await new Promise((r) => setTimeout(r, 800))
    toast.success('비밀번호가 변경되었습니다.')
    reset()
    console.log(data)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className='text-base'>비밀번호 변경</CardTitle>
        <CardDescription>정기적으로 비밀번호를 변경하면 계정 보안이 강화됩니다.</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
          <div className='space-y-1.5'>
            <Label htmlFor='currentPassword'>현재 비밀번호</Label>
            <Input id='currentPassword' type='password' {...register('currentPassword')} />
            {errors.currentPassword && (
              <p className='text-xs text-destructive'>{errors.currentPassword.message}</p>
            )}
          </div>
          <div className='space-y-1.5'>
            <Label htmlFor='newPassword'>새 비밀번호</Label>
            <Input id='newPassword' type='password' {...register('newPassword')} />
            {errors.newPassword && (
              <p className='text-xs text-destructive'>{errors.newPassword.message}</p>
            )}
          </div>
          <div className='space-y-1.5'>
            <Label htmlFor='confirmPassword'>새 비밀번호 확인</Label>
            <Input id='confirmPassword' type='password' {...register('confirmPassword')} />
            {errors.confirmPassword && (
              <p className='text-xs text-destructive'>{errors.confirmPassword.message}</p>
            )}
          </div>
          <Button type='submit' disabled={isSubmitting} className='mt-2'>
            {isSubmitting ? '변경 중...' : '비밀번호 변경'}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}

export default function SettingsPage() {
  return (
    <div>
      <PageHeader title='설정' description='계정 및 서비스 설정을 관리합니다.' />
      <Tabs defaultValue='profile' className='space-y-4'>
        <TabsList>
          <TabsTrigger value='profile'>일반</TabsTrigger>
          <TabsTrigger value='notifications'>알림</TabsTrigger>
          <TabsTrigger value='security'>보안</TabsTrigger>
        </TabsList>
        <TabsContent value='profile'>
          <ProfileTab />
        </TabsContent>
        <TabsContent value='notifications'>
          <NotificationsTab />
        </TabsContent>
        <TabsContent value='security'>
          <SecurityTab />
        </TabsContent>
      </Tabs>
    </div>
  )
}
