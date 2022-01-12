import React from 'react';
import cx from 'classnames';
import styles from './styles.module.scss';

type Props = {
  floatNumber: string | number;
};

export const ColorFormatNumber: React.FC<Props> = ({
  floatNumber,
}) => {
  const [whole, fraction] = floatNumber.toString().split('.');

  return (
    <>
      <span className={cx(styles.whole__text)}>{whole}</span>
      <span className={cx(styles.fraction__text)}>
        .
        {fraction}
      </span>
    </>
  );
};
