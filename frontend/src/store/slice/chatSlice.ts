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
        },
        updateRecentMessage(state, action) {
            let friendIndex = state.allChats.findIndex((item) => item._id === action.payload.chat._id);
            if (friendIndex === -1) {
                return;
            }
            let updatedFriend = state.allChats[friendIndex];
            state.allChats.splice(friendIndex, 1);

            updatedFriend.latestMessage[0] = action.payload;

            state.allChats = [updatedFriend, ...state.allChats];
        },
        upadateSeenMessage(state, action) {
            let updatesList = state.allChats.map((item) => {
                if (item._id === action.payload.chatId) {
                    return action.payload;
                }
                return item;
            })
            state.allChats = [...updatesList];

        }
    },
});


export const { addAllChats, addSingleChat, updateRecentMessage,upadateSeenMessage } = chatSlice.actions;
export default chatSlice.reducer;