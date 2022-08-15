import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { serverUrl } from "../../utlis/config";

const userApi = createApi({
  reducerPath: "userApi",
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
  tagTypes: ["users"], // 指定 Api 中的標籤類型
  endpoints(build) {
    return {
      // get 獲取列表
      getUserById: build.query({
        query(id) {
          return {
            // ?populate=* 取得 api image 屬性
            url: `users/${id}?populate[orders][populate][0]=products`,
          };
        },
        transformResponse(baseQueryReturnValue) {
          return baseQueryReturnValue;
        },
        providesTags: [{ type: "users", id: "LIST" }], // 為getusers掛上標籤，當'users'標籤失效時，會重新加載數據
      }),
    };
  },
});

export const { useGetUserByIdQuery } = userApi;

export default userApi;
