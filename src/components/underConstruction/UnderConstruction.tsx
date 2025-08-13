import React from 'react'
import DiagonalLineGradientBgFull from '../hero/diagonalLineGradientBgFull'

const UnderConstruction = () => {
  return (
    <section className="w-full flex items-center flex-col">
      <div className="max-w-3xl w-full border-x border-border">
        <div className="border-b border-border px-4 py-12 text-center">
          <div className="text-8xl mb-6">🚧</div>
          <h1 className="text-4xl font-semibold text-foreground mb-4">Under Construction</h1>
          <p className="font-mono text-[16px] leading-relaxed text-foreground/80 max-w-lg mx-auto mb-8">
            This page is currently being built with the same design system and quality standards 
            as the rest of the portfolio.
          </p>
          <div className="inline-flex items-center gap-2 px-4 py-2 font-mono text-sm bg-foreground text-background rounded-md">
            <span>Coming Soon</span>
            <span>✨</span>
          </div>
        </div>
      </div>
      
      <DiagonalLineGradientBgFull />
    </section>
  )
}

export default UnderConstruction
