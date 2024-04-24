import React, { FC, ReactNode } from 'react';

import HintIcon from '@/assets/icons/hint.svg';
import styles from './hint.module.scss';

interface Props {
    hint: String;
    icon?: ReactNode;
    className?: String;
}

const Hint: FC<Props> = ({ hint, icon, className = '' }) => {
    return (
        <div className={`${styles.hint} ${className}`}>
            <div className={styles.tooltip}>
                <span>{hint}</span>
            </div>
            {icon ? icon : <HintIcon />}
        </div>
    );
};

export default Hint;
