import { useCallback } from 'react';
import { AppDispatch, RootState } from '@/store/store';
import { useDispatch, useSelector } from 'react-redux';
import { updateSearchTerm as updateSearchTermAction } from '@/store/slices/searchSlice';
import { searchProducts as searchProductsAction } from '@/store/asyncThunks/searchThunks';
import debounce from 'lodash.debounce';

export const useSearch = () => {
    const { searchTerm, loading, error, result } = useSelector((state: RootState) => state.search);
    const dispatch = useDispatch<AppDispatch>();

    const debouncedSearchProducts = useCallback(
        debounce((value: string) => {
            dispatch(searchProductsAction(value));
        }, 500),
        [], // Пустой массив зависимостей, чтобы этот колбэк не создавался каждый раз заново
    );

    const updateSearchTerm = (value: string) => {
        dispatch(
            updateSearchTermAction({
                value,
            }),
        );

        debouncedSearchProducts(value);
    };

    return {
        searchTerm,
        updateSearchTerm,
        loading,
        error,
        result,
    };
};
