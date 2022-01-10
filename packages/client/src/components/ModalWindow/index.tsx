import React, { useContext } from 'react';
import cx from 'classnames';
import { Paper } from 'components/Paper';
import { ModalContext } from 'context/modalOpen';
import {
  Promocode,
  ChangePassword,
  CollectRewards,
  Statistics,
} from 'containers/profile/Profile/Modals';
import { Transactions } from 'containers/profile/Profile/Modals/Transactions';
import { Notification, Roulette } from 'containers';
import { Close } from './Close';
import styles from './styles.module.scss';

export const ModalWindow: React.FC = () => {
  const { modal, content } = useContext(ModalContext);
  return (
    <div
      className={cx(styles.modal__container,
        modal ? styles.open : styles.close)}
      style={{ top: `${window.pageYOffset}px` }}
    >
      <Paper className={cx(styles.modal__paper)}>
        {content === 'promocode' && <Promocode />}
        {content === 'changePassword' && <ChangePassword />}
        {content === 'collectRewards' && <CollectRewards />}
        {content === 'statistics' && <Statistics />}
        {content === 'transactions' && <Transactions />}
        {content === 'notifications' && <Notification />}
        {content === 'roulette' && <Roulette />}
        <div className={cx(styles.close__button__box)}>
          <Close />
        </div>
      </Paper>
    </div>
  );
};
