import React from 'react'
import Image from 'next/image'
import { Spacing } from '../../components/Spacing'

export const Auth = () => {
  return (
    <section className="shadow w-full bg-fff h-[463px] mt-[70px] flex flex-col items-center">
      <Spacing y={83} />
      <Image
        src="/views/auth/waiting.png"
        width={120}
        height={120}
        className="flex-shrink-0 flex-grow-0"
      />
      <Spacing y={24} />
      <p className='text-20 leading-40'>Waiting for signature…</p>
    </section>
  )
}
