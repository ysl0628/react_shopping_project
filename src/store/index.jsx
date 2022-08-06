import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import authApi from "./api/authApi";
import productsApi from "./api/productsApi";
import { authSlice } from "./reducers/authSlice";
import { cartSlice } from "./reducers/cartSlice";
import { inputSlice } from "./reducers/inputSlice";
import { pageSlice } from "./reducers/pageSlice";

const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [productsApi.reducerPath]: productsApi.reducer,
    auth: authSlice.reducer,
    page: pageSlice.reducer,
    cart: cartSlice.reducer,
    input: inputSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware, productsApi.middleware),
});
setupListeners(store.dispatch);

export default store;
