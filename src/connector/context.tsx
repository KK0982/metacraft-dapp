import React from 'react'
import { Web3ProviderData } from './types'

export const Web3ProviderContext = React.createContext<Web3ProviderData>(
  {} as Web3ProviderData
)
