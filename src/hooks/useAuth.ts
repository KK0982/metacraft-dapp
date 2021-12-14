import Onboard from 'bnc-onboard'
import { useMemo } from 'react'
import Web3 from 'web3'

let web3

const onboard = (userName: string) =>
  Onboard({
    dappId: process.env.BLOCK_NATIVE_API_KEY, // [String] The API key created by step one above
    networkId: 4, // [Integer] The Ethereum network ID your Dapp uses.
    walletCheck: [
      { checkName: 'accounts' },
      { checkName: 'connect' },
      { checkName: 'network' },
    ],
    subscriptions: {
      wallet: (wallet) => {
        web3 = new Web3(wallet.provider)
      },
      address: (address) => {
        if (!address) return

        const checksumAddress = web3.utils.toChecksumAddress(address)
        const timestamp = Math.floor(new Date().getTime() / 1000)
        const messageForSign = `${checksumAddress}|${userName}|${timestamp}`

        web3.eth.personal
          .sign(messageForSign, checksumAddress)
          .then((signature: string) => {
            const replacedSignature = signature.substring(2)

            window.open(
              `metacraft://?address=${checksumAddress}&timestamp=${timestamp}&signature=${replacedSignature}`
            )
          })
          .catch(console.error)
      },
      network: (networkId) => {
        console.log('networkId: ', networkId)
      },
    },
  })

const onBoard = async () => {
  try {
    await onboard.walletSelect()
    await onboard.walletCheck()
  } catch (e) {
    console.error(e)
  }
}

export default onBoard

export const useAuth = () => {
}
