import React, { FC, PropsWithChildren } from 'react'

type LableProps = PropsWithChildren<{
  required?: boolean
  className?: string
}>

export const Label: FC<LableProps> = React.memo(
  ({ className, children, required }) => {
    return (
      <div
        className={`text-14 leading-20 text-1a1b20 ${className ?? ''} mb-12`}
      >
        {required ? <span className="text-ea4e34">*</span> : null}
        {children}
      </div>
    )
  }
)
