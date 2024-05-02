import { createSlice } from "@reduxjs/toolkit";


type MessageTypes = {
    messages: any[];
}

const initialState: MessageTypes = {
    messages: [],
}

const messageSlice = createSlice({
    name: "message",
    initialState,
    reducers: {
        addAllMessages(state, action) {
            state.messages = action.payload;
        },
        addMessage(state, action) {
            state.messages = [...state.messages, action.payload];

        }
    },
});

export const { addAllMessages, addMessage } = messageSlice.actions;
export default messageSlice.reducer;
