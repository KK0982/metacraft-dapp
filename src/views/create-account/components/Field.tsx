import React, { FC, ReactNode } from 'react'
import { Spacing } from '../../../components/Spacing'
import { Title } from './Title'

interface FieldProps {
  title: ReactNode
}

export const Field: FC<FieldProps> = React.memo(({ title, children }) => {
  return (
    <div className="border-b border-1b2533[.07] pb-32">
      <Title>{title}</Title>
      <Spacing y={24} />
      {children}
    </div>
  )
})
