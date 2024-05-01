import { createSlice } from "@reduxjs/toolkit";

type ChatTypes = {
    allChats: any[];
}

const initialState: ChatTypes = {
    allChats: [],
}

const chatSlice = createSlice({
    name: "chat",
    initialState,
    reducers: {
        addAllChats(state, action) {
            state.allChats = action.payload;

        },
        addSingleChat(state, action) {
            let friendIndex = state.allChats.findIndex((item) => item._id === action.payload._id);

            if (friendIndex !== -1) {
                return;
            }
            state.allChats = [action.payload, ...state.allChats];
        }
    },
});


export const { addAllChats, addSingleChat } = chatSlice.actions;
export default chatSlice.reducer;