import { useRequest } from '@umijs/hooks'
import request from '../../utils/request'

function checkRegistry(address: string) {
  return request.get(`/authserver/registerCheck?address=${address}`)
}

export const useCheckRegistry = () => {
  return useRequest(checkRegistry, {
    manual: true,
  })
}
