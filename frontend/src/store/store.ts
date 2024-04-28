import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slice/userSlice";
import { userApi } from "./api/userApi";

const store = configureStore({
    reducer: {
        user: userSlice,
        [userApi.reducerPath]: userApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(userApi.middleware),
})




export default store;

export * from "./slice/userSlice"