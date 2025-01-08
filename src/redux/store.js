// src/redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import languageReducer from "./languageSlice";
import themeReducer from "./themeSlice";
const store = configureStore({
  reducer: {
    theme: themeReducer,
    language: languageReducer,
  },
});

export default store;
