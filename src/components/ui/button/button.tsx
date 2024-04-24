import React, { ButtonHTMLAttributes, FC, ReactNode } from 'react';
import cn from 'classnames';

import styles from './button.module.scss';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    children?: ReactNode;
    variant: 'red' | 'black' | 'gray' | 'blue' | 'transparent';
    size: 'sm' | 'md';
    asLink?: ReactNode;
    iconCenter?: boolean;
}

const Button: FC<Props> = ({
    children,
    variant,
    size,
    className,
    iconCenter = false,
    ...props
}) => {
    return (
        <button
            className={cn(
                `${styles.btn} ${styles[`btn-${variant}`]} ${
                    styles[`btn-${size}`]
                } ${className}`,
                {
                    [styles.iconCenter]: iconCenter,
                },
            )}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
