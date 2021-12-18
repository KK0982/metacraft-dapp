import { configureStore } from "@reduxjs/toolkit";
import { combineReducers, createStore, Store } from "redux";

const reducer = {
};

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
  })
});

export type StoreState = ReturnType<typeof store.getState>;