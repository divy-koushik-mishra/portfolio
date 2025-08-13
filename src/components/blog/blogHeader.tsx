import React from 'react'

const BlogHeader = () => {
  return (
    <div className="border-b border-border">
      <h1 className="text-3xl font-semibold px-4 py-6 text-foreground">Blog</h1>
      <div className="font-mono px-4 pb-6 text-[15px] leading-relaxed text-foreground/80">
        <p>
          Thoughts on <strong>full-stack development</strong>, <strong>startup building</strong>, 
          and <strong>product development</strong>. Sharing lessons learned from building 
          scalable applications and leading technical teams.
        </p>
      </div>
    </div>
  )
}

export default BlogHeader
