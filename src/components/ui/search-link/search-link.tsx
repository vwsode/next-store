import { FC } from 'react';
import Link from 'next/link';

import ChevronIcon from '@/assets/icons/chevron.svg';
import styles from './search-link.module.scss';

interface Props {
    title: string;
    path: string;
    withIcon?: boolean;
}

const SearchLink: FC<Props> = ({ title, path, withIcon }) => {
    return (
        <Link className={styles.product} href={path}>
            <span className={styles.title}>{title}</span>
            {withIcon && <ChevronIcon className={styles.icon} />}
        </Link>
    );
};

export default SearchLink;
