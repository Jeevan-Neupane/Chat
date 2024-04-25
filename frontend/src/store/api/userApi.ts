import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const userApi = createApi({
    reducerPath: "userApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:9995/api" }),

    endpoints: (builder) => ({



        getUser: builder.query({
            query: () => `/user`,
        }),



        registerUser: builder.mutation({
            query: (formData) => ({
                url: `auth/signup`,
                method: "POST",
              
                
                body: formData,
            })
        }),



    })
})

export const { useGetUserQuery, useRegisterUserMutation } = userApi;