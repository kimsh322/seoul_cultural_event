import { configureStore } from "@reduxjs/toolkit";
import itemReducer from "./itemSlices";

export const store = configureStore({
  reducer: {
    item: itemReducer,
  },
});
