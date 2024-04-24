import React, { FC, SyntheticEvent, useState } from 'react';

import { Button } from '@/components/ui';
import { FilterGroup } from '@/components/form';

import styles from './catalog-filter.module.scss';

const filtersData = [
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
                value: 'Apple',
                id: '1',
                checked: false,
            },
            {
                label: 'Google',
                value: 'Google',
                id: '2',
                checked: false,
            },
            {
                label: 'Honor',
                value: 'Honor',
                id: '3',
                checked: false,
            },
            {
                label: 'Huawei',
                value: 'Huawei',
                id: '4',
                checked: false,
            },
            {
                label: 'OnePlus ',
                value: 'OnePlus',
                id: '5',
                checked: false,
            },
            {
                label: 'Xiaomi',
                value: 'Xiaomi',
                id: '6',
                checked: false,
            },
            {
                label: 'Samsung ',
                value: 'Samsung',
                id: '7',
                checked: false,
            },
        ],
    },
];

const CatalogFilter: FC = () => {
    const [filters, setFilters] = useState(filtersData);

    const onCheckboxChange = (filterGroupId: string, itemId: string, checked: boolean) => {
        const updatedFilters = filters.map((filter) => {
            if (filter.id === filterGroupId) {
                const updatedInputs = filter.inputs.map((input) => {
                    if (input.id === itemId) {
                        return { ...input, checked: !checked };
                    }
                    return input;
                });
                return { ...filter, inputs: updatedInputs };
            }
            return filter;
        });
        setFilters(updatedFilters);
    };

    const handleSubmit = (evt: SyntheticEvent) => {
        // Handle submit action
        evt.preventDefault();

        alert(JSON.stringify(filters, null, 2));
    };

    const handleReset = () => {};

    return (
        <form className={styles.filter} onSubmit={handleSubmit} onReset={handleReset}>
            {filters.map((filter) => (
                <React.Fragment key={filter.id}>
                    <FilterGroup
                        id={filter.id}
                        items={filter.inputs}
                        isSearchable={filter.searchable}
                        title={filter.title}
                        onCheckboxChange={onCheckboxChange}
                    />
                    <hr className={styles.divider} />
                </React.Fragment>
            ))}

            <div className={styles.bottom}>
                <Button className={styles.btnSubmit} variant="red" size="sm" type="submit">
                    Применить
                </Button>
                <span className={styles.filterCount}>Фильтров выбрано: 5</span>
                <Button className={styles.btnReset} variant="transparent" size="sm" type="reset">
                    Сбросить
                </Button>
            </div>
        </form>
    );
};

export default CatalogFilter;
