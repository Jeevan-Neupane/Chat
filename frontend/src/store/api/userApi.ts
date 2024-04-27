import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const userApi = createApi({
    reducerPath: "userApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:9995/api"

        , credentials: "include"
    }),

    endpoints: (builder) => ({



        getUser: builder.query({
            query: (token) => ({
                url: "/auth/user",
                method: "GET",
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            })
        }),



        registerUser: builder.mutation({
            query: (formData) => ({
                url: `auth/signup`,
                method: "POST",


                body: formData,
            })
        }),

        loginUser: builder.mutation({
            query: (formData) => ({
                url: `auth/login`,
                method: "POST",
                body: formData
            })
        })



    })
})

export const { useGetUserQuery, useRegisterUserMutation, useLoginUserMutation, } = userApi;