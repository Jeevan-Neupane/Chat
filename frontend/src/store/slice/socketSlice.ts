import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    socket: null,
    socketConnected: false,
    socketError: null,
};

const socketSlice = createSlice({
    name: "socket",
    initialState,
    reducers: {
        setSocket: (state, action) => {
            state.socket = action.payload;
        },
        setSocketConnected: (state, action) => {
            state.socketConnected = action.payload;
        },
        setSocketError: (state, action) => {
            state.socketError = action.payload;
        },
    },
});


export const { setSocket, setSocketConnected, setSocketError } = socketSlice.actions;

export default socketSlice.reducer;