import {configureStore} from '@reduxjs/toolkit';
import productsReducer from "./productsSlice";
import cartReducer from "./cartSlice";
import notificationReducer from "./notificationSlice";
import userReducer from './userSlice';
import errorReducer from './errorSlice';

export default configureStore({
    reducer: {
        products: productsReducer,
        cart: cartReducer,
        notification: notificationReducer,
        user: userReducer,
        error: errorReducer,
    },
})
