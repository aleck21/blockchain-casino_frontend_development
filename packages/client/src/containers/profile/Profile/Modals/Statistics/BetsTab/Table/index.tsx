import React from 'react';
import cx from 'classnames';
import styles from './styles.module.scss';

type Content = {
  data: {
    id: string | number,
    game: string,
    date: Date | string,
    bet: string | JSX.Element,
    currency: string,
    profit: string | JSX.Element,
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
          {row.game}
        </div>
        <div className={cx(
          key === 0 ? styles.items__head : styles.items,
          styles.middle__items,
        )}
        >
          {row.date
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
          {row.bet}
        </div>
        <div className={cx(
          key !== 0 ? (styles.items, styles.blue_text) : styles.items__head,
          styles.middle__items,
        )}
        >
          {row.currency}
        </div>
        <div className={cx(
          key === 0 ? styles.items__head : styles.items, styles.right__items,
        )}
        >
          {row.profit}
        </div>
      </div>
    ))}
  </div>
);
