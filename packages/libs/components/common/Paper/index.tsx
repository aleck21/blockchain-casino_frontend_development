import React from 'react';
import cx from 'classnames';
import styles from './styles.module.scss';

type PaperProps = {
  children: React.ReactNode | string;
  className?: string;
  style?: React.CSSProperties;
};

export const Paper = ({ children, className, style }: PaperProps) => (
  <section
    className={cx(styles.paper__container, className)}
    style={style}
  >
    {children}
  </section>
);
