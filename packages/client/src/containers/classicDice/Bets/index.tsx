import React, { memo } from 'react';
import cx from 'classnames';
import { AllBets } from './AllBets';
import { allBets, myBets } from '../ClassicDice/contentDemo';
import styles from './styles.module.scss';
import { MyBets } from './MyBets';

const Bets = memo(() => (
  <div className={cx(styles.bets__contaiiner)}>
    <AllBets bets={allBets} />
    <MyBets bets={myBets} />
  </div>
));

export { Bets };
