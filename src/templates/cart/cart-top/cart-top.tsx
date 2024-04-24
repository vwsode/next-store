import { FC, useState } from 'react';

import { Button } from '@/components/ui';
import { Select } from '@/components/form';

import styles from './cart-top.module.scss';

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

const CartTop: FC = () => {
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
        <div className={styles.top}>
            <div className={styles.left}>
                <h2 className={styles.title}>Корзина</h2>
                {/* <span className={styles.message}>
                    Перейдите в каталог, чтобы найти всё, что нужно.
                </span> */}
                <Button variant="transparent" size="sm" className={styles['btn-remove']}>
                    Удалить неактивные товары
                </Button>
            </div>
            <div className={styles.right}>
                <Select
                    className={styles.sort}
                    selected={selectedSort || null}
                    placeholder={`${
                        selectedSort && selectedSort.value !== ''
                            ? selectedSort.title
                            : 'Сортировать'
                    }`}
                    onChange={sortHandler}
                    options={sortSelect}
                />
            </div>
        </div>
    );
};

export default CartTop;
