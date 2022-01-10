import React from 'react';
import cx from 'classnames';
import { Text } from '@project/libs/components';
import styles from './styles.module.scss';

type HeadPageProps = {
  children: React.ReactNode | string;
  className?: string
};

export const HeadPage: React.FC<HeadPageProps> = ({
  children,
  className,
}) => (
  <Text
    type="h2"
    className={cx(styles.headPage__h2, className)}
  >
    {children}
  </Text>
);
