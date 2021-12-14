import React, { FC } from 'react';
import cx from 'classnames';
import styles from './styles.module.scss';

export const Main: FC = ({ children }) => (
  <div className={cx(styles.container)}>
    {children}
  </div>
);
