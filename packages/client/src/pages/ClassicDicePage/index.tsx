import React, { FC } from 'react';
import { ClassicDice } from 'containers';
import { Bets } from 'containers/classicDice/Bets';
import cx from 'classnames';
import styles from './styles.module.scss';

const ClassicDicePage: FC = () => (
  <div className={cx(styles.dice__page__container)}>
    <ClassicDice />
    <Bets />
  </div>
);

export { ClassicDicePage };
