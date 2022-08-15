import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { serverUrl } from "../../utlis/config";

const orderApi = createApi({
  reducerPath: "orderApi",
  // 指定查詢的基礎訊息，發送請求使用的工具，此工具也需一個對象
  baseQuery: fetchBaseQuery({
    baseUrl: `${serverUrl}/api/`,
    //用來統一設定請求頭
    prepareHeaders: (headers, { getState }) => {
      // 取得用戶的 token
      const token = getState().auth.token;
      if (!token) return;
      headers.set("Authorization", `Bearer ${token}`);
      return headers;
    },
  }),
  tagTypes: ["order"], // 指定 Api 中的標籤類型
  endpoints(build) {
    return {
      // get 獲取列表
      getOrders: build.query({
        query() {
          return {
            // ?populate=* 取得 api image 屬性
            url: `orders?populate=*`,
          };
        },
        // transformResponse 用來轉換響應數據的格式
        transformResponse(baseQueryReturnValue) {
          return {
            data: baseQueryReturnValue.data,
            meta: baseQueryReturnValue.meta.pagination,
          };
          // App.js 中 useGetordersQuery() 可直接調用 data
        },
        providesTags: [{ type: "order", id: "LIST" }], // 為getorders掛上標籤，當'orders'標籤失效時，會重新加載數據
      }),
      // post 增加商品
      addOrder: build.mutation({
        query(order) {
          return {
            url: "orders",
            method: "post",
            body: { data: order },
          };
        },
        invalidatesTags: [{ type: "order", id: "LIST" }],
        // 當addorder執行時會使'orders'標籤失效，getorders中'orders'標籤也失效
      }),
    };
  },
});

export const { useGetOrdersQuery, useAddOrderMutation } = orderApi;

export default orderApi;
