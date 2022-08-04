import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: JSON.parse(localStorage.getItem("products")) || [],
  },
  reducers: {
    addToCart(state, action) {
      let productIndex = null;
      // isEmpty 為一陣列
      const isExsit = state.products.filter((product, index) => {
        if (product.id !== action.payload.id) return false;
        productIndex = index;
        return true;
      });
      if (isExsit.length === 0) {
        state.products.push({ ...action.payload, amount: 1 });
        localStorage.setItem("products", JSON.stringify(state.products));
        return;
      }
      state.products[productIndex].amount += 1;
      localStorage.setItem("products", JSON.stringify(state.products));
    },
    modifyToCart(state, action) {
      let productIndex = null;
      const isExsit = state.products.filter((product, index) => {
        if (product.id !== action.payload.product.id) return false;
        productIndex = index;
        return true;
      });
      if (isExsit.length === 0) return;
      state.products[productIndex].amount = parseInt(action.payload.value);

      localStorage.setItem("products", JSON.stringify(state.products));
    },
    selectToCart(state, action) {
      let productIndex = null;
      const isExsit = state.products.filter((product, index) => {
        if (product.id !== action.payload.product.id) return false;
        productIndex = index;
        return true;
      });
      if (isExsit.length === 0) {
        state.products.push({
          ...action.payload.product,
          amount: parseInt(action.payload.value),
        });
        localStorage.setItem("products", JSON.stringify(state.products));
        return;
      }
      state.products[productIndex].amount += parseInt(action.payload.value);
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

export const {
  addToCart,
  modifyToCart,
  removeFromCart,
  removeAll,
  selectToCart,
} = cartSlice.actions;
