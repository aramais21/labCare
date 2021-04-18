import { createSlice } from "@reduxjs/toolkit";
import { langEnum } from "../../config/constants";

const initialState = {
    lang: langEnum.ENG
}

const langSlice = createSlice({
    name: 'lang',
    initialState,
    reducers: {
        change: (state, action) => {
            const {lang} = action.payload;

            if (lang && langEnum.hasOwnProperty(lang)) {
                state.lang = lang;
            }
            return state;
        }
    }

})

export const {change} = langSlice.actions;

export const selectLang = (state) => state.lang.lang;

export default langSlice.reducer;