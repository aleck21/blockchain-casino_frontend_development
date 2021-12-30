import React, { FC, useContext } from 'react';
import { Image } from '@project/libs/components';
import { BellNote, Bell } from '@project/libs/assets/images';
import cx from 'classnames';
import styles from './styles.module.scss';
import { ModalContext } from 'context/modalOpen';

export const Note: FC = () => {
  const isNote = true;

  const { openModal, setContentModal } = useContext(ModalContext);
  
  const onNotifications = () => {
    setContentModal('notifications');
    openModal();
  }

  return (
    <div className={cx(styles.container)} onClick={onNotifications} >
      <Image
        url={isNote ? BellNote : Bell}
        className={cx(styles.header__note)}
      />
    </div>
  );
}