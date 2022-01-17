import React from 'react';
import cx from 'classnames';
import { CurrencyColorIcons } from 'constants/currencies';
import { Image } from '@project/libs/components';
import styles from './styles.module.scss';

type Content = {
  data: {
    id: string | number,
    game: string,
    date: Date | string,
    bet: {
      type: string,
      quanity: number | string,
    },
    currency: string,
    profit: {
      type: string,
      quanity: number | string,
    },
  }[];
};

export const Table: React.FC<Content> = ({ data }) => (
  <div className={cx(styles.table__container)}>
    {data.map((row, key) => (
      <div
        className={cx(styles.table__row, key !== 0 && styles.border)}
        key={row.id}
      >
        <div className={cx(
          styles.left__items, key === 0 ? styles.items__head : styles.items,
        )}
        >
          {key === 0 ? 'Game' : row.game}
        </div>
        <div className={cx(
          key === 0 ? styles.items__head : styles.items,
          styles.middle__items,
        )}
        >
          {key === 0 ? 'Date & Time'
            : row.date
              .toLocaleString('en-GB',
                {
                  year: 'numeric',
                  month: 'numeric',
                  day: 'numeric',
                  hour: 'numeric',
                  minute: 'numeric',
                })
              .replace(',', '')}
        </div>
        <div className={cx(
          key === 0 ? styles.items__head : styles.items,
          styles.middle__items,
        )}
        >
          {key === 0
            ? 'Bets'
            : (
              <>
                <Image url={CurrencyColorIcons[row.bet.type]} />
                {` ${row.bet.quanity} ${row.bet.type}`}
              </>
            )}
        </div>
        <div className={cx(
          key !== 0 ? (styles.items, styles.blue_text) : styles.items__head,
          styles.middle__items,
        )}
        >
          {key === 0 ? 'Currency' : row.currency}
        </div>
        <div className={cx(
          key === 0 ? styles.items__head : styles.items, styles.right__items,
        )}
        >
          {key === 0
            ? 'Profit'
            : (
              <>
                <Image url={CurrencyColorIcons[row.profit.type]} />
                {` ${row.profit.quanity} ${row.profit.type}`}
              </>
            )}
        </div>
      </div>
    ))}
  </div>
);
