import React from 'react';
import cx from 'classnames';
import styles from './styles.module.scss';
import { content, tiles } from './contentDemo';
import { ColorFormatNumber } from './ColorFormatNumber';
import { FirstTd } from './FirstTd';
import { Tile } from './Tile';

export const StatisticsTab: React.FC = () => {
  return(
    <section className={cx(styles.tab__container)}>
      <div className={cx(styles.tab__leftBlock)}>
        <Tile content={tiles.wins} />
        <Tile content={tiles.bets} />
        <Tile content={tiles.won} />
        <Tile content={tiles.wagered} />
      </div>
      <div className={cx(styles.tab__rightBlock)}>
        <div className={cx(styles.tab__table)}>
          {content.head.map((item, key) => (
            <div
              className={cx(styles.table__head__item,
                key === 4 ? styles.last__item : null
              )}
              key={`th_${key}`}
            >
              {item}
            </div>
          ))}
          {content.body.map((row, key) => (
            <>
              <div
                className={cx(styles.tab__table__item)}
                key={`currency_${key}`}
              >
                {<FirstTd icon={row.icon} text={row.currency} />}
              </div>
              <div
                className={cx(styles.tab__table__item)}
                key={`win_${key}`}
              >
                {row.win}
              </div>
              <div
                className={cx(styles.tab__table__item)}
                key={`bet_${key}`}
              >
                {row.bet}
              </div>
              <div
                className={cx(styles.tab__table__item)}
                key={`won_${key}`}
              >
                {row.won}
              </div>
              <div
                className={cx(styles.tab__table__item, styles.last__item)}
                key={`wegered_${key}`}
              >
                {<ColorFormatNumber floatNumber={row.wagered} />} 
              </div>
            </>
          ))}
        </div>
      </div>
    </section>
  );
}