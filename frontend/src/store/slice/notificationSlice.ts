import { createSlice } from "@reduxjs/toolkit";

type initialStateType = {
    notifications: any[],
};

const initialState: initialStateType = {
    notifications: [],
};




const notificationSlice = createSlice({
    name: "notification",
    initialState,
    reducers: {
        addNotification(state, action) {
            let notification = state.notifications.find((notification) => notification._id === action.payload._id)
            if (notification) {
                return;
            }
            state.notifications = [action.payload, ...state.notifications];
        },
        removeNotification(state, action) {
            state.notifications = state.notifications.filter(
                (notification) => notification.id !== action.payload
            );
        },
    },
});

export const { addNotification, removeNotification } = notificationSlice.actions;

export default notificationSlice.reducer;