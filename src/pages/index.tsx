import React, { FC, useEffect, useMemo, useState } from 'react'
import Image from 'next/image'
import { Spacing } from '../components/Spacing'
import { useRouter } from 'next/router'
import { useAuth } from '../hooks/auth/useAuth'
import { Container } from '../components/layout/Container'
import { useCheckRegistry } from '../hooks/registry/useCheckRegistry'

export const Auth = React.memo(() => {
  const router = useRouter()
  const auth = useAuth()
  const [authed, setAuthed] = useState<boolean>(false)
  const { run: checkRegistry } = useCheckRegistry()

  const name = useMemo(() => {
    return router.query?.username as string
  }, [router])

  const isRegistrySuccess = useMemo(() => {
    return router.query?.type === 'registry-success'
  }, [router])

  const run = useMemo(
    () => async () => {
      if (isRegistrySuccess) {
        setTimeout(() => {
          window.open(
            `metacraft://?address=${checksumAddress}&timestamp=${timestamp}&signature=${signature}`
          )
        }, 1000)
        return
      }

      if (!auth || !name || !checkRegistry) return

      const authResult = await auth(name)

      const { address, checksumAddress, timestamp, signature } = authResult

      // const checkRegistryResult = await checkRegistry(address)

      // TODO: disable registry check
      // const needRegistry = checkRegistryResult?.data?.['new_address'] === false

      // if the address is a new address, router to create page
      // if (needRegistry) {
      //   router.push(
      //     `/create-account?name=${name}address=${address}&timestamp=${timestamp}&signature=${signature}`
      //   )

      //   return
      // }

      setTimeout(() => {
        window.open(
          `metacraft://?address=${checksumAddress}&timestamp=${timestamp}&signature=${signature}`
        )
      }, 1000)
    },
    [checkRegistry, auth, name, setAuthed, isRegistrySuccess]
  )

  useEffect(() => {
    run()
  }, [run, name, auth, router, checkRegistry, setAuthed])

  return (
    <Container>
      {isRegistrySuccess ? (
        <RegistrySuccess />
      ) : authed ? (
        <AuthSuccess />
      ) : (
        <WaitAuth />
      )}
    </Container>
  )
})

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

const RegistrySuccess = React.memo(() => {
  return (
    <section className="shadow w-full bg-fff mt-[70px] pb-24 flex flex-col items-center">
      <Spacing y={112} />
      <Image
        src="/views/auth/registry-success.svg"
        width={160}
        height={80}
        className="flex-shrink-0 flex-grow-0"
      />
      <Spacing y={27} />
      <p className="text-24 leading-32">
        Congratulations on your successful registration.
      </p>
      <Spacing y={24} />
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
