import { ProductCard } from '@/components/cards';
import { FC } from 'react';

import styles from './catalog-list.module.scss';

const CatalogList: FC = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.headline}>
                <h5 className={styles.headlineTitle}>Наименование</h5>

                <span className={styles.headlineQty}>Кол-во</span>
            </div>
            <div className={styles.list}>
                <ProductCard
                    qty={4}
                    image={'http://rhstore2.artem.et9.ru:10580/assets/img/catalog/item1.png'}
                    title={
                        'Стекло G-Rhino 6D l Samsung A51 / M31s Стекло G-Rhino 6D l Samsung A51 / M31s'
                    }
                    articleNumber={6666666}
                    price={19599}
                    priceOld={19599}
                />
                <hr className={styles.divider} />
                <ProductCard
                    qty={4}
                    image={'http://rhstore2.artem.et9.ru:10580/assets/img/catalog/item1.png'}
                    title={
                        'Стекло G-Rhino 6D l Samsung A51 / M31s Стекло G-Rhino 6D l Samsung A51 / M31s'
                    }
                    articleNumber={6666666}
                    price={19599}
                    priceOld={19599}
                />
                <hr className={styles.divider} />
                <ProductCard
                    qty={4}
                    image={'http://rhstore2.artem.et9.ru:10580/assets/img/catalog/item1.png'}
                    title={
                        'Стекло G-Rhino 6D l Samsung A51 / M31s Стекло G-Rhino 6D l Samsung A51 / M31s'
                    }
                    articleNumber={6666666}
                    price={19599}
                    priceOld={19599}
                />
                <hr className={styles.divider} />
                <ProductCard
                    qty={4}
                    image={'http://rhstore2.artem.et9.ru:10580/assets/img/catalog/item1.png'}
                    title={
                        'Стекло G-Rhino 6D l Samsung A51 / M31s Стекло G-Rhino 6D l Samsung A51 / M31s'
                    }
                    articleNumber={6666666}
                    price={19599}
                    priceOld={19599}
                />
                <hr className={styles.divider} />
            </div>
        </div>
    );
};

export default CatalogList;
