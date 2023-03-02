import { configureStore } from "@reduxjs/toolkit";
import { fullItemSlice } from "./itemSlices";

export const store = configureStore({
  reducer: {
    fullItem: fullItemSlice.reducer,
  },
});
