import React, { ReactNode } from 'react';
import cx from 'classnames';
import { Text } from '@project/libs/components';
import styles from './styles.module.scss';

type TableProps = {
  children: ReactNode | string;
  title?: string | React.ReactNode;
  className?: string;
};

export const TableGrid: React.FC<TableProps> = ({
  title,
  children,
  className,
}) => (
  <div className={cx(styles.tableGrid__container, className)}>
    {title
      ? (
        <Text
          type="h6"
          className={cx(styles.tableGrid__title)}
        >
          {title}
        </Text>
      )
      : null}
    {children}
  </div>
);
