import React, { FC } from 'react';
import { Text } from '@project/libs/components';
import cx from 'classnames';
import styles from './styles.module.scss';

const HomeDemo: FC = () => (
  <div className={styles.container}>
    <Text
      type="p"
      className={cx(styles.text)}
    >
      Home page
    </Text>
  </div>
);

export { HomeDemo };
