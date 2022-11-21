import { configureStore } from "@reduxjs/toolkit";
import { myLanguage } from "./language/languageSlice";

export const store = configureStore({
  reducer: {
    myLanguage: myLanguage.reducer,
  },
});
