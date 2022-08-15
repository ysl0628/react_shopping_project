import { createSlice } from "@reduxjs/toolkit";

export const pageSlice = createSlice({
  name: "page",
  initialState: {
    totalAmount: 5,
    pageSize: 4,
    currentPage: 1,
    initialPage: 1,
  },
  reducers: {
    addPage(state, action) {
      state.currentPage += 1;
    },
    subPage(state, action) {
      state.currentPage -= 1;
    },
    setPage(state, action) {
      state.currentPage = action.payload;
    },
    setAmount(state, action) {
      state.totalAmount = action.payload;
    },
  },
});

export const { addPage, subPage, setPage, setAmount } = pageSlice.actions;
