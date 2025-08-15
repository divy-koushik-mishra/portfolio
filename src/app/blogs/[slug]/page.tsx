import React from 'react'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import blogData from '@/data/blogs.json'
import DiagonalLineGradientBgFull from '@/components/hero/diagonalLineGradientBgFull'
import { BlogPost } from '@/types/blog'
import type { Metadata } from 'next'

// Type assertion for the JSON data
const typedBlogData: BlogPost[] = blogData as BlogPost[]

interface BlogPostPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  return typedBlogData.map((blog) => ({
    slug: blog.slug,
  }))
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params
  const blog = typedBlogData.find((blog) => blog.slug === slug)
  
  if (!blog) {
    return {
      title: 'Blog Post Not Found',
      description: 'The requested blog post could not be found.'
    }
  }

  return {
    title: blog.title,
    description: blog.excerpt,
    keywords: [...blog.tags, 'blog', 'full-stack development', 'startup', 'product development'],
    authors: [{ name: blog.author.name }],
    openGraph: {
      title: blog.title,
      description: blog.excerpt,
      type: 'article',
      url: `https://divykoushik.com/blogs/${blog.slug}`,
      siteName: 'Divy Koushik Mishra',
      images: [
        {
          url: '/divy-koushik.webp',
          width: 1200,
          height: 630,
          alt: blog.title,
        },
      ],
      authors: [blog.author.name],
      publishedTime: blog.publishedAt,
      tags: blog.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: blog.title,
      description: blog.excerpt,
      images: ['/divy-koushik.webp'],
    },
    alternates: {
      canonical: `https://divykoushik.com/blogs/${blog.slug}`,
    },
    other: {
      'article:published_time': blog.publishedAt,
      'article:author': blog.author.name,
      'article:section': 'Technology',
      'article:tag': blog.tags.join(', '),
    },
  }
}

const BlogPostPage = async ({ params }: BlogPostPageProps) => {
  const { slug } = await params
  const blog = typedBlogData.find((blog) => blog.slug === slug)

  if (!blog) {
    notFound()
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  // Structured data for the blog post
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": blog.title,
    "description": blog.excerpt,
    "image": "https://divykoushik.com/divy-koushik.webp",
    "author": {
      "@type": "Person",
      "name": blog.author.name,
      "url": "https://divykoushik.com"
    },
    "publisher": {
      "@type": "Person",
      "name": blog.author.name,
      "url": "https://divykoushik.com"
    },
    "datePublished": blog.publishedAt,
    "dateModified": blog.publishedAt,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://divykoushik.com/blogs/${blog.slug}`
    },
    "articleSection": "Technology",
    "keywords": blog.tags.join(", "),
    "wordCount": blog.content.split(' ').length,
    "timeRequired": blog.readTime,
    "isAccessibleForFree": true
  }

  return (
    <div className="">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData)
        }}
      />
      
      <article className="w-full flex items-center flex-col">
        <div className="max-w-3xl w-full border-x border-border">
          {/* Header */}
          <div className="border-b border-border px-4 py-6">
            <div className="space-y-4">
              {/* Back to blogs */}
              <Link 
                href="/blogs"
                className="inline-flex items-center gap-2 font-mono text-sm text-foreground/70 hover:text-foreground transition-colors"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
                Back to blogs
              </Link>

              {/* Title */}
              <h1 className="text-3xl md:text-4xl font-semibold text-foreground leading-tight">
                {blog.title}
              </h1>

              {/* Meta information */}
              <div className="flex items-center gap-4 text-sm text-foreground/60">
                <div className="flex items-center gap-2">
                  <Image
                    src={blog.author.avatar}
                    alt={blog.author.name}
                    width={24}
                    height={24}
                    className="rounded-full ring-1 ring-border"
                  />
                  <span className="font-mono">{blog.author.name}</span>
                </div>
                <span>•</span>
                <time dateTime={blog.publishedAt}>{formatDate(blog.publishedAt)}</time>
                <span>•</span>
                <span>{blog.readTime}</span>
                {blog.featured && (
                  <>
                    <span>•</span>
                    <span className="text-foreground font-medium">Featured</span>
                  </>
                )}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {blog.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-sm font-mono bg-muted text-muted-foreground rounded-full border border-border"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="px-4 py-6">
            <div className="font-mono text-[15px] leading-relaxed text-foreground space-y-4">
              <p className="text-lg text-foreground/80 leading-relaxed">
                {blog.excerpt}
              </p>
              
              <p>
                {blog.content}
              </p>
              
              <p>
                This is a placeholder for the full blog content. In a real implementation, 
                this would contain the complete article with proper formatting, images, 
                code snippets, and other rich content.
              </p>
              
              <p>
                The blog post would continue with detailed explanations, examples, 
                and insights based on real-world experience building scalable applications 
                and leading technical teams.
              </p>
            </div>
          </div>
        </div>
        
        <DiagonalLineGradientBgFull />
      </article>
    </div>
  )
}

export default BlogPostPage
