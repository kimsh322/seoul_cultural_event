import { configureStore } from "@reduxjs/toolkit";
import {
  fullItemSlice,
  filteredByPageSlice,
  currentPageSlice,
} from "./itemSlices";

export const store = configureStore({
  reducer: {
    fullItem: fullItemSlice.reducer,
    filteredByPage: filteredByPageSlice.reducer,
    currentPage: currentPageSlice.reducer,
  },
});
