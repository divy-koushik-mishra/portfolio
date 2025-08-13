"use client";

import React, { useState } from 'react'
import { Search } from 'lucide-react'

interface BlogSearchProps {
  onSearch: (query: string) => void
  placeholder?: string
}

const BlogSearch = ({ onSearch, placeholder = "Search blogs..." }: BlogSearchProps) => {
  const [searchQuery, setSearchQuery] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSearch(searchQuery)
  }

  const handleClear = () => {
    setSearchQuery('')
    onSearch('')
  }

  return (
    <div className="border-b border-border px-4 py-4">
      <form onSubmit={handleSubmit} className="relative">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-foreground/50" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={placeholder}
            className="w-full pl-10 pr-20 py-2 font-mono text-sm bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-foreground/20 focus:border-foreground/50 transition-colors"
          />
          <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex gap-2">
            {searchQuery && (
              <button
                type="button"
                onClick={handleClear}
                className="px-2 py-1 text-xs font-mono text-foreground/60 hover:text-foreground transition-colors"
              >
                Clear
              </button>
            )}
            <button
              type="submit"
              className="px-3 py-1 text-xs font-mono bg-foreground text-background rounded hover:bg-foreground/90 transition-colors"
            >
              Search
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default BlogSearch
