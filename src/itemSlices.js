import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchEvent = createAsyncThunk("items", async () => {
  const authorize = "71766644546b736835336b767a465a";
  const loadingItem = 500;
  const response = await axios.get(
    `http://openapi.seoul.go.kr:8088/${authorize}/json/culturalEventInfo/1/${loadingItem}/`
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
export const filteredItemSlice = createSlice({
  name: "filteredItem",
  initialState: { filteredItem: [] },
  reducers: {
    filteringReducer: (state, action) => {
      const { fullItem } = action.payload;
      const { classification, location, selectedDate } =
        action.payload.currentFilter;
      const fullItemArr = fullItem.culturalEventInfo.row;
      let filteredArr = fullItemArr;
      if (classification !== "전체") {
        filteredArr = fullItemArr.filter(
          (el) => el.CODENAME === classification
        );
      }
      if (location !== "전체") {
        filteredArr = filteredArr.filter((el) => el.GUNAME === location);
      }
      filteredArr = filteredArr.filter(
        (el) =>
          Date.parse(el.STRTDATE) + 1000 * 60 * 60 * 9 >=
          Date.parse(selectedDate) // 한국기준시각 조정
      );
      state.filteredItem = filteredArr;
    },
  },
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

export const { filteringReducer } = filteredItemSlice.actions;
export const { prevPage, nextPage, somePage } = currentPageSlice.actions;
