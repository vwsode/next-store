'use-client';

import { createSlice } from '@reduxjs/toolkit';

const data = [
    {
        id: '1',
        title: 'Тип стёкол',
        searchable: false,
        inputs: [
            {
                label: 'Обычные',
                value: 'Обычные',
                id: '1',
                checked: false,
            },
            {
                label: 'Безрамочные',
                value: 'Безрамочные',
                id: '2',
                checked: false,
            },
            {
                label: 'Антишпион',
                value: 'Антишпион',
                id: '3',
                checked: false,
            },
            {
                label: 'Матовые',
                value: 'Матовые',
                id: '4',
                checked: false,
            },
            {
                label: 'Комплект 3 в 1',
                value: 'Комплект 3 в 1',
                id: '5',
                checked: false,
            },
        ],
    },
    {
        id: '2',
        title: 'Совместимость',
        searchable: true,
        inputs: [
            {
                label: 'Apple',
                value: 'Обычные',
                id: '1',
                checked: false,
            },
            {
                label: 'Google',
                value: 'Безрамочные',
                id: '2',
                checked: false,
            },
            {
                label: 'Honor',
                value: 'Антишпион',
                id: '3',
                checked: false,
            },
            {
                label: 'Huawei',
                value: 'Матовые',
                id: '4',
                checked: false,
            },
            {
                label: 'OnePlus ',
                value: 'Комплект 3 в 1',
                id: '5',
                checked: false,
            },
            {
                label: 'Xiaomi',
                value: 'Комплект 3 в 1',
                id: '6',
                checked: false,
            },
            {
                label: 'Samsung ',
                value: 'Комплект 3 в 1',
                id: '7',
                checked: false,
            },
        ],
    },
];

interface FilterSliceState {}

const initialState: FilterSliceState = {};

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {},
});

export default filterSlice.reducer;
// export const { changeLanguage } = filterSlice.actions;
