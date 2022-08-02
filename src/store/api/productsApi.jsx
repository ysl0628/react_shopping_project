import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

const productsApi = createApi({
  reducerPath: "productsApi",
  // 指定查詢的基礎訊息，發送請求使用的工具，此工具也需一個對象
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:1337/api/",
    //用來統一設定請求頭
    // prepareHeaders: (headers, { getState }) => {
    //   // 取得用戶的 token
    //   const token = getState().auth.token;
    //   if (!token) return;
    //   headers.set("Authorization", `Bearer ${token}`);
    //   return headers;
    // },
  }),
  tagTypes: ["products"], // 指定 Api 中的標籤類型
  endpoints(build) {
    return {
      // get 獲取列表
      getProductsByPage: build.query({
        query(page = 1) {
          return {
            // ?populate=* 取得 api image 屬性
            url: `products?populate=*&pagination[page]=${page}&pagination[pageSize]=4`, // 會與 baseUrl 拼接成 'http://localhost:1337/api/products'
          }; // &pagination[page]=${page}&pagination[pageSize]=4
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
      // get 獲取列表
      getProducts: build.query({
        query() {
          return {
            // ?populate=* 取得 api image 屬性
            url: "products?populate=*", // 會與 baseUrl 拼接成 'http://localhost:1337/api/products'
          }; // &pagination[page]=${page}&pagination[pageSize]=4
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
  useGetProductsByPageQuery,
  useGetProductsQuery,
  useGetProductByIdQuery,
  useDelProductMutation,
  useAddProductMutation,
  useUpdateProductMutation,
} = productsApi;

export default productsApi;

// import { get, post, put, del } from "../utlis/request";

// /**
//  * 獲取列表
//  * @param {*} page
//  */
// export function listApi(page = 1) {
//   return get("/api/v1/admin/products", { page });
// }

// /**
//  * 建立數據
//  * @param {*} data
//  */
// export function createApi(data) {
//   return post("/api/v1/admin/products", data);
// }

// /**
//  * 修改紀錄
//  * @param {*} id
//  * @param {*} data
//  */
// export function modifyOne(id, data) {
//   return put(`/api/v1/admin/products/${id}`, data);
// }

// /**
//  * 刪除
//  * @param {*} id
//  * @param {*} data
//  */
// export function delOne(id, data) {
//   return del(`/api/v1/admin/products/${id}`);
// }
