import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slice/userSlice";
import chatSlice from "./slice/chatSlice";
import messageSlice from "./slice/messageSlice";
import socketSlice from "./slice/socketSlice";
import { userApi } from "./api/userApi";

const store = configureStore({
    reducer: {
        user: userSlice,
        chats: chatSlice,
        messages: messageSlice,
        socket: socketSlice,
        [userApi.reducerPath]: userApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(userApi.middleware),
})




export default store;

export * from "./slice/userSlice"
export * from "./slice/chatSlice"
export * from "./slice/messageSlice"