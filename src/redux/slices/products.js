import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

import fetchData from '../../helpers/fecth';

const initialState = {
    data: [],
    status: 'idle',
    error: null
}

export const fecthProducts = createAsyncThunk(
    'products/fecthProducts',
    async () => {
        const response = await fetchData('/product');
        return response;
    }
)

const state = createSlice({
    name: 'products',
    initialState,
    reducers: {

    },
    extraReducers: {
        [fecthProducts.pending]: (state, action) => {
            state.status = 'loading'
            return;
        },
        [fecthProducts.fulfilled]: (state, action) => {
            state.status = 'success';
            state.data = action.payload;
        },
        [fecthProducts.rejected]: (state, action) => {
            state.status = 'error';
            state.error = action.error.message;
        }
    }

});

export default state.reducer;

// actions
export const productActions = state.actions;

// selctors
export const selectProducts = state => {
    return state.products.data;
}

export const selectProductStatus = state => {
    return state.products.status;
}