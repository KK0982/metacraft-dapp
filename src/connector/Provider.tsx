import React, { useEffect, useMemo, useReducer, useRef, useState } from "react";
import Web3 from "web3";
import { Web3ProviderContext } from './context';
import { Web3ProviderData } from "./types";
import bncOnBoard from 'bnc-onboard';
import { API } from "bnc-onboard/dist/src/interfaces";
import { Deffered } from "../utils/defered";

type Action = { type: 'set-web3', data: Web3 }
| { type: 'set-active-address', data: string };

const INIT_STATE  = {
  ready: new Deffered()
} as Web3ProviderData;

const DAPP_ID = process.env.BLOCK_NATIVE_API_KEY;

const reducer = (state: Web3ProviderData, action: Action): Web3ProviderData => {
  switch(action.type) {
    case 'set-web3': {
      state.ready.success();

      return {
        ...state,
        web3: action.data
      }
    }
    case 'set-active-address': {
      return {
        ...state,
        activeAccount: action.data
      }
    }
  }
}

const wallets = [
  { walletName: "metamask", preferred: true },
  // { walletName: "walletConnect", preferred: true },
  { walletName: 'opera', preferred: true }
];

export const Web3Provider = React.memo(({ children }) => {
  const [bncInstance, setBNCInstance] = useState<API>();
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  useEffect(() => {
    const instance  = bncOnBoard({
      dappId: DAPP_ID,
      networkId: 4,
      walletSelect: {
        wallets: wallets
      },
      walletCheck: [
        { checkName: 'accounts' },
        { checkName: 'connect' },
        { checkName: 'network'}
      ],
      subscriptions: {
        wallet: (wallet) => {
          dispatch({ type: 'set-web3', data: new Web3(wallet.provider)})
        },
        address: (address) => {
          dispatch({ type: 'set-active-address', data: address })
        }
      }
    });

    setBNCInstance(instance);
  }, [dispatch, setBNCInstance]);

  const connect = useMemo(() => async () => {
    if (!bncInstance) return;

    await bncInstance.walletSelect();
    await bncInstance.walletCheck();
  }, [bncInstance])

  useEffect(() => {
    connect();
  }, [connect])

  return (
    <Web3ProviderContext.Provider value={state}>
      {children}
    </Web3ProviderContext.Provider>
  );
})