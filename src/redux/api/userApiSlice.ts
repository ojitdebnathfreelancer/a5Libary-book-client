import { api } from "./apiSlice";

const userAPiSlice = api.injectEndpoints({
  endpoints: (builder) => ({
    saveUser: builder.mutation({
      query: (user) => ({
        url: "user",
        method: "POST",
        body: user,
      }),
    }),
    getUser: builder.query({
      query: (emial: string) => ({
        url: `user/${emial}`,
      }),
    }),
  }),
});

export const { useGetUserQuery, useSaveUserMutation } = userAPiSlice;
