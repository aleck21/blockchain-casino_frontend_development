import React from 'react';
import cx from 'classnames';
import { SelectWithContent } from '@project/libs/components';
import { CurrencyColorIcons } from 'constants/currencies';
import styles from './styles.module.scss';
import { content, tiles, list } from './contentDemo';
import { ColorFormatNumber } from './ColorFormatNumber';
import { FirstTd } from './FirstTd';
import { Tile } from './Tile';

export const StatisticsTab: React.FC = () => (
  <section className={cx(styles.tab__container)}>
    <div className={cx(styles.tab__leftBlock)}>
      <SelectWithContent list={list} />
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
              key === 4 ? styles.last__item : null)}
          >
            {item}
          </div>
        ))}
        {content.body.map((row) => (
          <React.Fragment key={row.id}>
            <div
              className={cx(styles.tab__table__item)}
            >
              <FirstTd
                icon={CurrencyColorIcons[row.currency]}
                text={row.currency}
              />
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
              <ColorFormatNumber floatNumber={row.wagered} />
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  </section>
);
