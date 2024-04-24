/* eslint-disable max-len */
'use client';
import { FC, useMemo } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

import { Container, BreadcrumbLink } from '@/components/ui';

const generatePathParts = (pathStr: string) => {
    const pathWithoutQuery = pathStr.split('?')[0];
    return pathWithoutQuery.split('/').filter((v) => v.length > 0);
};

interface Props {
    getTextGenerator: (arg0: string, query: string[]) => void;
    getDefaultTextGenerator: (arg0: string, href: string) => string;
}

import styles from './breadcrumbs.module.scss';

const Breadcrumbs: FC<Props> = ({ getTextGenerator, getDefaultTextGenerator }) => {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const breadcrumbs = useMemo(
        function generateBreadcrumbs() {
            const asPathNestedRoutes = generatePathParts(pathname);
            const pathnameNestedRoutes = generatePathParts(pathname);

            const crumbList = asPathNestedRoutes.map((subpath, idx) => {
                const param = pathnameNestedRoutes[idx].replace('[', '').replace(']', '');

                const href = '/' + asPathNestedRoutes.slice(0, idx + 1).join('/');

                return {
                    href,
                    textGenerator: getTextGenerator(param, searchParams.getAll('')),
                    text: getDefaultTextGenerator(subpath, href),
                };
            });

            return [...crumbList];
        },
        [pathname, getTextGenerator, searchParams, getDefaultTextGenerator],
    );

    return (
        <Container>
            <ul className={styles.breadcrumbs}>
                <li className={styles.item}>
                    {/**eslint-disable-next-line @typescript-eslint/ban-ts-comment
                     * @ts-ignore */}
                    <BreadcrumbLink text="Главная" href="/" />
                </li>
                {breadcrumbs.map((crumb, idx) =>
                    crumb.text ? (
                        <li key={idx} className={styles.item}>
                            {/**eslint-disable-next-line @typescript-eslint/ban-ts-comment
                             * @ts-ignore */}
                            <BreadcrumbLink
                                {...crumb}
                                key={idx}
                                last={idx === breadcrumbs.length - 1}
                            />
                        </li>
                    ) : (
                        ''
                    ),
                )}
            </ul>
        </Container>
    );
};

export default Breadcrumbs;
