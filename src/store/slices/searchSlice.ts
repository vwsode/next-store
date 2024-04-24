"use-client";

import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { searchProducts } from "../asyncThunks/searchThunks";
import { ISearchCategory, ISearchProduct } from "@/types/search.type";

interface ISearchState {
    searchTerm: string;
    result: {
        categories: ISearchCategory[];
        products: ISearchProduct[];
        totalCount: number;
    };
    loading: boolean;
    error: string | null;
}

const initialState: ISearchState = {
    searchTerm: "",
    result: {
        categories: [],
        products: [],
        totalCount: 0,
    },
    loading: false,
    error: null,
};

export const searchSlice = createSlice({
    name: "language",
    initialState,
    reducers: {
        updateSearchTerm: (state, action: PayloadAction<{ value: string }>) => {
            state.searchTerm = action.payload.value;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(searchProducts.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(searchProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.result = action.payload;

                console.log(action.payload);
            })
            .addCase(searchProducts.rejected, (state, action) => {
                state.loading = false;

                if (action.error.message) state.error = action.error.message;
            });
    },
});

export default searchSlice.reducer;
export const { updateSearchTerm } = searchSlice.actions;
