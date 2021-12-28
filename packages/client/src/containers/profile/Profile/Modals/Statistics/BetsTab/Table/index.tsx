import React from 'react';
import cx from 'classnames';
import styles from './styles.module.scss';

type Content = {
  data: any[];
}

export const Table: React.FC<Content> = ({ data }) => {
  return (
    <div className={cx(styles.table__container)}>
      {data.map((row, key) => (
        <div
          className={cx(styles.table__row, key !== 0 && styles.border)}
          key={`row_${key}`}
        >
          <div className={cx(
            styles.left__items, key === 0 ? styles.items__head : styles.items
          )}>
            {row.game}
          </div>
          <div className={cx(
            key === 0 ? styles.items__head : styles.items,
            styles.middle__items
          )}>
            {row.date
              .toLocaleString('en-GB', 
                {
                  year: 'numeric',
                  month: 'numeric',
                  day: 'numeric',
                  hour: 'numeric',
                  minute: 'numeric'
                }
              )
              .replace(',', '')
            }
          </div>
          <div className={cx(
            key === 0 ? styles.items__head : styles.items,
            styles.middle__items
          )}>
            {row.bet}
          </div>
          <div className={cx(
            key !== 0 ? (styles.items, styles.blue_text) : styles.items__head,
            styles.middle__items
          )}>
            {row.currency}
          </div>
          <div className={cx(
            key === 0 ? styles.items__head : styles.items, styles.right__items
          )}>
            {row.profit}
          </div>
        </div>
      ))}
    </div>
  );
}
