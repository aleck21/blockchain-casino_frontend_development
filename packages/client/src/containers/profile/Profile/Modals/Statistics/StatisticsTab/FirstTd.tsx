import React from 'react';
import cx from 'classnames';
import { Image, Text } from '@project/libs/components';
import styles from './styles.module.scss';

type FirstTdProps = {
  icon: string;
  text: string;
};

export const FirstTd: React.FC<FirstTdProps> = ({
  icon,
  text,
}) => (
  <div className={cx(styles.first__td__box)}>
    <Image url={icon} />
    <Text type="p">
      {text}
    </Text>
  </div>
);
