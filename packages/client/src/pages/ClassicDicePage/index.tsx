import React, { FC } from 'react';
import { ClassicDice } from 'containers';
import cx from 'classnames';
import styles from './styles.module.scss';

const ClassicDicePage: FC = () => (
  <div className={cx(styles.dice__page__container)}>
    <ClassicDice />
  </div>
);

export { ClassicDicePage };
