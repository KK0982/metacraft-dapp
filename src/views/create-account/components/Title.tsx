import React, { PropsWithChildren } from 'react'
import Square from '/public/icons/square.svg'

export const Title = React.memo(
  ({ className, children }: PropsWithChildren<{ className?: string }>) => {
    return (
      <div
        className={`flex items-center text-22 leading-28 text-1a1b20 ${className}`}
      >
        <Square className="mr-12" />
        {children}
      </div>
    )
  }
)
