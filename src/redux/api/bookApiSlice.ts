import { api } from "./apiSlice";

export const bookApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => ({ url: "books" }),
      providesTags: ["books"],
    }),
    getSingleBook: builder.query({
      query: (id) => ({ url: `book/${id}` }),
      providesTags: ["books"],
    }),
    postBook: builder.mutation({
      query: (data) => ({
        url: "book",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["books"],
    }),
    updateBook: builder.mutation({
      query: ({ id, book }) => ({
        url: `book/${id}`,
        method: "PUT",
        body: book,
      }),
      invalidatesTags: ["books"],
    }),
    deleteBook: builder.mutation({
      query: (id) => ({
        url: `book/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["books"],
    }),
    createRiview: builder.mutation({
      query: ({ id, review }) => ({
        url: `review/${id}`,
        method: "PUT",
        body: review,
      }),
      invalidatesTags: ["books"],
    }),
  }),
});
export const {
  useGetBooksQuery,
  useGetSingleBookQuery,
  usePostBookMutation,
  useUpdateBookMutation,
  useDeleteBookMutation,
  useCreateRiviewMutation,
} = bookApi;
