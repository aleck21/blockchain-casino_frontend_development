import React, { FC } from 'react';
import { ClassicDice } from 'containers';
import { Bets } from 'containers/classicDice/Bets';
import { BreadCrumbs } from 'containers/classicDice/BreadCrumbs';
import styles from './styles.module.scss';

const ClassicDicePage: FC = () => (
  <div className={styles.dice__page__container}>
    <BreadCrumbs />
    <ClassicDice />
    <Bets />
  </div>
);

export { ClassicDicePage };
