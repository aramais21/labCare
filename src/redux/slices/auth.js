import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import publicIp from 'public-ip';

const initialState = {
    status: 'idle',
    isLoggedIn: localStorage.getItem('token')?true:false,
    isAbleToOpenAdmin: false,
}

export const check = createAsyncThunk('auth/check', async () => {
    const ip = await publicIp.v4();
    const response = await fetch(`https://ipinfo.io/${ip}?token=2c4d1dacaf9528`, {method: 'GET', headers: {'Content-Type': 'application/json'}});
    const res = await response.json();
    return res.country;
});

const state = createSlice(
    {
        name: 'auth',
        initialState,
        reducers: {
            logIn: (state, action) => {
                localStorage.setItem('token', action.payload);
                state.isLoggedIn = true;
            },
            logOut: (state, action) => {
                localStorage.removeItem('token');
                state.isLoggedIn = false;
            }
        },
        extraReducers: {
            [check.pending]: (state, action) => {
                state.status = 'loading';
            },
            [check.rejected]: (state, action) => {
                state.status = 'error';
                state.isAbleToOpenAdmin = false;
            },
            [check.fulfilled]: (state, action) => {
                state.status = 'success';
                if (action.payload === 'AM') {
                    state.isAbleToOpenAdmin = true;
                }
                else {
                    state.isAbleToOpenAdmin = false;
                }
            }
        }
    }
)

export default state.reducer;

export const selectAuthStatus = (state) => state.auth.status;

export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;

export const selectIsAbleToOpenAdmin = (state) => state.auth.isAbleToOpenAdmin;

export const {logIn, logOut} = state.actions;