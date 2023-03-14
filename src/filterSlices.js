import { createSlice } from "@reduxjs/toolkit";

export const currentFilterSlice = createSlice({
  name: "currentFilter",
  initialState: {
    classification: "전체",
    location: "전체",
    selectedDate: "2023-03-14",
  },
  reducers: {
    setClassification: (state, action) => {
      state.classification = action.payload;
    },
    setLocation: (state, action) => {
      state.location = action.payload;
    },
    setSelectedDate: (state, action) => {
      state.selectedDate = action.payload;
    },
  },
});

export const { setClassification, setLocation, setSelectedDate } =
  currentFilterSlice.actions;
