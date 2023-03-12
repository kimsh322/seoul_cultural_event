import { configureStore } from "@reduxjs/toolkit";
import {
  fullItemSlice,
  currentPageSlice,
  filteredItemSlice,
} from "./itemSlices";

export const store = configureStore({
  reducer: {
    fullItem: fullItemSlice.reducer,
    filteredItem: filteredItemSlice.reducer,
    currentPage: currentPageSlice.reducer,
  },
});
