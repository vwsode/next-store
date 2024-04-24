import { Button, SearchLink } from '..';

import { getDeclension } from '@/utils/helpers/text';

import styles from './search-menu.module.scss';
import { FC } from 'react';

interface SearchLink {
    path: string;
    title: string;
}

interface Props {
    categories: SearchLink[];
    products: SearchLink[];
    className?: string;
    totalCount: number;
    term: string;
}

const SearchMenu: FC<Props> = ({ categories, products, className = '', totalCount, term }) => {
    const isStateInitial = !term.length && !products.length && !categories.length;
    const isStateNotFound = !products.length && !categories.length && term.length;

    if (isStateInitial) {
        return (
            <div className={`${styles.menu} ${className}`}>
                <p className={styles.message}>Введите название для поиска</p>
            </div>
        );
    }

    if (isStateNotFound) {
        return (
            <div className={`${styles.menu} ${className}`}>
                <p className={styles.message}>По вашему запросу ничего не найдено</p>
            </div>
        );
    }

    return (
        <div className={`${styles.menu} ${className}`}>
            {!!products.length && (
                <div className={styles['list-wrap']}>
                    <ul className={styles.list}>
                        {products.map((item) => (
                            <li key={item.path} className={styles['list-item']}>
                                <SearchLink title={item.title} path={item.path} />
                            </li>
                        ))}
                    </ul>
                </div>
            )}
            {!!categories.length && (
                <div className={styles['list-wrap']}>
                    <h5 className={styles['list-title']}>Категории</h5>
                    <ul className={styles.list}>
                        {categories.map((item) => (
                            <li key={item.path} className={styles['list-item']}>
                                <SearchLink title={item.title} path={item.path} withIcon={true} />
                            </li>
                        ))}
                    </ul>
                </div>
            )}
            <Button className={styles.btn} size="sm" variant="black">
                Показать все {totalCount}{' '}
                {getDeclension(totalCount, ['товар', 'товара', 'товаров'])}
            </Button>
        </div>
    );
};

export default SearchMenu;
