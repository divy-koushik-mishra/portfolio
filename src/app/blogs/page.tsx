import React from 'react'
import type { Metadata } from 'next'
import BlogSection from '@/components/blog'

export const metadata: Metadata = {
  title: 'Blog | Divy Koushik Mishra',
  description: 'Thoughts on full-stack development, startup building, and product development. Sharing lessons learned from building scalable applications and leading technical teams.',
  keywords: [
    'blog',
    'full-stack development',
    'startup building',
    'product development',
    'technical leadership',
    'software architecture',
    'React',
    'Next.js',
    'TypeScript'
  ],
  openGraph: {
    title: 'Blog | Divy Koushik Mishra',
    description: 'Thoughts on full-stack development, startup building, and product development. Sharing lessons learned from building scalable applications and leading technical teams.',
    url: 'https://divykoushik.com/blogs',
    siteName: 'Divy Koushik Mishra',
    type: 'website',
    images: [
      {
        url: '/divy-koushik.webp',
        width: 1200,
        height: 630,
        alt: 'Blog - Divy Koushik Mishra',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog | Divy Koushik Mishra',
    description: 'Thoughts on full-stack development, startup building, and product development.',
    images: ['/divy-koushik.webp'],
  },
  alternates: {
    canonical: 'https://divykoushik.com/blogs',
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