import { createSlice } from "@reduxjs/toolkit";


type MessageTypes = {
    messages: any[];
    recentMessage: any | null;
}

const initialState: MessageTypes = {
    messages: [],
    recentMessage: null
}

const messageSlice = createSlice({
    name: "message",
    initialState,
    reducers: {
        addAllMessages(state, action) {
            state.messages = action.payload;
        },
        addMessage(state, action) {
            let messageExists = state.messages.find((message) => message._id === action.payload._id);
            if (messageExists) {
                return;
            }
            state.messages = [...state.messages, action.payload];
            state.recentMessage = action.payload;

        },
        addRecentMessage(state) {
            let sizeOfMessages = state.messages.length;

            if (sizeOfMessages === 0) {

                return;
            }
            state.recentMessage = state.messages[sizeOfMessages - 1];

        },
        addUpdatedRecentMessage(state, action) {
            console.log(action.payload)
            let allUpadtedRecentMessages = state.messages.map((message) => {
                if (message._id === action.payload._id) {
                    console.log("found")
                    return action.payload
                }
                return message
            })
            state.messages = [...allUpadtedRecentMessages];
            state.recentMessage = action.payload;
        }
    },
});

export const { addAllMessages, addMessage, addRecentMessage, addUpdatedRecentMessage } = messageSlice.actions;
export default messageSlice.reducer;

