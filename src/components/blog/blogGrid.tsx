"use client";

import React, { useState, useEffect } from 'react'
import BlogCard from './blogCard'
import blogData from '@/data/blogs.json'
import { BlogPost } from '@/types/blog'

// Type assertion for the JSON data
const typedBlogData: BlogPost[] = blogData as BlogPost[]

const BlogGrid = () => {
  const [filteredBlogs, setFilteredBlogs] = useState(typedBlogData)
  const [activeCategory, setActiveCategory] = useState('All')

  // Filter blogs based on active category
  useEffect(() => {
    if (activeCategory === 'All') {
      setFilteredBlogs(typedBlogData)
    } else {
      const filtered = typedBlogData.filter(blog => 
        blog.tags.some(tag => tag === activeCategory)
      )
      setFilteredBlogs(filtered)
    }
  }, [activeCategory])

  // Listen for category changes from parent
  useEffect(() => {
    const handleCategoryChange = (event: CustomEvent) => {
      setActiveCategory(event.detail)
    }
    
    window.addEventListener('categoryChange', handleCategoryChange as EventListener)
    return () => {
      window.removeEventListener('categoryChange', handleCategoryChange as EventListener)
    }
  }, [])

  return (
    <div className="px-4 py-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredBlogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
      
      {filteredBlogs.length === 0 && (
        <div className="text-center py-12">
          <p className="font-mono text-foreground/60">No blogs found for this category.</p>
        </div>
      )}
    </div>
  )
}

export default BlogGrid
