import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchEvent = createAsyncThunk("items", async () => {
  const response = await axios.get(
    "http://openapi.seoul.go.kr:8088/71766644546b736835336b767a465a/json/culturalEventInfo/1/5/"
  );
  return response.data;
});

const initialState = { value: "초기값" };

export const fullItemSlice = createSlice({
  name: "fullItem",
  initialState,
  reducers: {
    // filterByDate: (state) => {
    //   state = { value: { ...state.culturalEventInfo } };
    // },
    // filterByRegion: (state) => {
    //   state.value = "2";
    // },
    // filterByCodeName: (state, action) => {
    //   state.value = "3";
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchEvent.pending, (state) => {
      // Add user to the state array
      state.loading = "pending";
    });
    builder.addCase(fetchEvent.fulfilled, (state, action) => {
      // Add user to the state array
      state.loading = "succeeded";
      state.value = { ...action.payload };
    });
  },
});

// // Action creators are generated for each case reducer function
// export const { filterByDate, filterByRegion, filterByCodeName } =
//   itemSlice.actions;

export default fullItemSlice.reducer;
