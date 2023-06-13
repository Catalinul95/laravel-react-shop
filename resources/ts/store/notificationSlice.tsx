import {createSlice} from "@reduxjs/toolkit";
import INotification from "../types/INotification";

interface INotificationState {
    notifications: INotification[],
}

const initialState = {
    items: [],
} as INotificationState;

export const addNotification = (notification: INotification) => {
    return (dispatch) => {
        dispatch(notificationActions.addNotification(notification))
    };
};

const notificationSlice = createSlice({
    name: 'notification',
    initialState,
    reducers: {
        addNotification(state, action) {
            state.items = [...state.items, {
                message: action.payload.message,
                type: action.payload.type,
                hide: false,
                id: action.payload.id,
            }];
        },
        hideNotification(state, action) {
            state.items.forEach(item => {
                if (item.id === action.payload) {
                    item.hide = true;
                }
            })
        },
        removeNotification(state, action) {
            state.items = state.items.filter(notification => notification.id !== action.payload);
        },
    }
})

export const notificationActions = notificationSlice.actions;

export default notificationSlice.reducer;
