import { useRequest } from '@umijs/hooks'
import { useEffect } from 'react'
import request from '../utils/request'

async function getENS(address: string) {
  const result = await request.get(`/authserver/ensName?address=${address}`)

  if (result.status === 200 && result?.data?.ens?.length !== 0) {
    return result.data.ens.filter((item) => !!item) as string[]
  }

  return []
}

export function useENS(address: string) {
  const { run, data, loading } = useRequest(getENS, {
    manual: true,
    cacheKey: address,
  })

  useEffect(() => {
    // if address is not set
    if (!address) return

    run(address)
  }, [address, run])

  return [data, loading] as const
}
