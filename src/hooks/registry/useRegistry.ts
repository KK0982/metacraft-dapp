import { useRequest } from '@umijs/hooks'
import { request } from '@utils'

interface RegistryData {
  timestamp: number
  address: string
  signature: string
  username?: string
  fruit?: string
  skin?: string
  reg?: number, // indicates that this is the login process
}

function registry(data: RegistryData) {
  return request.post('/authserver/authenticate', {
    agent: '',
    ...data
  })
}

export const useRegistry = () => {
  const { run, data, loading } = useRequest(registry, { manual: true })

  return { run, data, loading }
}
