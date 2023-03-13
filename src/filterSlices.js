import { createSlice } from "@reduxjs/toolkit";

export const currentFilterSlice = createSlice({
  name: "currentFilter",
  initialState: { classification: "전체", location: "전체" },
  reducers: {
    setClassification: (state, action) => {
      state.classification = action.payload;
    },
    setLocation: (state, action) => {
      state.location = action.payload;
    },
  },
});

export const { setClassification, setLocation } = currentFilterSlice.actions;
