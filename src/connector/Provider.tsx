import React, {
  PropsWithChildren,
  useEffect,
  useMemo,
  useReducer,
  useState,
} from 'react'
import Web3 from 'web3'
import { Web3ProviderContext } from './context'
import { Web3ProviderData } from './types'
import bncOnBoard from 'bnc-onboard'
import { API } from 'bnc-onboard/dist/src/interfaces'
import { Deffered } from '@utils'
import { useNotification } from '@components/notifications'

type Action =
  | { type: 'set-web3'; data: Web3 }
  | { type: 'set-active-address'; data: string }

const INIT_STATE = {
  ready: new Deffered(),
} as Web3ProviderData

const DAPP_ID = process.env.BLOCK_NATIVE_API_KEY

const reducer = (state: Web3ProviderData, action: Action): Web3ProviderData => {
  switch (action.type) {
    case 'set-web3': {
      state.ready.success()

      return {
        ...state,
        web3: action.data,
      }
    }
    case 'set-active-address': {
      return {
        ...state,
        activeAccount: action.data,
      }
    }
  }
}

const RPC_URL = ''

type Web3ProviderProps = PropsWithChildren<{
  rpc: string
  appName: string
}>

export const Web3Provider = React.memo<Web3ProviderProps>(
  ({ rpc, appName, children }) => {
    const notification = useNotification()
    const [bncInstance, setBNCInstance] = useState<API>()
    const [state, dispatch] = useReducer(reducer, INIT_STATE)

    const wallets = useMemo(
      () => [
        { walletName: 'metamask', preferred: true },
        // { walletName: "walletConnect", preferred: true },
        { walletName: 'opera', preferred: true },
        { walletName: 'trust', preferred: true, rpcUrl: RPC_URL },
        { walletName: 'keystone', rpcUrl: rpc, appName: appName },
      ],
      [rpc, appName]
    )

    useEffect(() => {
      const instance = bncOnBoard({
        dappId: DAPP_ID,
        networkId: 1,
        walletSelect: { wallets },
        walletCheck: [
          { checkName: 'accounts' },
          { checkName: 'connect' },
          { checkName: 'network' },
        ],
        subscriptions: {
          wallet: (wallet) => {
            dispatch({ type: 'set-web3', data: new Web3(wallet.provider) })
          },
          address: (address) => {
            dispatch({ type: 'set-active-address', data: address })
          },
        },
      })

      setBNCInstance(instance)
    }, [dispatch, setBNCInstance])

    const connect = useMemo(
      () => async () => {
        if (!bncInstance) return

        try {
          await bncInstance.walletSelect()
          await bncInstance.walletCheck()
        } catch (e) {
          notification.show({
            type: 'error',
            title: 'Connect Failed',
            content: 'Please Retry Connect',
          })
        }
      },
      [bncInstance]
    )

    useEffect(() => {
      connect()
    }, [connect])

    return (
      <Web3ProviderContext.Provider value={state}>
        {children}
      </Web3ProviderContext.Provider>
    )
  }
)
