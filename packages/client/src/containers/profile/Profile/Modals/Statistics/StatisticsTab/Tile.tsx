import React from 'react';
import cx from 'classnames';
import styles from './styles.module.scss';

type TileProps = {
  content: {
    title: string;
    count: number | string;
    currency?: string;
  }
}

export const Tile: React.FC<TileProps> = ({content}) => {
  const { title, count, currency } = content;

  return(
    <div className={cx(styles.tab__tile)}>
      <h6>
        {title}
      </h6>
      <p>
        {count.toLocaleString('ru-RU')}
        {currency && <span>&nbsp;{currency}</span>}
      </p>
    </div>
  );
}