import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

import fetchData from '../../helpers/fecth';

const initialState = {
    data: [],
    status: 'idle',
    error: null
}

export const fecthPartners = createAsyncThunk(
    'partners/fecthPartners',
    async () => {
        const response = await fetchData('/partner');
        return response;
    }
)

const state = createSlice({
    name: 'partners',
    initialState,
    reducers: {

    },
    extraReducers: {
        [fecthPartners.pending]: (state, action) => {
            state.status = 'loading'
            return;
        },
        [fecthPartners.fulfilled]: (state, action) => {
            state.status = 'success';
            state.data = action.payload;
        },
        [fecthPartners.rejected]: (state, action) => {
            state.status = 'error';
            state.error = action.error.message;
        }
    }

});

export default state.reducer;

// actions
export const partnerActions = state.actions;

// selctors
export const selectPartners = state => {
    return state.partners.data;
}

export const selectPartnerStatus = state => {
    return state.partners.status;
}