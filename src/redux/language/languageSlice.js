import { createSlice } from "@reduxjs/toolkit";

export const myLanguage = createSlice({
  name: "myLanguage",
  initialState: {},
  reducers: {
    language(state, action) {
      return action.payload;
    },
  },
});

export const { language } = myLanguage.actions;
