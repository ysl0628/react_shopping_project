import { createSlice } from "@reduxjs/toolkit";

export const categorySlice = createSlice({
  name: "category",
  initialState: {
    status: "all",
    dataSource: [],
  },
  reducers: {
    setStatus(state, action) {
      state.status = action.payload.status;
      state.dataSource = action.payload.dataSource;
    },
  },
});

export const { setStatus } = categorySlice.actions;
