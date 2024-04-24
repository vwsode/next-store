import React, { FC, useState } from 'react';

import { Select } from '@/components/form';

import styles from './catalog-controls.module.scss';
import { Chip } from '@/components/ui';

const sortSelect = [
    {
        title: 'По умолчанию',
        value: 'default',
    },
    {
        title: 'Сначала дешевле',
        value: 'price_asc',
    },
    {
        title: 'Сначала дороже',
        value: 'price_desc',
    },
    {
        title: 'По алфавиту: А - Я',
        value: 'alp_asc',
    },
    {
        title: 'По алфавиту: Я - А',
        value: 'alp_desc',
    },
];

const CatalogControls: FC = () => {
    const [sortValue, setSortValue] = useState<string>('price_asc');

    const selectedSort = sortSelect.find((item) => item.value === sortValue);

    const sortHandler = (value: string): void => {
        if (value === 'default') {
            setSortValue('');
        } else {
            setSortValue(value);
        }
    };

    return (
        <div className={styles.controls}>
            <div className={styles.filters}>
                <Chip
                    onDelete={() => console.log('del')}
                    label="Тип стёкол: Обычные"
                    color="blue"
                />
                <Chip
                    onDelete={() => console.log('del')}
                    label="Тип стёкол: Антишпион"
                    color="blue"
                />
                <Chip
                    onDelete={() => console.log('del')}
                    label="Совместимость: Apple"
                    color="blue"
                />
                <Chip
                    onDelete={() => console.log('del')}
                    label="Совместимость: Apple"
                    color="blue"
                />
                <Chip
                    onDelete={() => console.log('del')}
                    label="Совместимость: Apple"
                    color="blue"
                />
                <Chip
                    onDelete={() => console.log('del')}
                    label="Совместимость: Apple"
                    color="blue"
                />
                <Chip
                    onDelete={() => console.log('del')}
                    label="Совместимость: Apple"
                    color="blue"
                />
                <Chip onDelete={() => console.log('del')} label="Очистить все" color="gray" />
            </div>

            <Select
                className={styles.sort}
                selected={selectedSort || null}
                placeholder={`${
                    selectedSort && selectedSort.value !== '' ? selectedSort.title : 'Сортировать'
                }`}
                onChange={sortHandler}
                options={sortSelect}
            />
        </div>
    );
};

export default CatalogControls;
