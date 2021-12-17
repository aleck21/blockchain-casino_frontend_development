import React, { FC } from 'react';
import { Text } from '@project/libs/components';
import styles from './styles.module.scss';
import cx from 'classnames';

const HomeDemo: FC = () => (
  <div className={styles.container}>
    <Text type='p' className={cx(styles.text)}>
      Home page
    </Text>
  </div>
);

export { HomeDemo };
