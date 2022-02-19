import { useContext } from 'react'
import { Web3ProviderContext } from '../context'

export function useConnectReadyStatus() {
  const data = useContext(Web3ProviderContext)

  return data.ready
}
