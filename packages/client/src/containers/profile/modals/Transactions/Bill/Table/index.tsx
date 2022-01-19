import React from 'react';
import cx from 'classnames';
import styles from './styles.module.scss';

type TableProps = {
  datas: any[];
};

export const Table: React.FC<TableProps> = ({
  datas,
}) => (
  <div className={cx(styles.table__container)}>
    {datas.map((row, key) => (
      <div
        className={cx(
          styles.table__row, key === 0 ? styles.table__row__head : null,
        )}
        key={row.id}
      >
        <div
          className={cx(styles.left,
            key === 0 ? styles.table__item__head : styles.table__item)}
        >
          {row.type}
        </div>
        <div
          className={cx(styles.left,
            key === 0 ? styles.table__item__head : styles.table__item)}
        >
          <span className={cx(styles.lite)}>
            {row.time.toLocaleString('en-GB').replace(',', '')}
          </span>
        </div>
        <div
          className={cx(styles.center,
            key === 0 ? styles.table__item__head : styles.table__item)}
        >
          {key === 0
            ? row.amount
            : (
              <span
                className={row.amount[0] === '+' ? styles.green : styles.red}
              >
                {row.amount}
              </span>
            )}
        </div>
        <div
          className={cx(styles.right,
            key === 0 ? styles.table__item__head : styles.table__item)}
        >
          {row.balance}
        </div>
      </div>
    ))}
  </div>
);
