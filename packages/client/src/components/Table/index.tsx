import React from 'react';
import cx from 'classnames';
import styles from './styles.module.scss';

type TableProps = {
  data: any [][]; // (string | number | Element | React.ReactNode)[][];
  head?: any []; // string[] | number[] | React.ReactNode [];
};

export const Table: React.FC<TableProps> = ({
  data,
  head
}) => {
  return(
    <table className={cx(styles.table__container)}>
      {head && <thead>
        <tr className={cx(styles.table__head__row)}>
        {
          head.map((item: any, key) => (
            <th className={cx(styles.table__head__td)} key={`th_${key}`}>
              {item}
            </th>
          ))
        }
        </tr>
      </thead>}
      <tbody>
        {data.map((row, key) => (
          <tr className={cx(styles.table__row)} key={`tr_${key}`}>
            {row.map((item: any, k) => (
              <td className={cx(styles.table__td)} key={`td_${key}_${k}`}>
                {item}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}