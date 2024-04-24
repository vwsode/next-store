import React, { FC, ChangeEvent } from 'react';

import { TextField } from '@/components/ui';

import PlusIcon from '@/assets/icons/plus.svg';
import MinusIcon from '@/assets/icons/minus.svg';

import styles from './quantity-input.module.scss';

interface Props {
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    onIncrease: () => void;
    onDecrease: () => void;
    value: number;
}

const QuantityInput: FC<Props> = ({ value, onChange, onDecrease, onIncrease }) => {
    return (
        <div className={styles.quantity}>
            <button onClick={onDecrease} className={styles.btn}>
                <MinusIcon />
            </button>
            <TextField
                size="sm"
                value={value ? value : ''}
                onChange={onChange}
                className={styles.input}
                placeholder="Кол-во"
            />
            <button onClick={onIncrease} className={styles.btn}>
                <PlusIcon />
            </button>
        </div>
    );
};

export default QuantityInput;
