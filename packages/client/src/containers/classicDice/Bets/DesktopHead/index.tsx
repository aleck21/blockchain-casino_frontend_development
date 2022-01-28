import React, { memo, ReactNode } from 'react';
import { Text } from '@project/libs/components';
import styles from './styles.module.scss';

type DesktopHeadProps = {
  title: string;
  children?: ReactNode;
};

const DesktopHead = memo(({
  title,
  children,
}: DesktopHeadProps) => {
  if (children !== undefined) {
    return (
      <header className={styles.betsHeader__container}>
        <h2>{title}</h2>
        {children}
      </header>
    );
  }

  return (
    <Text
      type="h2"
      className={styles.betsHeader}
    >
      {title}
    </Text>
  );
});

export { DesktopHead };
