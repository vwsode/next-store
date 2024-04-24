import React, { FC } from 'react';

import { Button } from '@/components/ui';

import styles from './cart-summary.module.scss';

const CartSummary: FC = () => {
    return (
        <div className={styles.block}>
            <div className={styles.content}>
                <div className={styles.top}>
                    <span className={styles.title}>Ваш заказ</span>
                    <span className={styles.description}>112 товаров</span>
                </div>
                <div className={styles.infos}>
                    <div className={styles.info}>
                        <span className={styles['info-title']}>Товары:</span>
                        <span className={styles['info-value']}>24 640 ₽</span>
                    </div>
                    <div className={styles.info}>
                        <span className={styles['info-title']}>Скидка:</span>
                        <span className={styles['info-value']}>1400 ₽</span>
                    </div>
                    <div className={styles.info}>
                        <span className={styles['info-title']}>Итого:</span>
                        <span className={styles['info-res']}>23 240 ₽</span>
                    </div>
                </div>
                <div className={styles.message}>
                    <div className={styles['message-param']}>
                        <span className={styles['message-param-title']}>
                            Минимальная <br /> сумма заказа:
                        </span>
                        <span className={styles['message-param-value']}>5 000 ₽</span>
                    </div>
                    <hr className={styles['divider']} />
                    <div className={styles['message-param']}>
                        <span
                            className={`${styles['message-param-title']} ${styles['message-param-title-bold']}`}
                        >
                            Закажите ещё на:
                        </span>
                        <span
                            className={`${styles['message-param-value']} ${styles['message-param-value-red']}`}
                        >
                            1 000 ₽
                        </span>
                    </div>
                </div>
                <hr className={styles.divider} />
            </div>
            <div className={styles.btns}>
                <Button className={styles['btn-order']} variant="red" size="md">
                    Перейти к оформлению
                </Button>
                <Button className={styles['btn-order']} variant="transparent" size="sm">
                    К покупкам
                </Button>
            </div>
        </div>
    );
};

export default CartSummary;
