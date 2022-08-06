import { createSlice } from "@reduxjs/toolkit";

export const inputSlice = createSlice({
  name: "input",
  initialState: {
    value: "",
    isTouched: false,
  },
  reducers: {
    onInput(state, action) {
      state.value = action.payload.value; // 傳入 input 的 e.target.value
    },
    onBlur(state, action) {
      state.isTouched = true; // 失去焦點
    },
    reset(state, action) {
      state.value = "";
      state.isTouched = false;
    },
  },
});

export const { onInput, onBlur, reset } = inputSlice.actions;
