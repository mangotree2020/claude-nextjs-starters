import type { Metadata } from 'next'
import { format } from 'date-fns'
import { ko } from 'date-fns/locale'
import { PageHeader } from '@/components/shared/page-header'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: '사용자',
}

const users = [
  {
    id: '1',
    name: '김민준',
    email: 'minjun@example.com',
    role: '관리자',
    status: '활성',
    joinedAt: new Date('2024-01-15'),
  },
  {
    id: '2',
    name: '이서연',
    email: 'seoyeon@example.com',
    role: '사용자',
    status: '활성',
    joinedAt: new Date('2024-03-22'),
  },
  {
    id: '3',
    name: '박지호',
    email: 'jiho@example.com',
    role: '편집자',
    status: '활성',
    joinedAt: new Date('2024-05-10'),
  },
  {
    id: '4',
    name: '최수아',
    email: 'sua@example.com',
    role: '사용자',
    status: '비활성',
    joinedAt: new Date('2024-06-01'),
  },
  {
    id: '5',
    name: '정도윤',
    email: 'doyun@example.com',
    role: '사용자',
    status: '대기중',
    joinedAt: new Date('2024-07-18'),
  },
  {
    id: '6',
    name: '한지우',
    email: 'jiwoo@example.com',
    role: '편집자',
    status: '활성',
    joinedAt: new Date('2024-08-05'),
  },
]

const statusConfig: Record<string, { label: string; className: string }> = {
  활성: {
    label: '활성',
    className: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400',
  },
  비활성: {
    label: '비활성',
    className: 'bg-red-500/10 text-red-600 dark:text-red-400',
  },
  대기중: {
    label: '대기중',
    className: 'bg-amber-500/10 text-amber-600 dark:text-amber-400',
  },
}

const roleConfig: Record<string, string> = {
  관리자: 'bg-violet-500/10 text-violet-600 dark:text-violet-400',
  편집자: 'bg-blue-500/10 text-blue-600 dark:text-blue-400',
  사용자: '',
}

export default function UsersPage() {
  return (
    <div>
      <PageHeader
        title='사용자 관리'
        description={`총 ${users.length}명의 사용자가 등록되어 있습니다.`}
      />

      <Card>
        <CardContent className='p-0'>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>사용자</TableHead>
                <TableHead>역할</TableHead>
                <TableHead>상태</TableHead>
                <TableHead className='hidden sm:table-cell'>가입일</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users.map((user) => {
                const status = statusConfig[user.status]
                return (
                  <TableRow key={user.id}>
                    <TableCell>
                      <div className='flex items-center gap-3'>
                        <Avatar className='size-8'>
                          <AvatarFallback className='text-xs'>
                            {user.name.slice(0, 1)}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className='text-sm font-medium text-foreground'>{user.name}</p>
                          <p className='text-xs text-muted-foreground'>{user.email}</p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant='secondary'
                        className={roleConfig[user.role]}
                      >
                        {user.role}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge variant='secondary' className={status.className}>
                        {status.label}
                      </Badge>
                    </TableCell>
                    <TableCell className='hidden text-sm text-muted-foreground sm:table-cell'>
                      {format(user.joinedAt, 'yyyy년 M월 d일', { locale: ko })}
                    </TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
