import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import authApi from "./api/authApi";
import orderApi from "./api/orderApi";
import orderProductApi from "./api/orderProductApi";
import productsApi from "./api/productsApi";
import userApi from "./api/userApi";
import { authSlice } from "./reducers/authSlice";
import { cartSlice } from "./reducers/cartSlice";
import { categorySlice } from "./reducers/categorySlice";
import { orderSlice } from "./reducers/orderSlice";
import { pageSlice } from "./reducers/pageSlice";

const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [productsApi.reducerPath]: productsApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [orderApi.reducerPath]: orderApi.reducer,
    [orderProductApi.reducerPath]: orderProductApi.reducer,
    auth: authSlice.reducer,
    page: pageSlice.reducer,
    cart: cartSlice.reducer,
    order: orderSlice.reducer,
    category: categorySlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      authApi.middleware,
      productsApi.middleware,
      userApi.middleware,
      orderApi.middleware,
      orderProductApi.middleware
    ),
});
setupListeners(store.dispatch);

export default store;
