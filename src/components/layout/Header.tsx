import React from 'react'
import Image from 'next/image'

export const Header = React.memo(() => {
  return (
    <header className="h-72 bg-222f40 w-full flex items-center justify-center flex-shrink-0 flex-grow-0">
      <Image src="/logo.svg" width={141} height={32} />
    </header>
  )
})
