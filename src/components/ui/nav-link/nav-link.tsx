import { FC, ReactNode } from 'react';
import Link from 'next/link';
import cn from 'classnames';

import styles from './nav-link.module.scss';

interface Props {
    active?: boolean;
    children: ReactNode;
    href: string;
}

const NavLink: FC<Props> = ({ href, children, active = false }) => {
    return (
        <Link
            className={cn(styles['nav-link'], {
                [styles.active]: active,
            })}
            href={href}
        >
            {children}
        </Link>
    );
};

export default NavLink;
