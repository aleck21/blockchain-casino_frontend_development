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
import { SignInModal, RegisterModal } from 'containers/modals';
import { CloseIcon } from '@project/libs/assets/images';
import styles from './styles.module.scss';

const modals: Record<string, ReactNode> = {
  promocode: <Promocode />,
  changePassword: <ChangePassword />,
  collectRewards: <CollectRewards />,
  statistics: <Statistics />,
  transactions: <Transactions />,
  notifications: <Notification />,
  roulette: <Roulette />,
  signInModal: <SignInModal />,
  registerModal: <RegisterModal />,
};

export const ModalWindow: React.FC = () => {
  const { isModalOpen, content, closeModal } = useContext(ModalContext);

  const isFullWidth = content === 'signInModal' || content === 'registerModal';

  return (
    <div
      className={cx(styles.modal__container,
        isModalOpen ? styles.open : styles.close)}
      style={{ top: `${window.pageYOffset}px` }}
    >
      <Paper
        className={cx(
          styles.modal__paper, styles.w100m40, { [styles.w100]: isFullWidth },
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
