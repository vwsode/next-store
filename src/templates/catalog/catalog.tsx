'use client';
import React, { FC } from 'react';

import { Breadcrumbs } from '@/components/layout';
import { Container } from '@/components/ui';

import { useBreadcrumbs } from '@/hooks/use-breadcrumbs';

import CatalogControls from './catalog-controls/catalog-controls';
import CatalogFilter from './catalog-filter/catalog-filter';
import CatalogList from './catalog-list/catalog-list';

import styles from './catalog.module.scss';

const Catalog: FC = () => {
    const { getDefaultTextGenerator, getTextGenerator } = useBreadcrumbs('Каталог');

    return (
        <>
            <Breadcrumbs
                getDefaultTextGenerator={getDefaultTextGenerator}
                getTextGenerator={getTextGenerator}
            />
            <Container>
                <section className={styles.section}>
                    <h1 className={styles.title}>Защитные стёкла для смартфонов «G-Rhino»</h1>
                    <div className={styles.catalog}>
                        <CatalogFilter />
                        <div className={styles.content}>
                            <CatalogControls />
                            <CatalogList />
                        </div>
                    </div>
                </section>
            </Container>
        </>
    );
};

export default Catalog;
