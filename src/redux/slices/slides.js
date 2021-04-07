import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

import fetchData from '../../helpers/fecth';

const initialState = {
    data: [],
    status: 'idle',
    error: null
}

export const fecthSlides = createAsyncThunk(
    'slides/fecthSlides',
    async () => {
        const response = await fetchData('/slide');
        return response;
    }
)

const state = createSlice({
    name: 'slides',
    initialState,
    reducers: {

    },
    extraReducers: {
        [fecthSlides.pending]: (state, action) => {
            state.status = 'loading'
            return;
        },
        [fecthSlides.fulfilled]: (state, action) => {
            state.status = 'success';
            state.data = action.payload;
        },
        [fecthSlides.rejected]: (state, action) => {
            state.status = 'error';
            state.error = action.error.message;
        }
    }

});

export default state.reducer;

// actions
export const slideActions = state.actions;

// selctors
export const selectSlides = state => {
    return state.slides.data;
}

export const selectSlideStatus = state => {
    return state.slides.status;
}