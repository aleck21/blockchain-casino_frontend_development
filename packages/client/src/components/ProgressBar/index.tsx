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
}) => (
  <div className={cx(styles.progress__container)}>
    <div
      className={cx(styles.progress__level)}
      style={{ width: `${quanity * 100 / ofValue}%` }}
    />
    <div className={cx(styles.progress__text)}>
      <Text type="p">
        {`${quanity.toLocaleString()
        } / ${ofValue.toLocaleString()}`}
      </Text>
    </div>
  </div>
);
