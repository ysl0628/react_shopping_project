import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { serverUrl } from "../../utlis/config";

const productsApi = createApi({
  reducerPath: "productsApi",
  // 指定查詢的基礎訊息，發送請求使用的工具，此工具也需一個對象
  baseQuery: fetchBaseQuery({
    baseUrl: `${serverUrl}/api/`,
  }),
  tagTypes: ["products"], // 指定 Api 中的標籤類型
  endpoints(build) {
    return {
      // get 獲取列表
      getProducts: build.query({
        query() {
          return {
            // ?populate=* 取得 api image 屬性
            url: "products?populate=*",
          };
        },
        // transformResponse 用來轉換響應數據的格式
        transformResponse(baseQueryReturnValue) {
          return {
            data: baseQueryReturnValue.data,
            meta: baseQueryReturnValue.meta.pagination,
          };
          // App.js 中 useGetProductsQuery() 可直接調用 data
        },
        providesTags: [{ type: "products", id: "LIST" }], // 為getProducts掛上標籤，當'products'標籤失效時，會重新加載數據
      }),
      // 以 id get 獲取列表
      getProductById: build.query({
        query(id) {
          return `products/${id}?populate=*`;
        }, // transformResponse 用來轉換響應數據的格式
        transformResponse(baseQueryReturnValue) {
          return baseQueryReturnValue.data;
          // Form 中 useGetProductsQuery() 可直接調用 data
        },
        keepUnusedDataFor: 60, // 設置數據緩存的事件，單位秒，默認60s
        providesTags: (result, error, id) => [{ type: "products", id }],
      }),
      // delete 刪除數據
      delProduct: build.mutation({
        query(id) {
          return {
            url: `products/${id}`,
            method: "delete",
          };
        }, // transformResponse 用來轉換響應數據的格式
        transformResponse(baseQueryReturnValue) {
          return baseQueryReturnValue.data;
        },
        invalidatesTags: ["products"],
      }),
      // post 增加商品
      addProduct: build.mutation({
        query(product) {
          return {
            url: "products",
            method: "post",
            body: { data: product },
          };
        },
        invalidatesTags: [{ type: "products", id: "LIST" }],
        // 當addProduct執行時會使'products'標籤失效，getProducts中'products'標籤也失效
      }),
      // put 修改更新商品
      updateProduct: build.mutation({
        query(product) {
          return {
            url: `products/${product.id}`,
            method: "put",
            body: { data: product.attributes },
          };
        },
        invalidatesTags: (result, error, id) => [
          { type: "products", id },
          { type: "products", id: "LIST" },
        ],
      }),
    };
  },
});

export const {
  useGetProductsQuery,
  useGetProductByIdQuery,
  useDelProductMutation,
  useAddProductMutation,
  useUpdateProductMutation,
} = productsApi;

export default productsApi;
