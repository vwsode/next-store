'use client';
import { useEffect, useState } from 'react';
import cn from 'classnames';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Button, Container, NavLink, SearchMenu } from '@/components/ui';
import { SearchInput } from '@/components/form';

import { ROUTES } from '@/constants/routes.constants';
import { useSearch } from '@/hooks/use-search';

import RhLogo from '@/assets/icons/logo.svg';
import CartIcon from '@/assets/icons/cart.svg';
import UserIcon from '@/assets/icons/user.svg';
import HeartIcon from '@/assets/icons/heart.svg';
import ListIcon from '@/assets/icons/list.svg';
import SearchIcon from '@/assets/icons/search.svg';

import s from './header.module.scss';

const navigation = [
    {
        title: 'О нас',
        path: '/about',
    },
    {
        title: 'Для селлеров',
        path: '/seller',
    },
    {
        title: 'Бренды',
        path: '/brands',
    },
    {
        title: 'Новости',
        path: '/news',
    },
    {
        title: 'Помощь',
        path: '/help',
    },
    {
        title: 'Контакты',
        path: '/contacts',
    },
];

const Header = () => {
    const pathname = usePathname();
    const [searchFocus, setSearchFocus] = useState<boolean>(false);
    const [scrollPosition, setScrollPosition] = useState<number>(0);
    const { result, searchTerm, updateSearchTerm } = useSearch();

    const onSearchChange = (value: string): void => {
        updateSearchTerm(value);
    };
    const onSearchReset = (): void => {
        updateSearchTerm('');
    };

    const handleScroll = (): void => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <div
                onClick={() => setSearchFocus(false)}
                className={cn(s.headerOverlay, {
                    [s.active]: searchFocus,
                })}
            ></div>
            <header className={s.header}>
                <div
                    className={cn(s.headerMiddle, {
                        [s.fixed]: scrollPosition > 200,
                        [s.hidden]: scrollPosition > 90 && scrollPosition < 200,
                    })}
                >
                    <Container>
                        <div className={s.headerMiddleWrap}>
                            <Link className={s.linkLogo} href="/">
                                <RhLogo className={s.logo} />
                            </Link>
                            <div className={s.headerSearchWrap}>
                                <div className={s.search}>
                                    <SearchInput
                                        onFocus={() => setSearchFocus(true)}
                                        onChange={onSearchChange}
                                        onReset={onSearchReset}
                                        value={searchTerm}
                                    />
                                    <Button variant="red" size="md" iconCenter>
                                        <SearchIcon />
                                    </Button>

                                    {searchFocus && (
                                        <SearchMenu
                                            term={searchTerm}
                                            totalCount={result.totalCount}
                                            className={s.searchMenu}
                                            products={result.products}
                                            categories={result.categories}
                                        />
                                    )}
                                </div>
                            </div>
                            <div className={s.headerControls}>
                                <NavLink href={ROUTES.USER}>
                                    <UserIcon />
                                </NavLink>
                                <NavLink href="">
                                    <HeartIcon />
                                </NavLink>
                                <NavLink href={ROUTES.CART}>
                                    40 900 ₽
                                    <CartIcon />
                                </NavLink>
                            </div>
                        </div>
                    </Container>
                </div>

                <div className={s.headerBottom}>
                    <Container>
                        <div className={s.headerBottomWrap}>
                            <Button variant="red" size="sm">
                                <ListIcon />
                                Каталог
                            </Button>
                            <nav className={s.headerNav}>
                                {navigation.map((item) => (
                                    <Link
                                        className={cn(s.headerNavLink, {
                                            [s.headerNavLinkActive]: pathname === item.path,
                                        })}
                                        key={item.path}
                                        href={item.path}
                                    >
                                        {item.title}
                                    </Link>
                                ))}
                            </nav>
                            <div className={s.headerContacts}>
                                <Link className={s.linkPhone} href="tel:+88005002768">
                                    8 800 500 27 68
                                </Link>
                            </div>
                        </div>
                    </Container>
                </div>
            </header>
        </>
    );
};

export default Header;
