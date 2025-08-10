import React from 'react'

const DiagonalLineGradientBgFull = () => {
  return (
    <div className="w-full border-y border-border h-8 flex justify-center bg-[repeating-linear-gradient(315deg,var(--color-muted)_0,var(--color-muted)_1px,transparent_0,transparent_50%)] bg-[length:10px_10px]">
        <div className="max-w-3xl w-full border-x border-border h-full "></div>
    </div>
  )
}

export default DiagonalLineGradientBgFull