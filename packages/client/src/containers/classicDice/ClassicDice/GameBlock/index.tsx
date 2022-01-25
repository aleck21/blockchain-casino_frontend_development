import React, { memo } from 'react';
import cx from 'classnames';
import { win } from 'containers/classicDice/contentDemo';
import { Image } from '@project/libs/components';
import { DiceDemo } from '@project/libs/assets/images';
import { LastBankroll } from '../LastBankrolls';
import styles from './styles.module.scss';

const GameBlock = memo(() => (
  <div className={cx(styles.gameBlock__container)}>
    <LastBankroll />
    <div className={cx(styles.gameCanvas__box)}>
      <div className={cx(styles.gameCanvas__win)}>
        {win}
      </div>
      <div className={cx(styles.gameCanvas__dice)}>
        <Image url={DiceDemo} />
      </div>
    </div>
  </div>
));

export { GameBlock };
