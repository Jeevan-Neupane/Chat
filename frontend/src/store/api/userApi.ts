import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const userApi = createApi({
    reducerPath: "userApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000" }),

    endpoints: (builder) => ({



        getUser: builder.query({
            query: () => `/user`,
        }),



        createUser: builder.mutation({
            query: (body) => ({
                url: `/user`,
                method: "POST",
                body,
            })
        }),



    })
})

export const { useGetUserQuery, useCreateUserMutation } = userApi;