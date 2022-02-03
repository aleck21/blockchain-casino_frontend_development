import React, { FC } from 'react';
import { ClassicDice, Bets, BreadCrumbs } from 'containers';
import styles from './styles.module.scss';

const ClassicDicePage: FC = () => (
  <div className={styles.dice__page__container}>
    <BreadCrumbs />
    <ClassicDice />
    <Bets />
  </div>
);

export { ClassicDicePage };
