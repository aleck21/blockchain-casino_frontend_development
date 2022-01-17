import React, { ReactNode, useContext } from 'react';
import cx from 'classnames';
import { Paper, ButtonIcon } from '@project/libs/components';
import { ModalContext } from 'context/modalOpen';
import {
  Promocode,
  ChangePassword,
  CollectRewards,
  Statistics,
} from 'containers/profile/Profile/Modals';
import { Transactions } from 'containers/profile/Profile/Modals/Transactions';
import { Notification, Roulette } from 'containers';
import { Authorisation } from 'containers/home/Home/Authorisation';
import { CloseIcon } from '@project/libs/assets/images';
import { AboutBGD } from 'containers/home/Home/AboutBGD';
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
  registration: <Authorisation isRegister />,
  aboutBgd: <AboutBGD />,
};

export const ModalWindow: React.FC = () => {
  const { isModalOpen, content, closeModal } = useContext(ModalContext);

  return (
    <div
      className={cx(styles.modal__container,
        isModalOpen ? styles.open : styles.close)}
      style={{ top: `${window.pageYOffset}px` }}
    >
      <Paper
        className={cx(
          styles.modal__paper,
          content === 'authorisation' ? styles.w100 : styles.w100m40,
        )}
      >
        {modals[content]}
        <ButtonIcon
          className={cx(styles.close__button__box)}
          styleImage={{ width: 24, height: 24 }}
          onClick={closeModal}
          imageURL={CloseIcon}
          alt="x"
        />
      </Paper>
    </div>
  );
};
