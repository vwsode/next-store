import React, { FC, InputHTMLAttributes } from 'react';

import styles from './text-field.module.scss';

type Props = Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> & {
    size: 'sm' | 'md';
};

const TextField: FC<Props> = ({ size, className = '', ...props }) => {
    return (
        <input
            className={`${styles['text-field']} ${styles[`text-field-${size}`]} ${className}`}
            {...props}
        />
    );
};

export default TextField;
