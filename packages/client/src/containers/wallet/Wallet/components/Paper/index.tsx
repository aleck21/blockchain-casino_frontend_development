import React from 'react';
import cx from 'classnames';
import styles from './styles.module.scss';

type Props = {
  children: React.ReactNode | string;
  className?: string;
}

export const Paper: React.FC<Props> = ({children, className}) => {
  return(
    <section className={cx(styles.paper__container, className)}>
      {children}
    </section>
  );
}