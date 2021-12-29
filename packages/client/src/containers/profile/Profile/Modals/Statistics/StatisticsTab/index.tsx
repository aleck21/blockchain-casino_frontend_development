import React from 'react';
import cx from 'classnames';
import styles from './styles.module.scss';
import { content, tiles, list } from './contentDemo';
import { ColorFormatNumber } from './ColorFormatNumber';
import { FirstTd } from './FirstTd';
import { Tile } from './Tile';
import { Select } from 'components/Select';

export const StatisticsTab: React.FC = () => {
  return(
    <section className={cx(styles.tab__container)}>
      <div className={cx(styles.tab__leftBlock)}>
        <Select list={list} />
        <div className={cx(styles.tab__tiles__box)}>
          <Tile content={tiles.wins} />
          <Tile content={tiles.bets} />
          <Tile content={tiles.won} />
          <Tile content={tiles.wagered} />
        </div>
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
            <React.Fragment key={`row__${key}`}>
              <div
                className={cx(styles.tab__table__item)}
              >
                {<FirstTd icon={row.icon} text={row.currency} />}
              </div>
              <div
                className={cx(styles.tab__table__item)}
              >
                {row.win}
              </div>
              <div
                className={cx(styles.tab__table__item)}
              >
                {row.bet}
              </div>
              <div
                className={cx(styles.tab__table__item)}
              >
                {row.won}
              </div>
              <div
                className={cx(styles.tab__table__item, styles.last__item)}
              >
                {<ColorFormatNumber floatNumber={row.wagered} />} 
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}