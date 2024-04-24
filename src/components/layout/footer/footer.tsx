'use client';

import Link from 'next/link';

import { Container } from '@/components/ui';
import { ROUTES } from '@/constants/routes.constants';

import s from './footer.module.scss';

const Footer = () => {
    return (
        <footer className={s.footer}>
            <Container>
                <div className={s.wrap}>
                    <div className={s.mainLinks}>
                        <Link className={s.mainLink} href={ROUTES.HOME}>
                            Главная
                        </Link>
                        <Link className={s.mainLink} href={ROUTES.ABOUT}>
                            О нас
                        </Link>
                        <Link className={s.mainLink} href={ROUTES.HOME}>
                            Для селлеров
                        </Link>
                        <Link className={s.mainLink} href={ROUTES.BRANDS}>
                            Бренды
                        </Link>
                        <Link className={s.mainLink} href={ROUTES.HOME}>
                            Новости
                        </Link>
                    </div>
                    <div className={s.catalogLinks}>
                        <Link className={s.mainLink} href={ROUTES.CATALOG}>
                            Каталог
                        </Link>
                        <Link href={ROUTES.HOME} className={s.subLink}>
                            Защитные стёкла
                        </Link>
                        <Link href={ROUTES.HOME} className={s.subLink}>
                            Чехлы
                        </Link>
                        <Link href={ROUTES.HOME} className={s.subLink}>
                            Кабели, наушники, СЗУ
                        </Link>
                    </div>
                    <div className={s.profileLinks}>
                        <Link className={s.mainLink} href={ROUTES.USER}>
                            Личный кабинет
                        </Link>
                        <Link className={s.mainLink} href={ROUTES.CONTACTS}>
                            Контакты
                        </Link>

                        <div className={s.helpLinks}>
                            <Link className={s.mainLink} href={ROUTES.HOME}>
                                Помощь
                            </Link>
                            <Link href={ROUTES.HOME} className={s.subLink}>
                                Оплата
                            </Link>
                            <Link href={ROUTES.HOME} className={s.subLink}>
                                Доставка
                            </Link>
                            <Link href={ROUTES.HOME} className={s.subLink}>
                                Гарантии
                            </Link>
                            <Link href={ROUTES.HOME} className={s.subLink}>
                                Возврат
                            </Link>
                            <Link href={ROUTES.HOME} className={s.subLink}>
                                Частые вопросы
                            </Link>
                        </div>
                    </div>
                    <div className={s.contactLinks}>
                        <Link className={s.mainLink} href="tel:+88005002768">
                            8 800 500 27 68
                        </Link>
                        <Link className={s.mainLink} href="mailto:g-rhino@rhstore.net">
                            g-rhino@rhstore.net
                        </Link>

                        <div className={s.policy}>
                            <span>Публичная оферта</span>
                            <span>Политика обработки данных</span>
                            <span>©2023 Rhstore, Все права защищены</span>
                        </div>
                    </div>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;
