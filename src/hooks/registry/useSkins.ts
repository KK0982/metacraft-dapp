import { useRequest } from "@umijs/hooks"
import { useEffect } from "react"
import request from "../../utils/request"

function fetchSkins (address: string) {
  return request.get(`/nft/list/by/address?address=${address}`)
}

export const useSkins = (address: string) => {
  const {run, data, loading } =  useRequest(fetchSkins, {
    manual: true
  })

  useEffect(() => {
    if (!address) return;

    run(address);
  }, [address, run]);

  return [data, loading]
}