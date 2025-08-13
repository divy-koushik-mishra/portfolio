import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { BlogCardProps } from '@/types/blog'

const BlogCard = ({ blog }: BlogCardProps) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    })
  }

  return (
    <article className="group border border-border rounded-lg overflow-hidden hover:border-foreground/50 transition-colors">
      <Link href={`/blogs/${blog.slug}`}>
        <div className="p-4 space-y-4">
          {/* Header with author and date */}
          <div className="flex items-center gap-3">
            <Image
              src={blog.author.avatar}
              alt={blog.author.name}
              width={32}
              height={32}
              className="rounded-full ring-1 ring-border"
            />
            <div className="flex-1 min-w-0">
              <p className="font-mono text-sm font-medium text-foreground truncate">
                {blog.author.name}
              </p>
              <div className="flex items-center gap-2 text-xs text-foreground/60">
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
            </div>
          </div>

          {/* Title and excerpt */}
          <div className="space-y-2">
            <h2 className="font-semibold text-lg text-foreground group-hover:text-foreground/80 transition-colors line-clamp-2">
              {blog.title}
            </h2>
            <p className="font-mono text-sm text-foreground/70 line-clamp-3 leading-relaxed">
              {blog.excerpt}
            </p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {blog.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 text-xs font-mono bg-muted text-muted-foreground rounded border border-border"
              >
                {tag}
              </span>
            ))}
            {blog.tags.length > 3 && (
              <span className="px-2 py-1 text-xs font-mono text-foreground/50">
                +{blog.tags.length - 3} more
              </span>
            )}
          </div>

          {/* Read more indicator */}
          <div className="pt-2 border-t border-border">
            <div className="flex items-center justify-between">
              <span className="font-mono text-sm text-foreground/60 group-hover:text-foreground/80 transition-colors">
                Read more
              </span>
              <svg
                className="w-4 h-4 text-foreground/60 group-hover:text-foreground/80 transition-colors group-hover:translate-x-1 transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </div>
        </div>
      </Link>
    </article>
  )
}

export default BlogCard
