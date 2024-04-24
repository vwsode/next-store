'use client';
import React, { FC } from 'react';

import { Breadcrumbs } from '@/components/layout';
import { Container } from '@/components/ui';

import CartTop from './cart-top/cart-top';
import CartSummary from './cart-summary/cart-summary';
import CartList from './cart-list/cart-list';

import { useBreadcrumbs } from '@/hooks/use-breadcrumbs';

import styles from './cart.module.scss';

const Cart: FC = () => {
    const { getDefaultTextGenerator, getTextGenerator } = useBreadcrumbs('Корзина');

    return (
        <>
            <Breadcrumbs
                getDefaultTextGenerator={getDefaultTextGenerator}
                getTextGenerator={getTextGenerator}
            />
            <section className={styles.section}>
                <Container>
                    <CartTop />
                    <div className={styles.content}>
                        <CartList />
                        <CartSummary />
                    </div>
                </Container>
            </section>
        </>
    );
};

export default Cart;
