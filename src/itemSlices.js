import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchEvent = createAsyncThunk("items", async () => {
  const response = await axios.get(
    "http://openapi.seoul.go.kr:8088/71766644546b736835336b767a465a/json/culturalEventInfo/1/6/"
  );
  return response.data;
});

const initialState = { value: "초기값" };

export const fullItemSlice = createSlice({
  name: "fullItem",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchEvent.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(fetchEvent.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.value = { ...action.payload };
    });
  },
});
