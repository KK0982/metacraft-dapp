import React, { FC, useEffect, useMemo, useState } from 'react'
import Image from 'next/image'
import { Spacing } from '../../components/Spacing'
import { useRouter } from 'next/router'
import { useAuth } from '../../hooks/useAuth'
import { Container } from '../../components/layout/Container'

export const Auth = React.memo(() => {
  const router = useRouter()
  const auth = useAuth()
  const [authed, setAuthed] = useState<boolean>(false)

  const name = useMemo(() => {
    return router.query?.name as string
  }, [router])

  useEffect(() => {
    if (!name) return

    auth(name).then((data) => {
      if (!data) return

      const { checksumAddress, timestamp, signature } = data
      window.open(
        `metacraft://?address=${checksumAddress}&timestamp=${timestamp}&signature=${signature}`
      )
      setAuthed(true);
    })
  }, [router, auth, name, setAuthed])

  return <Container>{authed ? <AuthSuccess /> : <WaitAuth />}</Container>
});

const WaitAuth = React.memo(() => {
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
      <p className="text-20 leading-40">Waiting for signature…</p>
    </section>
  )
})
const AuthSuccess = React.memo(() => {
  return (
    <section className="shadow w-full bg-fff h-[463px] mt-[70px] flex flex-col items-center">
      <Spacing y={112} />
      <Image
        src="/views/auth/success.png"
        width={160}
        height={80}
        className="flex-shrink-0 flex-grow-0"
      />
      <Spacing y={32} />
      <p className="text-24 leading-40">
        Welcome to{' '}
        <span className="text-32 leading-40 text-2539f4">Metacraft</span>
      </p>
      <Spacing y={128} />
      <p className="text-14 leading-20">
        *If the launcher does not open automatically, please check if it is
        blocked by Chrome.
      </p>
    </section>
  )
})

export default Auth
