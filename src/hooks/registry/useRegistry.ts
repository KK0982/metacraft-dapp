import { useRequest } from '@umijs/hooks'
import request from '../../utils/request'

interface RegistryData {
  timestamp: number
  address: string
  signature: string
  username?: string
  fruit?: string
  skin?: string
}

function registry(data: RegistryData) {
  return request.post('/authserver/authenticate', { ...data, agent: '' })
}

export const useRegistry = () => {
  const { run, data, loading } = useRequest(registry, { manual: true })

  return { run, data, loading }
}
