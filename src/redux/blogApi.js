import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const blogApi = createApi({
  reducerPath: "blogApi",
  baseQuery: fetchBaseQuery({ baseUrl: `https://test-api-fm46.onrender.com` }), /* http://localhost:3000 */
  tagTypes: ["blog"], //auto refresh

  endpoints: (builder) => ({
    getBlogs: builder.query({
      //get the data
      // Will make a request like http://localhost:3000/blogs
      query: () => `/blogs`,
      providesTags: ["blog"], //auto refresh when data is requested //name from tagType
    }),
    getDetailBlog: builder.query({
      // Will make a request like http://localhost:3000/blogs/1
      query: (id) => `/blogs/${id}`,
      providesTags: ["blog"],
    }),
    createBlog: builder.mutation({
      query: (blog) => ({
        url: `/blogs`,
        method: "POST",
        body: blog,
      }),
      invalidatesTags: ["blog"],
    }),
    deleteBlog: builder.mutation({
      query: (id) => ({
        url: `/blogs/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["blog"],
    }),
    editBlog: builder.mutation({
        query: (newData) => ({
            url: `/blogs/${newData?.id}`,
            method: "PATCH",
            body: newData,
        }),
        invalidatesTags: ["blog"],
    })
  }),
});

export const {
  useGetBlogsQuery,
  useGetDetailBlogQuery,
  useCreateBlogMutation,
  useDeleteBlogMutation,
  useEditBlogMutation
} = blogApi;

//post, patch, get, delete, put Methods

//get the data => query => auto-refresh => providesTags
//send the data or update => mutation => auto-refresh => invalidateTags
