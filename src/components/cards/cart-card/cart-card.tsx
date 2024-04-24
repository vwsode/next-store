import React, { ChangeEvent, FC, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { QuantityInput } from '@/components/form';
import { Tag } from '@/components/ui';

import FavoriteIcon from '@/assets/icons/heart.svg';
import TrashIcon from '@/assets/icons/trash.svg';
import styles from './cart-card.module.scss';

interface Props {
    image: string;
    title: string;
    articleNumber: number;
    price: number;
    qty: number;
    priceOld: number;
}

const CartCard: FC<Props> = ({ image, title, articleNumber, price, priceOld, qty }) => {
    const [quantity, setQuantity] = useState<number>(qty);

    const handleQuantityChange = (event: ChangeEvent<HTMLInputElement>) => {
        const value = Number(
            event.target.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1'),
        );

        setQuantity(value);
    };

    const handleQuantityIncrease = () => {
        setQuantity((prev) => prev + 1);
    };
    const handleQuantityDecrease = () => {
        if (quantity > 1) {
            setQuantity((prev) => prev - 1);
        } else {
            console.log('delete');
        }
    };

    return (
        <div className={styles.card}>
            <div className={styles.left}>
                <Link className={styles.imageWrap} href="">
                    <Tag className={styles.tag} variant="new">
                        -15%
                    </Tag>
                    <Image
                        width={90}
                        height={90}
                        className={styles.image}
                        src={image}
                        alt={title}
                    />
                </Link>
                <div className={styles.info}>
                    <Link href="" className={styles.title}>
                        {title}
                    </Link>
                </div>
            </div>
            <div className={styles.prices}>
                <span className={styles['price-old']}>{priceOld} ₽</span>
                <span className={styles.price}>{price} ₽</span>
            </div>
            <div className={styles.right}>
                <div className={styles.quantity}>
                    <QuantityInput
                        value={quantity}
                        onChange={handleQuantityChange}
                        onIncrease={handleQuantityIncrease}
                        onDecrease={handleQuantityDecrease}
                    />
                    <span className={styles['quantity-text']}>Стоимость: {price * quantity} ₽</span>
                </div>
                <div className={styles.controls}>
                    <button className={styles.control}>
                        <FavoriteIcon />
                    </button>
                    <button className={`${styles.control} ${styles['control-delete']}`}>
                        <TrashIcon />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CartCard;
