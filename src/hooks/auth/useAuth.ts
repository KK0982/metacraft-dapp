import { useMemo } from 'react'
import { useWeb3 } from '../../connector'
import { useActiveAccount, useConnectReadyStatus } from '../../connector/hooks'

export class NotConnectWalelt extends Error {
  constructor() {
    super()
    this.name = 'NotConnect'
    this.message = 'please connect the wallet first'
  }
}

export const useAuth = () => {
  const address = useActiveAccount()
  const web3 = useWeb3()
  const ready = useConnectReadyStatus()

  return useMemo(
    () => !address ||!web3 ? false : async () => {
      await ready.promise

      const checksumAddress = web3.utils.toChecksumAddress(address)
      const timestamp = Math.floor(new Date().getTime() / 1000)
      const messageForSign = `${checksumAddress}|${timestamp}`

      const signature = await (web3.eth.personal as any).sign(
        messageForSign,
        checksumAddress
      )

      return {
        address,
        checksumAddress,
        timestamp,
        signature: signature.substring(2),
      }
    },
    [address, ready.promise, web3]
  )
}
