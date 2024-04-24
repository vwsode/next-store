import React, { ChangeEvent, FC, ReactNode, useCallback, useMemo, useRef, useState } from 'react';

import { Checkbox, TextField } from '@/components/ui';

import styles from './filter-group.module.scss';

interface FilterGroupOption {
    label: string;
    id: string;
    checked: boolean;
}

interface Props {
    isSearchable?: boolean;
    title: string;
    items: FilterGroupOption[];
    searchValue?: string;
    onCheckboxChange: (filterGroupId: string, id: string, checked: boolean) => void;
    id: string;
}

const FilterGroup: FC<Props> = ({
    title,
    items,
    onCheckboxChange,
    isSearchable = false,
    searchValue = '',
    id,
}) => {
    const [search, setSearch] = useState<string>(searchValue);
    const [isOpened, setIsOpened] = useState<boolean>(false);

    const listRef = useRef<HTMLUListElement>(null);

    const filteredItems = useMemo(() => {
        return items.filter((item) => item.label.toLowerCase().includes(search.toLowerCase()));
    }, [items, search]);

    const searchHandler = useCallback((evt: ChangeEvent<HTMLInputElement>) => {
        setSearch(evt.target.value);
    }, []);

    const toggleListHandler = useCallback(() => {
        if (!listRef.current) return;

        if (!isOpened) {
            listRef.current.style.maxHeight = `${listRef.current.scrollHeight}px`;
        } else {
            listRef.current.style.maxHeight = '';
        }
        setIsOpened(!isOpened);
    }, [isOpened]);

    return (
        <div className={styles.group}>
            <span className={styles.title}>{title}</span>
            {isSearchable && (
                <TextField
                    className={styles.input}
                    size="sm"
                    placeholder="Поиск"
                    onChange={searchHandler}
                    value={search}
                />
            )}

            <ul ref={listRef} className={styles.list}>
                {filteredItems.map((item) => (
                    <li key={item.id} className={styles.item}>
                        <Checkbox
                            checked={item.checked}
                            onChange={() => onCheckboxChange(id, item.id, item.checked)}
                            label={item.label}
                        />
                    </li>
                ))}
            </ul>

            {filteredItems.length > 5 && (
                <button type="button" onClick={toggleListHandler} className={styles.btnToggle}>
                    {isOpened ? 'Скрыть' : 'Показать все'}
                </button>
            )}
        </div>
    );
};

export default FilterGroup;
