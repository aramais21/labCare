import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

import fetchData from '../../helpers/fecth';

const initialState = {
    data: [],
    status: 'idle',
    error: null
}

export const fecthSocLinks = createAsyncThunk(
    'socLinks/fecthSocLinks',
    async () => {
        const response = await fetchData('/socialLink');
        return response;
    }
)

const state = createSlice({
    name: 'socLinks',
    initialState,
    reducers: {

    },
    extraReducers: {
        [fecthSocLinks.pending]: (state, action) => {
            state.status = 'loading'
            return;
        },
        [fecthSocLinks.fulfilled]: (state, action) => {
            state.status = 'success';
            state.data = action.payload;
        },
        [fecthSocLinks.rejected]: (state, action) => {
            state.status = 'error';
            state.error = action.error.message;
        }
    }

});

export default state.reducer;

// actions
export const socLinkActions = state.actions;

// selctors
export const selectSocLinks = state => {
    return state.socLinks.data;
}

export const selectSocLinkStatus = state => {
    return state.socLinks.status;
}