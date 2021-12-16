import React, { FC } from 'react';
import { Image } from '@project/libs/components';
import { BellNote, Bell } from '@project/libs/assets/images';
import cx from 'classnames';
import styles from './styles.module.scss';

export const Note: FC = () => {
  const isNote = true;
  
  return (
    <div className={cx(styles.container)}>
      <Image
        url={isNote ? BellNote : Bell}
        className={cx(styles.header__note)}
      />
    </div>
  );
}