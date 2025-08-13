import React from 'react'
import DiagonalLineGradientBgFull from '../hero/diagonalLineGradientBgFull'
import BlogHeader from './blogHeader'
// import BlogSearch from './blogSearch'
import BlogCategories from './blogCategories'
import BlogGrid from './blogGrid'

const BlogSection = () => {
  return (
    <section className="w-full flex items-center flex-col">
      <div className="max-w-3xl w-full border-x border-border">
        <BlogHeader />
        {/* <BlogSearch onSearch={(query) => console.log('Search:', query)} /> */}
        <BlogCategories />
        <BlogGrid />
      </div>
      <DiagonalLineGradientBgFull />
    </section>
  )
}

export default BlogSection
