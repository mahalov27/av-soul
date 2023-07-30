import { createSlice } from "@reduxjs/toolkit";

export const isLogin = createSlice({
  name: "isLogin",
  initialState: false,
  reducers: {
    setLogin(state, action) {
      return action.payload;
    },
  },
});

export const { setLogin } = isLogin.actions;