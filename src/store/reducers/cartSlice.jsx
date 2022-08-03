import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    totalAmount: 0,
    totalPrice: 0,
  },
  reducers: {
    addToCart(state, action) {
      let productIndex = null;
      state.totalAmount += 1;
      state.totalPrice += action.payload.price;
      // isEmpty 為一陣列
      const isExsit = state.products.filter((product, index) => {
        if (product.id !== action.payload.id) return false;
        productIndex = index;
        return true;
      });
      if (isExsit.length === 0) {
        state.products.push({ ...action.payload, amount: 1 });
        return;
      }
      state.products[productIndex].amount += 1;
    },
    // removeFromCart(state, action) {
    //   let productIndex = null;
    //   state.totalAmount -= 1;
    //   state.totalPrice -= action.payload.price;
    //   const product = state.products.filter((product, index) => {
    //     if (product.id !== action.payload.id) return false;
    //     productIndex = index;
    //     return true;
    //   });
    //   if (action.payload.amount) state.products[productIndex].amount -= 1;
    // },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
