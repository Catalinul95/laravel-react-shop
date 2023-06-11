import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import client from "../client";

interface IProduct {
    title: string,
    slug: string,
    image: string;
    description; string;
    price: number,
    status: string,
    created_at: string,
    updated_at: string,
}

interface IState {
    products: IProduct[];
    product: IProduct,
    popularProducts: IProduct[],
    latestProducts: IProduct[],
}

const initialState: IState = {
    products: [],
    product: {} as IProduct,
    popularProducts: [],
    latestProducts: [],
};

export const fetchLatestAndPopularProducts = () => {
    return async (dispatch) => {
        try {
            const response : Object | Promise<any> = await client.get('/api/products/latest-and-popular');

            dispatch(productsSlice.actions.setLatestAndPopularProducts(response.data));
        } catch (err) {
            console.log(err);
        }
    };
};

export const fetchProduct = (slug: string)  => {
    return async (dispatch) => {
        try {
            const response : Object | Promise<any> = await client.get('/api/products/' + slug);

            dispatch(productsSlice.actions.setProduct(response.data));
        } catch (err) {
            console.log(err);
        }
    };
};

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setLatestAndPopularProducts(state, action) {
            state.popularProducts = action.payload.popularProducts;
            state.latestProducts = action.payload.latestProducts;
        },
        setProduct(state, action) {
            state.product = action.payload;
        }
    },
})

export default productsSlice.reducer;
