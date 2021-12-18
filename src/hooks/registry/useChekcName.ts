import { useRequest } from "@umijs/hooks"
import request from "../../utils/request"

function checkName (name: string) {
  return request.get(`/authserver/nameCheck?username=${name}`)
}

export const useCheckName = () => {
  return useRequest(checkName, {
    manual: true
  })
}