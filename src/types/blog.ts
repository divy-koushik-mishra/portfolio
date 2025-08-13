export interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  slug: string
  publishedAt: string
  readTime: string
  tags: string[]
  featured: boolean
  author: {
    name: string
    avatar: string
  }
}

export interface BlogCardProps {
  blog: BlogPost
}
