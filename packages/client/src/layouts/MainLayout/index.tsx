import React, { CSSProperties, ReactNode } from 'react';
import cx from 'classnames';
import styles from './styles.module.scss';

type MainLayoutProps = {
  pageLayout?: string;
  children: ReactNode;
  style?: CSSProperties;
};

const MainLayout = ({
  children,
  pageLayout,
  style,
}: MainLayoutProps) => (
  <div
    className={cx(
      styles.container,
      pageLayout,
    )}
    style={style}
  >
    <>
      {children}
    </>
  </div>
);

export { MainLayout };