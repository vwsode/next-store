import React, { FC, useEffect, useRef, useState } from 'react';

import ChevronIcon from '@/assets/icons/chevron.svg';
import styles from './select.module.scss';

interface Option {
    title: string;
    value: string;
}

interface Props {
    placeholder?: string;
    className?: string;
    onChange: (selected: Option['value']) => void;
    options: Option[];
    selected: Option | null;
}

const Select: FC<Props> = ({ onChange, options, selected, placeholder = '', className = '' }) => {
    const rootRef = useRef<HTMLDivElement>(null);
    const [isOpen, setIsOpen] = useState<boolean>(false);

    useEffect(() => {
        const handleClick = (event: MouseEvent) => {
            const { target } = event;

            if (target instanceof Node && !rootRef.current?.contains(target)) {
                setIsOpen(false);
            }
        };

        window.addEventListener('click', handleClick);
    }, [isOpen]);

    const handleOptionClick = (ev: React.MouseEvent, value: Option['value']) => {
        ev.stopPropagation();

        setIsOpen(false);
        onChange?.(value);
    };

    const handleSelectClick = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <div onClick={handleSelectClick} ref={rootRef} className={`${styles.select} ${className}`}>
            <div className={styles.toggle}>
                <span className={styles['current-value']}>{placeholder}</span>
                <ChevronIcon className={styles.chevron} />
            </div>
            {isOpen && (
                <ul className={styles.items}>
                    {options.map((item) => (
                        <li
                            onClick={(ev) => handleOptionClick(ev, item.value)}
                            key={item.value}
                            className={styles.item}
                        >
                            {item.title}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Select;
