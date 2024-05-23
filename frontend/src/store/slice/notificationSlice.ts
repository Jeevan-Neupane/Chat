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

            state.notifications = state.notifications.map((notification) => {
                if (notification.seen === true) return notification;
                return {
                    ...notification,
                    seen: false
                }
            })
        },
        removeNotification(state, action) {
            console.log("remove notification", action.payload);
            state.notifications = state.notifications.filter(
                (notification) => notification._id !== action.payload._id
            );
        },
        updateNotification(state) {
            state.notifications = state.notifications.map((notification) => {

                return {
                    ...notification,
                    seen: true
                }


            })
        }
    },
});

export const { addNotification, removeNotification, updateNotification } = notificationSlice.actions;

export default notificationSlice.reducer;