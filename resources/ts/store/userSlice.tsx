import {createSlice} from "@reduxjs/toolkit";
import {client} from "../client";
import {errorActions} from "./errorSlice";
import {addNotification} from "./notificationSlice";
import INotification from "../types/INotification";

interface IUser
{
    id?: number;
    name: string;
    email: string;
}

interface IUserState {
    user: IUser | null,
    jwtToken: string | null,
}

export function login(credentials) {
    return async (dispatch, useSelector) => {
        const state = useSelector(state => state);

        try {
            const response : Object = await client.post('/api/login', {body: credentials});

            dispatch(userSlice.actions.setUser(response.data.user));
            dispatch(userSlice.actions.setJwtToken(response.data.token));

            dispatch(addNotification({
                message: 'Welcome back!',
                type: 'success',
                id: state.notification.items.length,
            } as INotification));

        } catch (err) {
            dispatch(errorActions.setErrors(err.data));

            if (err.status === 401) {
                dispatch(addNotification({
                    message: err.message,
                    type: 'error',
                    id: state.notification.items.length,
                } as INotification));
            }
        }
    }
}

const initialState = {
    user: null,
    jwtToken: null,
} as IUserState;

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action) {
            state.user = action.payload;
        },
        setJwtToken(state, action) {
            state.jwtToken = action.payload;
            localStorage.setItem('JWT_TOKEN', state.jwtToken);
        }
    }
})

export default userSlice.reducer;
