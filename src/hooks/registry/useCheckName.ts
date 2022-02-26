import { useRequest } from '@umijs/hooks'
import { request } from '@utils'

function checkName(name: string) {
  return request.get(`/authserver/nameCheck?username=${name}`)
}

export const useCheckName = () => {
  const { run, data, loading } = useRequest(checkName, {
    manual: true,
  })

  return { run, data, loading }
}
