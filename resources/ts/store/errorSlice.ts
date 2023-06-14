import {createSlice} from "@reduxjs/toolkit";

interface IErrorState {
    errors: any,
}

const initialState = {
    errors: {},
} as IErrorState;

const errorSlice = createSlice({
    name: 'error',
    initialState,
    reducers: {
        setErrors(state, action) {
            state.errors = action.payload;
        }
    }
})

export const errorActions = errorSlice.actions;

export default errorSlice.reducer;
