import {createSlice} from "@reduxjs/toolkit";
import {client} from "../client";
import {addNotification} from "./notificationSlice";
import IProduct from "../types/IProduct";
import INotification from "../types/INotification";


interface ICart {
    products: [],
    total: number,
    showCart: boolean,
}

const initialState: ICart = {
    products: [],
    total: 0,
    showCart: false,
}

export const fetchCart = () => {
    return async (dispatch) => {
        try {
            //const response : Object | Promise<any> = await client.get('/api/cart');

            if (localStorage.getItem('cart')) {
                dispatch(cartSlice.actions.loadCart(JSON.parse(localStorage.getItem('cart'))));
            } else {
                dispatch(cartSlice.actions.loadCart({products: [], total: 0}));
            }

        } catch (err) {
            console.log(err);
        }
    };
};

export const saveCartData = (cart) => {
    return async (dispatch) => {
        try {
            const response: Object | Promise<any> = await client.post('/api/cart/', {
                method: 'POST',
                body: JSON.stringify(cart)
            });
        } catch (err) {
            console.log(err);
        }
    };
};

export const addProductToCart = (product: IProduct) => {
    return (dispatch, useSelector) => {
        const state = useSelector(state => state);

        dispatch(cartActions.addProductToCart(product))
        dispatch(addNotification({
            message: 'The product has been added to your cart',
            type: 'success',
            id: state.notification.items.length,
        } as INotification));
    }
};

export const removeProductFromCart = (productId: number) => {
    return (dispatch, useSelector) => {
        const state = useSelector(state => state);
        dispatch(cartActions.removeProductFromCart(productId))

        dispatch(addNotification({
            message: 'The product has been removed from your cart',
            type: 'success',
            id: state.notification.items.length,
        } as INotification));
    }
};

export const removeAllProductsFromCart = () => {
    return (dispatch, useSelector) => {
        const state = useSelector(state => state);
        dispatch(cartActions.removeAllProductsFromCart())

        dispatch(addNotification({
            message: 'Your cart has been emptied.',
            type: 'success',
            id: state.notification.items.length,
        } as INotification));
    }
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        loadCart(state, action) {
            state.products = action.payload.products;
            state.total = action.payload.total;
        },
        addProductToCart(state, action) {
            const newProduct = action.payload;
            const existingItem = state.products.find((item) => item.id === newProduct.id);

            if (!existingItem) {
                state.products.push({...newProduct});
            }

            state.total += newProduct.price;

            localStorage.setItem('cart', JSON.stringify({
                products: state.products,
                total: state.total,
            }))

        },
        removeProductFromCart(state, action) {
            const existingItem = state.products.find((item) => item.id === action.payload);

            if (existingItem) {
                state.products = state.products.filter((item) => item.id !== existingItem.id);

                state.total -= existingItem.price;
            }

            if (state.products.length) {
                localStorage.setItem('cart', JSON.stringify({
                    products: state.products,
                    total: state.total,
                }))
            } else {
                localStorage.removeItem('cart');
            }
        },
        removeAllProductsFromCart(state, action) {
            state.products = [];
            state.total = 0;

            localStorage.removeItem('cart');
        },
        setShowCart(state, action) {
            state.showCart = action.payload;
        }
    },
})

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;


