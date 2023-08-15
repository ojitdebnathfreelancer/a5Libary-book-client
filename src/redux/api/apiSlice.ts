import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://libary-book.vercel.app",
  }),
  tagTypes: ["users", "books"],
  endpoints: () => ({}),
});
