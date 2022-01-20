import React, { ReactNode, useContext } from 'react';
import cx from 'classnames';
import { ButtonIcon } from '@project/libs/components';
import { ModalContext } from 'context/modalOpen';
import { Modals } from 'constants/modals';
import {
  PromocodeModal,
  ChangePasswordModal,
  CollectRewardsModal,
  StatisticsModal,
  TransactionsModal,
  Notification,
  Roulette,
  SignInModal,
  RegisterModal,
  AboutBGDModal,
} from 'containers';
import { CloseIcon } from '@project/libs/assets/images';
import styles from './styles.module.scss';

const modals: Record<string, ReactNode> = {
  promocode: <PromocodeModal />,
  changePassword: <ChangePasswordModal />,
  collectRewards: <CollectRewardsModal />,
  statistics: <StatisticsModal />,
  transactions: <TransactionsModal />,
  notifications: <Notification />,
  roulette: <Roulette />,
  aboutBgd: <AboutBGDModal />,
  signInModal: <SignInModal />,
  registerModal: <RegisterModal />,
};

export const ModalWindow: React.FC = () => {
  const { isModalOpen, content, closeModal } = useContext(ModalContext);

  const isFullWidth = content === Modals.signInModal || content === Modals.registerModal;

  return (
    <div
      className={cx(styles.modal__container,
        isModalOpen ? styles.open : styles.close)}
      style={{ top: `${window.pageYOffset}px` }}
    >
      <section
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
      </section>
    </div>
  );
};
