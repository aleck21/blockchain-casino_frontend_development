import React from 'react';
import cx from 'classnames';
import styles from './styles.module.scss';
import { Image, Text } from '@project/libs/components';

type FirstTdProps = {
  icon: string;
  text: string;
}

export const FirstTd: React.FC<FirstTdProps> = ({
  icon,
  text
}) => {
  return(
    <div className={cx(styles.first__td__box)}>
      <Image url={icon} />
      <Text type='p'>
        {text}
      </Text>
    </div>
  );
}