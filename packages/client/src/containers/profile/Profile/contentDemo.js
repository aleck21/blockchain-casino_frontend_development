import cx from 'classnames';
import styles from './styles.module.scss';

export const dataTable = {
  head: [
    'Game', 'Bets', 'Wins', 'Wagered', 'Won'
  ],
  data: [
    [
      <span className={cx(styles.f18)}>Crash</span>,
      '1000',
      '890',
      <>2095 <span className={cx(styles.f__gray)}>USD</span></>,
      <>1395 <span className={cx(styles.f__gray)}>USD</span></>
    ],
    [
      <span className={cx(styles.f18)}>Classic Dice</span>,
      '1000',
      '900',
      <>1995 <span className={cx(styles.f__gray)}>USD</span></>,
      <>1395 <span className={cx(styles.f__gray)}>USD</span></>
    ],
  ]
}