import { createSlice } from "@reduxjs/toolkit";

export const pageSlice = createSlice({
  name: "page",
  initialState: {
    pageSize: 4,
    currentPage: 1,
    initialPage: 1,
    activeNumber: 1,
  },
  reducers: {
    addPage(state, action) {
      state.currentPage += 1;
      state.activeNumber = action.payload;
    },
    subPage(state, action) {
      state.currentPage -= 1;
      state.activeNumber = action.payload;
    },
    setPage(state, action) {
      state.currentPage = action.payload;
      state.activeNumber = action.payload;
    },
  },
});

export const { addPage, subPage, setPage, setAmount } = pageSlice.actions;
