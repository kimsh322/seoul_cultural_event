import { configureStore } from "@reduxjs/toolkit";
import {
  fullItemSlice,
  currentPageSlice,
  filteredItemSlice,
} from "./itemSlices";
import { currentFilterSlice } from "./filterSlices";

export const store = configureStore({
  reducer: {
    fullItem: fullItemSlice.reducer,
    filteredItem: filteredItemSlice.reducer,
    currentPage: currentPageSlice.reducer,
    currentFilter: currentFilterSlice.reducer,
  },
});
