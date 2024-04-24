'use-client';
import { FC } from 'react';

import CloseIcon from '@/assets/icons/close.svg';
import styles from './search-input.module.scss';

interface Props {
    value: string;
    onChange: (value: string) => void;
    onReset: () => void;
    onFocus?: () => void;
}

const SearchInput: FC<Props> = ({ value, onChange, onReset, onFocus }) => {
    return (
        <form onReset={onReset} className={styles.wrap}>
            <input
                onFocus={onFocus}
                onChange={(event) => onChange(event.target.value)}
                placeholder="Поиск по сайту"
                className={styles.input}
                type="search"
            />
            {value && (
                <button type="reset" className={styles['btn-reset']}>
                    <CloseIcon className={styles.icon} />
                </button>
            )}
        </form>
    );
};

export default SearchInput;
