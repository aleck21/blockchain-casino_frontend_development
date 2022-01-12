import React from 'react';
import { Text } from '@project/libs/components';
import cx from 'classnames';
import styles from './styles.module.scss';

type ProgressProps = {
  quanity: number;
  ofValue: number;
};

export const ProgressBar: React.FC<ProgressProps> = ({
  quanity,
  ofValue,
}) => {
  const width = (quanity * 100) / ofValue;

  return (
    <div className={cx(styles.progress__container)}>
      <div
        className={cx(styles.progress__level)}
        style={{ width: `${width}%` }}
      />
      <div className={cx(styles.progress__text)}>
        <Text type="p">
          {`${quanity.toLocaleString()
          } / ${ofValue.toLocaleString()}`}
        </Text>
      </div>
    </div>
  );
};
