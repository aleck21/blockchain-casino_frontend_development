import React from 'react';
import cx from 'classnames';
import styles from './styles.module.scss';

type TableProps = {
  data: {
    id: number | string;
    game: string;
    bets: number | string;
    wins: number | string;
    wagered: number | string;
    wageredCurrency: string;
    won: number | string;
    wonCurrency: string;
  }[];
};

export const Table: React.FC<TableProps> = ({
  data,
}) => (
  <table className={cx(styles.table__container)}>
    <thead>
      <tr className={cx(styles.table__head__row)}>
        <th
          className={cx(styles.table__head__td)}
        >
          Game
        </th>
        <th
          className={cx(styles.table__head__td)}
        >
          Bets
        </th>
        <th
          className={cx(styles.table__head__td)}
        >
          Wins
        </th>
        <th
          className={cx(styles.table__head__td)}
        >
          Wagered
        </th>
        <th
          className={cx(styles.table__head__td)}
        >
          Won
        </th>
      </tr>
    </thead>
    <tbody>
      {data.map((row) => (
        <tr
          className={cx(styles.table__row)}
          key={row.id}
        >
          <td
            className={cx(styles.table__td)}
          >
            <span className={cx(styles.f18)}>{row.game}</span>
          </td>
          <td
            className={cx(styles.table__td)}
          >
            {row.bets}
          </td>
          <td
            className={cx(styles.table__td)}
          >
            {row.wins}
          </td>
          <td
            className={cx(styles.table__td)}
          >
            {row.wagered}
            <span className={cx(styles.f__gray)}>
              &ensp;
              {row.wageredCurrency}
            </span>
          </td>
          <td
            className={cx(styles.table__td)}
          >
            {row.won}
            &ensp;
            {row.wonCurrency}
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);
