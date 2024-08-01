import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "first name",
};

const firstSlice = createSlice({
  name: "firstSlice",
  initialState,
  reducers: {},
});

export const firstSliceActions = firstSlice.actions;
export const firstReducer = firstSlice.reducer;
