import { useContext } from 'react'
import { Web3ProviderContext } from '../context'

export function useActiveAccount() {
  const data = useContext(Web3ProviderContext)

  return data.activeAccount
}
