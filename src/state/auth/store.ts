import { createReducer } from "@reduxjs/toolkit";
import { setAuthAddress } from "./actions";
import { AuthStore } from "./types";

const INIT_STORE: AuthStore = {
  address: ''
}

export const authReducer = createReducer(INIT_STORE, (builder) => {
  return builder.addCase(setAuthAddress, (state, action) => {
    return {
      ...state,
      address: action.payload.address
    };
  });
});