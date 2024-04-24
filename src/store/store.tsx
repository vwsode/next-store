'use client';
import { FC, ReactNode, useRef } from 'react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

import language from './slices/languageSlice';
import search from './slices/searchSlice';

interface Props {
    children: ReactNode;
}

const StoreProvider: FC<Props> = ({ children }) => {
    return <Provider store={store}>{children}</Provider>;
};

export const store = configureStore({
    reducer: {
        language,
        search,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default StoreProvider;
