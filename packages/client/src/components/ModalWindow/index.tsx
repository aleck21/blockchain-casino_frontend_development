import React, { ReactNode, useContext } from 'react';
import cx from 'classnames';
import { Paper } from '@project/libs/components/common';
import { ModalContext } from 'context/modalOpen';
import {
  Promocode,
  ChangePassword,
  CollectRewards,
  Statistics,
} from 'containers/profile/Profile/Modals';
import { Transactions } from 'containers/profile/Profile/Modals/Transactions';
import { Notification, Roulette } from 'containers';
import { Authorisation } from 'containers/home/HomeDemo/Authorisation';
import { useMobile } from 'hooks';
import { Close } from './Close';
import styles from './styles.module.scss';

const modals: Record<string, ReactNode> = {
  promocode: <Promocode />,
  changePassword: <ChangePassword />,
  collectRewards: <CollectRewards />,
  statistics: <Statistics />,
  transactions: <Transactions />,
  notifications: <Notification />,
  roulette: <Roulette />,
  authorisation: <Authorisation />,
};

export const ModalWindow: React.FC = () => {
  const { modal, content } = useContext(ModalContext);
  const isMobile = useMobile();

  return (
    <div
      className={cx(styles.modal__container,
        modal ? styles.open : styles.close)}
      style={{ top: `${window.pageYOffset}px` }}
    >
      <Paper
        className={cx(styles.modal__paper)}
        style={{
          width: (isMobile && content === 'authorisation')
            ? '100vw'
            : '',
        }}
      >
        {modals[content]}
        <div className={cx(styles.close__button__box)}>
          <Close />
        </div>
      </Paper>
    </div>
  );
};
