import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux"
import { StoreState } from ".."
import { setAuthAddress } from "./actions";

export const useAuthAddress = () => {
  return useSelector((state: StoreState) => state.auth.address);
}

export const useSetAuthAddress = () => {
  const dispatch = useDispatch();

  return useCallback((address: string) => {
    dispatch(setAuthAddress({ address }));
  }, [dispatch]);
}