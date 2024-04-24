import React, { FC } from 'react';
import cn from 'classnames';

import CloseIcon from '@/assets/icons/close-mini.svg';

import styles from './chip.module.scss';

interface Props {
    label: string;
    onDelete?: () => void;
    color: 'blue' | 'gray';
}

const Chip: FC<Props> = ({ label, onDelete, color }) => {
    return (
        <div
            className={cn(`${styles.chip} ${styles[`chip-${color}`]}`, {
                [styles.deletable]: !!onDelete,
            })}
        >
            <span>{label}</span>
            {!!onDelete && (
                <CloseIcon className={styles.icon} viewBox="0 0 24 24" onClick={onDelete} />
            )}
        </div>
    );
};

export default Chip;
