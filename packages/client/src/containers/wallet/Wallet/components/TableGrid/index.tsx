import React, { ReactComponentElement, ReactElement, ReactNode } from 'react';
import cx from 'classnames';
import styles from './styles.module.scss';
import { Text } from '@project/libs/components';

type TableProps = {
  children: ReactNode | string;
  title?: string | React.ReactNode;
  className?: string;
}

export const TableGrid: React.FC<TableProps> = ({
  title,
  children,
  className
}) => {
  return(
    <div className={cx(styles.tableGrid__container, className)}>
      {title
        ? <Text type='h6' className={cx(styles.tableGrid__title)}>
            {title}
          </Text>
        : null
      }
      {children}
    </div>
  );
}