import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

import fetchData from '../../helpers/fecth';

const initialState = {
    data: [],
    status: 'idle',
    error: null
}

export const fecthCategories = createAsyncThunk(
    'products/fecthCategories',
    async () => {
        const response = await fetchData('/category');
        return response;
    }
)

const state = createSlice({
    name: 'categories',
    initialState,
    reducers: {

    },
    extraReducers: {
        [fecthCategories.pending]: (state, action) => {
            state.status = 'loading'
            return;
        },
        [fecthCategories.fulfilled]: (state, action) => {
            state.status = 'success';
            state.data = action.payload;
        },
        [fecthCategories.rejected]: (state, action) => {
            state.status = 'error';
            state.error = action.error.message;
        }
    }

});

export default state.reducer;

// actions
export const categoriesActions = state.actions;

// selctors
export const selectCategories = state => {
    return state.categories.data;
}

export const selectCategoryStatus = state => {
    return state.categories.status;
}