import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    token: null,
    user: null,
    auth: false,
    chats: [],
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setToken: (state, action) => {
            state.token = action.payload;

        },
        setUser: (state, action) => {
            state.user = action.payload;
        },
        setAuth: (state, action) => {
            state.auth = action.payload;
        },
        setChats: (state, action) => {
            state.chats = action.payload;
        }
    },
});


export const { setUser, setToken, setAuth } = userSlice.actions;
export default userSlice.reducer;