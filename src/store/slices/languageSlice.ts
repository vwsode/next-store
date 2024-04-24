"use-client";

import { createSlice } from "@reduxjs/toolkit";

const initialState: {
    language: "ru" | "en";
} = {
    language: "ru",
};

export const languageSlice = createSlice({
    name: "language",
    initialState,
    reducers: {
        changeLanguage: (state, action) => {
            state.language = action.payload;
        },
    },
});

export default languageSlice.reducer;
export const { changeLanguage } = languageSlice.actions;
