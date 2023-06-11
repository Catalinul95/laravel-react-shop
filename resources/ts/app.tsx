import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider} from "react-router-dom";
import {Provider, useDispatch} from "react-redux";
import store from "./store/store";

import './bootstrap';
import '../css/app.css'

import router from "./router";
import {fetchLatestAndPopularProducts} from "./store/productsSlice";
import {fetchCart} from "./store/cartSlice";

async function start() {
    await store.dispatch(fetchLatestAndPopularProducts());
    await store.dispatch(fetchCart());

    ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
        <React.StrictMode>
            <Provider store={store}>
                <RouterProvider router={router}></RouterProvider>
            </Provider>
        </React.StrictMode>,
    )
}

start();


