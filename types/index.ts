export interface NavLink {
  href: string
  label: string
  external?: boolean
}

export interface SidebarLink {
  href: string
  label: string
  icon: string
  badge?: string
}

export interface Feature {
  icon: string
  title: string
  description: string
  badge?: string
}

export interface SiteConfig {
  name: string
  description: string
  url: string
  links: Record<string, string>
}

export interface StatsCard {
  title: string
  value: string
  change: string
  trend: 'up' | 'down' | 'neutral'
  icon: string
}

export interface ActivityItem {
  id: string
  user: string
  action: string
  target: string
  time: string
  avatar?: string
}
