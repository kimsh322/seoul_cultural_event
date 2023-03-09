import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchEvent = createAsyncThunk("items", async () => {
  const response = await axios.get(
    "http://openapi.seoul.go.kr:8088/71766644546b736835336b767a465a/json/culturalEventInfo/1/50/"
  );
  return response.data;
});

// 전체 아이템 저장
export const fullItemSlice = createSlice({
  name: "fullItem",
  initialState: { fullItem: "초기값" },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchEvent.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(fetchEvent.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.fullItem = { ...action.payload };
    });
  },
});
// 필터링된 아이템
export const filteredByPageSlice = createSlice({
  name: "filteredByPageSlice",
  initialState: {},
  reducers: {},
});
// 페이지
export const currentPageSlice = createSlice({
  name: "currentPage",
  initialState: { currentPage: 1, limitItems: 6 },
  reducers: {
    prevPage: (state) => {
      state.currentPage--;
    },
    nextPage: (state) => {
      state.currentPage++;
    },
    somePage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
});
export const { prevPage, nextPage, somePage } = currentPageSlice.actions;
