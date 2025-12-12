import { configureStore } from "@reduxjs/toolkit";
import { myLanguage } from "./language/languageSlice";
import { isLogin } from "./login/loginSlice"

export const store = configureStore({
  reducer: {
    myLanguage: myLanguage.reducer,
    isLogin: isLogin.reducer
  },
});
