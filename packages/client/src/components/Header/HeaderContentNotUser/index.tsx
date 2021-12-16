import React, { FC } from 'react';
import cx from 'classnames';
import styles from './styles.module.scss';
import { LogInButtons } from '../LogInButtons';

export const HeaderContentNotUser: FC = () => {
  return (
    <section className={cx(styles.container)}>
      <LogInButtons />
    </section>
  );
}