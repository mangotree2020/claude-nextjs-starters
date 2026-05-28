import type { NavLink, SidebarLink, Feature, SiteConfig, StatsCard, ActivityItem } from '@/types'

export const siteConfig: SiteConfig = {
  name: '스타터킷',
  description: 'Next.js 16 + TypeScript + TailwindCSS v4 + shadcn UI로 만든 모던 웹 스타터킷',
  url: 'https://example.com',
  links: {
    github: 'https://github.com',
    docs: '/docs',
  },
}

export const navLinks: NavLink[] = [
  { href: '/', label: '홈' },
  { href: '/dashboard', label: '대시보드' },
  { href: '#features', label: '기능' },
]

export const sidebarLinks: SidebarLink[] = [
  { href: '/dashboard', label: '대시보드', icon: 'LayoutDashboard' },
  { href: '/dashboard/analytics', label: '분석', icon: 'BarChart3' },
  { href: '/dashboard/users', label: '사용자', icon: 'Users' },
  { href: '/dashboard/settings', label: '설정', icon: 'Settings' },
]

export const features: Feature[] = [
  {
    icon: 'Zap',
    title: '빠른 개발',
    description: '검증된 기술 스택과 사전 구성된 컴포넌트로 개발 속도를 극대화하세요.',
    badge: 'Next.js 16',
  },
  {
    icon: 'Shield',
    title: '타입 안전',
    description: 'TypeScript와 Zod로 런타임 오류를 사전에 차단하고 안정적인 코드를 작성하세요.',
    badge: 'TypeScript',
  },
  {
    icon: 'Palette',
    title: '다크 모드',
    description: 'next-themes와 OKLCH 색상 시스템으로 시스템 설정에 맞는 테마를 자동 적용합니다.',
    badge: 'TailwindCSS v4',
  },
  {
    icon: 'Smartphone',
    title: '반응형 디자인',
    description: '모바일부터 데스크탑까지, 모든 화면에서 완벽하게 작동하는 레이아웃.',
    badge: '모바일 우선',
  },
  {
    icon: 'Package',
    title: '컴포넌트 라이브러리',
    description: 'shadcn UI의 30개 이상 접근성 컴포넌트를 즉시 사용하세요.',
    badge: 'shadcn UI',
  },
  {
    icon: 'Globe',
    title: '검증된 라이브러리',
    description: 'react-hook-form, zod, recharts 등 업계 표준 라이브러리가 사전 통합되었습니다.',
    badge: '베스트 프랙티스',
  },
]

export const footerLinks = {
  product: [
    { href: '#', label: '기능' },
    { href: '#', label: '가격' },
    { href: '#', label: '문서' },
    { href: '/dashboard', label: '대시보드' },
  ],
  company: [
    { href: '#', label: '소개' },
    { href: '#', label: '블로그' },
    { href: '#', label: '채용' },
  ],
  legal: [
    { href: '#', label: '개인정보처리방침' },
    { href: '#', label: '이용약관' },
  ],
}

export const dashboardStats: StatsCard[] = [
  { title: '총 사용자', value: '12,345', change: '+12%', trend: 'up', icon: 'Users' },
  { title: '이번 달 매출', value: '₩2,450,000', change: '+8.2%', trend: 'up', icon: 'DollarSign' },
  { title: '활성 세션', value: '1,234', change: '-3%', trend: 'down', icon: 'Activity' },
  { title: '전환율', value: '4.6%', change: '+0.4%', trend: 'up', icon: 'TrendingUp' },
]

export const recentActivity: ActivityItem[] = [
  { id: '1', user: '김민준', action: '가입', target: '신규 계정', time: '2분 전' },
  { id: '2', user: '이서연', action: '구매', target: '프리미엄 플랜', time: '15분 전' },
  { id: '3', user: '박지호', action: '업로드', target: '파일 3개', time: '1시간 전' },
  { id: '4', user: '최수아', action: '댓글', target: '게시물 #42', time: '2시간 전' },
  { id: '5', user: '정도윤', action: '탈퇴', target: '계정 삭제 요청', time: '3시간 전' },
]
