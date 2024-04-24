import { FC } from 'react';
import { CartCard } from '@/components/cards';

import styles from './cart-list.module.scss';

const CartList: FC = () => {
    return (
        <div className={styles.list}>
            <CartCard
                qty={4}
                image={'http://rhstore2.artem.et9.ru:10580/assets/img/catalog/item1.png'}
                title={
                    'Стекло G-Rhino 6D l Samsung A51 / M31s Стекло G-Rhino 6D l Samsung A51 / M31s'
                }
                articleNumber={6666666}
                price={999999}
                priceOld={999999}
            />
            <hr className={styles.divider} />
            <CartCard
                qty={4}
                image={'http://rhstore2.artem.et9.ru:10580/assets/img/catalog/item1.png'}
                title={
                    'Стекло G-Rhino 6D l Samsung A51 / M31s Стекло G-Rhino 6D l Samsung A51 / M31s'
                }
                articleNumber={6666666}
                price={999999}
                priceOld={999999}
            />
            <hr className={styles.divider} />
            <CartCard
                qty={4}
                image={'http://rhstore2.artem.et9.ru:10580/assets/img/catalog/item1.png'}
                title={
                    'Стекло G-Rhino 6D l Samsung A51 / M31s Стекло G-Rhino 6D l Samsung A51 / M31s'
                }
                articleNumber={6666666}
                price={999999}
                priceOld={999999}
            />
            <hr className={styles.divider} />
            <CartCard
                qty={4}
                image={'http://rhstore2.artem.et9.ru:10580/assets/img/catalog/item1.png'}
                title={
                    'Стекло G-Rhino 6D l Samsung A51 / M31s Стекло G-Rhino 6D l Samsung A51 / M31s'
                }
                articleNumber={6666666}
                price={999999}
                priceOld={999999}
            />
            <hr className={styles.divider} />
        </div>
    );
};

export default CartList;
