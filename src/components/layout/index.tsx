import React from 'react'
import { Root } from './Root'
import { Header } from './Header'

export const Layout = ({ children }) => {
  return (
    <Root>
      <Header />
      {children}
    </Root>
  )
}

export { Root, Header }
