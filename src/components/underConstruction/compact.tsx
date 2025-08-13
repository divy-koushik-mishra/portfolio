import React from 'react'

const CompactUnderConstruction = () => {
  return (
    <div className="w-full flex items-center flex-col">
      <div className="max-w-3xl w-full border-x border-border">
        <div className="border-b border-border px-4 py-6 text-center">
          <div className="text-4xl mb-3">🚧</div>
          <h2 className="text-xl font-semibold text-foreground mb-2">Under Construction</h2>
          <p className="font-mono text-sm text-foreground/80">
            Coming soon with the same design quality.
          </p>
        </div>
      </div>
    </div>
  )
}

export default CompactUnderConstruction
