import React, { FC } from 'react'

export const FormError: FC = React.memo(({ children }) => {
  return <p className="text-12 leading-16 text-ea4e34 mt-4 ml-20">{children}</p>
})
