import React from 'react'
import type { Metadata } from 'next'
import BlogSection from '@/components/blog'

export const metadata: Metadata = {
  title: 'Blog | Divy Koushik Mishra',
  description: 'Thoughts on full-stack development, startup building, and product development. Sharing lessons learned from building scalable applications and leading technical teams.',
  openGraph: {
    title: 'Blog | Divy Koushik Mishra',
    description: 'Thoughts on full-stack development, startup building, and product development.',
    type: 'website',
  },
}

const BlogPage = () => {
  return (
    <div className="">
      <BlogSection />
    </div>
  )
}

export default BlogPage