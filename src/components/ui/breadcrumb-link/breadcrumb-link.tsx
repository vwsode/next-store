import React, { FC } from 'react';
import Link from 'next/link';

import ChevronIcon from '@/assets/icons/chevron.svg';
import styles from './breadcrumb-link.module.scss';

interface Props {
    text: string;
    textGenerator: () => string;
    href: string;
    last: boolean;
}

const BreadcrumbLink: FC<Props> = ({ text, href, last = false }) => {
    return last ? (
        <a className={`${styles['last-crumb']} ${styles.crumb}`}>
            <span>{text}</span>
        </a>
    ) : (
        <Link href={href} className={`${styles.crumb}`}>
            <span>{text}</span>
            <ChevronIcon />
        </Link>
    );
};

export default BreadcrumbLink;
