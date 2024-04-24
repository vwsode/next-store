import React, { FC, InputHTMLAttributes } from 'react';

import CheckIcon from '@/assets/icons/check.svg';
import styles from './checkbox.module.scss';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    label?: String;
}

const Checkbox: FC<Props> = ({ label, ...props }) => {
    return (
        <label className={styles.label}>
            <input className={styles.input} type="checkbox" {...props} />
            <span className={styles.checkbox}>
                <CheckIcon />
            </span>
            {label && <span className={styles.text}>{label}</span>}
        </label>
    );
};

export default Checkbox;
