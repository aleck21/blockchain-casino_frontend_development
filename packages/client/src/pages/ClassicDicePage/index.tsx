import React, { FC } from 'react';
import { ClassicDice, Bets } from 'containers';
import { BreadCrumbs } from 'components';
import styles from './styles.module.scss';

const ClassicDicePage: FC = () => (
  <div className={styles.dice__page__container}>
    <BreadCrumbs />
    <ClassicDice />
    <Bets />
  </div>
);

export { ClassicDicePage };
