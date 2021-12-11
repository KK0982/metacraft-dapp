import { useEffect, useState } from "react";
import request from "../utils/request";

export function useENS () {
  const [data, setData] = useState<string[]>([]);

  useEffect(() => {
    request.get('/authserver/ensName').then((response) => {
      if (response.status === 200) {
        setData(response.data.ens);
      }
    })
  }, [setData])

  return data;
}