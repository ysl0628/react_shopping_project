import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:1337/api/",
  }),
  endpoints(build) {
    return {
      login: build.mutation({
        query(user) {
          return {
            url: "auth/local",
            method: "post",
            body: user, // identifier
          };
        },
      }),
    };
  },
});

export const { useLoginMutation } = authApi;
export default authApi;
