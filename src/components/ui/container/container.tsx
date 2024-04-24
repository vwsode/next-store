import React, { FC, ReactNode } from 'react';

import styles from './container.module.scss';

interface Props {
    children: ReactNode;
}

const Container: FC<Props> = ({ children }) => {
    return <div className={styles.container}>{children}</div>;
};

export default Container;
