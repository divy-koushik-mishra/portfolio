"use client";

import React, { useState } from 'react'

const BlogCategories = () => {
  const [activeCategory, setActiveCategory] = useState('All')

  const categories = [
    'All',
    'Full-Stack',
    'React',
    'Architecture',
    'Startup',
    'Product',
    'Performance',
    'Career'
  ]

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category)
    // Dispatch custom event to communicate with parent components
    window.dispatchEvent(new CustomEvent('categoryChange', { detail: category }))
  }

  return (
    <div className="border-b border-border px-4 py-4">
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryChange(category)}
            className={`px-3 py-1.5 text-sm font-mono rounded-md border transition-colors ${
              activeCategory === category
                ? 'bg-foreground text-background border-foreground'
                : 'bg-background text-foreground/70 border-border hover:text-foreground hover:border-foreground/50'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  )
}

export default BlogCategories
