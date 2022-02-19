import React, { FC, useEffect, useMemo, useState } from 'react'
import Image from 'next/image'
import { Spacing } from '../components/Spacing'
import { useRouter } from 'next/router'
import { useAuth } from '../hooks/auth/useAuth'
import { Container } from '../components/layout/Container'
import { useCheckRegistry } from '../hooks/registry/useCheckRegistry'
import { useNotification } from '../components/notifications'
import { useActiveAccount } from '../connector'
import { useRegistry } from '../hooks/registry/useRegistry'

export const Auth = React.memo(() => {
  const router = useRouter()
  const auth = useAuth()
  const [authed, setAuthed] = useState<boolean>(false)
  const { run: checkRegistry } = useCheckRegistry()
  const notification = useNotification()
  const activeAccount = useActiveAccount()
  const { run: registry } = useRegistry()

  const params = useMemo(() => {
    const query = router.query

    return {
      token: (query?.token || '') as string,
      checksumAddress: (query?.['checksum-address'] || '') as string,
      address: (query?.address || '') as string,
      name: (query?.name || '') as string,
      signature: (query?.signature || '') as string,
      timestamp: (query?.timestamp || '') as string,
    }
  }, [router])

  // if get signature form url search, assume that the page is from registry
  const isRegistrySuccess = !!params.signature

  const run = useMemo(
    () => async () => {
      if (authed) return
      if (!auth || !checkRegistry || !activeAccount) return

      // check registry at first
      const checkRegistryResult = await checkRegistry(activeAccount)

      const needRegistry = checkRegistryResult?.data?.['new_address']

      // if the address is a new address, router to create-account page
      if (needRegistry) {
        router.push('/create-account')

        return
      }

      // if don't need regist, call auth process
      notification.show({ type: 'info', content: 'auth start' })

      const authResult = await auth()
      const { address, checksumAddress, timestamp, signature } = authResult
      const registryResult = await registry({
        address: checksumAddress,
        signature,
        timestamp,
      })

      console.log(registryResult)

      setAuthed(true)
      setTimeout(() => {
        const searchParams = new URLSearchParams({
          name: registryResult?.data?.selectedProfile?.name,
          address,
          checksumAddress: checksumAddress,
          timestamp: String(timestamp),
          signature,
        })

        window.open(`metacraft://?${searchParams.toString()}`)
      }, 1000)
    },
    [authed, auth, checkRegistry, activeAccount, notification, registry, router]
  )
  useEffect(() => {
    if (!isRegistrySuccess) return

    setTimeout(() => {
      const searchParams = new URLSearchParams({
        name: params.name,
        address: params.address,
        checksumAddress: params.checksumAddress,
        timestamp: String(params.timestamp),
        signature: params.signature,
      })

      window.open(`metacraft://?${searchParams.toString()}`)
    }, 1000)
  }, [
    isRegistrySuccess,
    params.address,
    params.checksumAddress,
    params.name,
    params.signature,
    params.timestamp,
  ])

  // auto run check process
  useEffect(() => {
    run()
  }, [run])

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
