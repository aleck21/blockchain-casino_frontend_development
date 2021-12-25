import React from 'react';
import cx from 'classnames';
import styles from './styles.module.scss';

export const BetsTab: React.FC = () => {
  return(
    <section className={cx(styles.bets__container)}>
      <b style={{ color: 'white' }}>BETS</b>
    </section>
  );
}