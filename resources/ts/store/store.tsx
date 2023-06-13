import {configureStore} from '@reduxjs/toolkit';
import productsReducer from "./productsSlice";
import cartReducer from "./cartSlice";
import notificationReducer from "./notificationSlice";

export default configureStore({
    reducer: {
        products: productsReducer,
        cart: cartReducer,
        notification: notificationReducer,
    },
})
