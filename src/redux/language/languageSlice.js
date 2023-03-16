import { createSlice } from "@reduxjs/toolkit";

export const myLanguage = createSlice({
  name: "myLanguage",
  initialState: '',
  reducers: {
    setLanguage(state, action) {
      return action.payload;
    },
  },
});

export const { setLanguage } = myLanguage.actions;
