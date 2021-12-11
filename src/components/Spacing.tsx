import React, { FC } from 'react'

interface SpacingProps {
  className?: string
  x?: number
  y?: number
}

export const Spacing: FC<SpacingProps> = React.memo(({ className, x, y }) => {
  // tailwind css cant handle dynamic className
  return (
    <div className={`${className}`} style={{ height: y ?? 0, width: x ?? 0 }} />
  )
})
