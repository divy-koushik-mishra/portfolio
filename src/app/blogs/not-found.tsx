import React from 'react'
import Link from 'next/link'
import DiagonalLineGradientBgFull from '@/components/hero/diagonalLineGradientBgFull'

const BlogNotFound = () => {
  return (
    <div className="">
      <div className="w-full flex items-center flex-col">
        <div className="max-w-3xl w-full border-x border-border">
          <div className="border-b border-border px-4 py-12 text-center">
            <h1 className="text-3xl font-semibold text-foreground mb-4">
              Blog Post Not Found
            </h1>
            <p className="font-mono text-[15px] text-foreground/70 mb-6 max-w-md mx-auto">
              The blog post you&apos;re looking for doesn&apos;t exist or may have been moved.
            </p>
            <Link
              href="/blogs"
              className="inline-flex items-center gap-2 px-4 py-2 font-mono text-sm bg-foreground text-background rounded-md hover:bg-foreground/90 transition-colors"
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
              Back to Blogs
            </Link>
          </div>
        </div>
        <DiagonalLineGradientBgFull />
      </div>
    </div>
  )
}

export default BlogNotFound
