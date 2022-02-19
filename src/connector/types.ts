import Web3 from 'web3'
import { Deffered } from '../utils/defered'

export type Web3ProviderData = {
  web3?: Web3
  activeAccount?: string
  ready?: Deffered
}
