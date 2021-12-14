import { createAction } from "@reduxjs/toolkit";

export const setAuthAddress = createAction<{ address: string }>('AUTH_ADDRESS');
