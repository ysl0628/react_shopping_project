import { createSlice } from "@reduxjs/toolkit";


export const cartSlice = createSlice({
  name: "cart",
  // 初始值看購物車中有沒有商品，有商品直接從 localStorage 中讀取
  initialState: {
    products: JSON.parse(localStorage.getItem("products")) || [],
  },
  reducers: {
    addToCart(state, action) {
      let productIndex = null;
      // isEmpty 為一陣列
      const isEmpty = state.products.filter((product, index) => {
        if (product.id !== action.payload.id) return false;
        productIndex = index;
        return true;
      });
      if (isEmpty.length === 0) {
        state.products.push(action.payload);
        localStorage.setItem("products", JSON.stringify(state.products));
        return;
      }
      state.products[productIndex].amount += action.payload.amount;
      localStorage.setItem("products", JSON.stringify(state.products));
    },
    modifyToCart(state, action) {
      let productIndex = null;
      const isEmpty = state.products.filter((product, index) => {
        if (product.id !== action.payload.id) return false;
        productIndex = index;
        return true;
      });
      if (isEmpty.length === 0) return;
      state.products[productIndex].amount = action.payload.amount;

      localStorage.setItem("products", JSON.stringify(state.products));
    },
    removeFromCart(state, action) {
      state.products = state.products.filter(
        (product) => product.id !== action.payload.id
      );
      localStorage.setItem("products", JSON.stringify(state.products));
    },
    removeAll(state, action) {
      state.products = [];
      localStorage.removeItem("products", JSON.stringify(state.products));
    },
  },
});

export const { addToCart, modifyToCart, removeFromCart, removeAll } =
  cartSlice.actions;
