import React from 'react'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import blogData from '@/data/blogs.json'
import DiagonalLineGradientBgFull from '@/components/hero/diagonalLineGradientBgFull'
import { BlogPost } from '@/types/blog'

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

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params
  const blog = typedBlogData.find((blog) => blog.slug === slug)
  
  if (!blog) {
    return {
      title: 'Blog Post Not Found',
      description: 'The requested blog post could not be found.'
    }
  }

  return {
    title: `${blog.title} | Divy Koushik Mishra`,
    description: blog.excerpt,
    openGraph: {
      title: blog.title,
      description: blog.excerpt,
      type: 'article',
      authors: [blog.author.name],
      publishedTime: blog.publishedAt,
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

  return (
    <div className="">
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
                <span>{formatDate(blog.publishedAt)}</span>
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
