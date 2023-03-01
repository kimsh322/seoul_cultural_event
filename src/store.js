import { configureStore } from "@reduxjs/toolkit";
import fullItemReducer from "./itemSlices";

export const store = configureStore({
  reducer: {
    fullItem: fullItemReducer,
  },
});
