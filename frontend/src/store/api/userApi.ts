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
        }),

        allChats: builder.query({
            query: (token) => ({
                url: "/chat/all",
                method: "GET",
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            })
        }),
        singleChat: builder.mutation({
            query: ({ chatId, token }: { chatId: string, token: string }) => ({
                url: `/chat/${chatId}`,
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${token}`
                }

            })
        }),
        logoutUser: builder.mutation({
            query: (token) => ({
                url: "/auth/logout",
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            })
        })

    })
})

const BASE_URL = 'http://localhost:9995/api/user';

export async function fetchUserData(token: string, search = "") {
    try {
        const response = await fetch(`${BASE_URL}/${search}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            }
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching user data:', error);
    }
}




export const { useGetUserQuery, useRegisterUserMutation, useLoginUserMutation, useAllChatsQuery, useSingleChatMutation, useLogoutUserMutation } = userApi;