import { configureStore } from "@reduxjs/toolkit";
import { combineReducers, createStore, Store } from "redux";
import { authReducer } from "./auth/store";

const reducer = {
  auth: authReducer
};

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
  })
});

export type StoreState = ReturnType<typeof store.getState>;