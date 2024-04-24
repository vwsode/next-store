import { FC, HTMLAttributes, ReactNode } from 'react';

import styles from './tag.module.scss';

interface Props extends HTMLAttributes<HTMLDivElement> {
    children?: ReactNode;
    variant: 'sale' | 'hit' | 'new';
}

const Tag: FC<Props> = ({ variant, children, className, ...props }) => {
    return (
        <div className={`${styles.tag} ${styles[`tag-${variant}`]} ${className}`} {...props}>
            {children}
        </div>
    );
};

export default Tag;
