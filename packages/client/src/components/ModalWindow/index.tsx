import React, { useContext } from 'react';
import cx from 'classnames';
import styles from './styles.module.scss';
import { Paper } from 'components/Paper';
import { ModalContext } from 'context/modalOpen';
import { Promocode } from 'containers/profile/Profile/Promocode';
import { ChangePassword } from 'containers/profile/Profile/ChangePassword';

export const ModalWindow: React.FC = () => {
  const { modal, content } = useContext(ModalContext)

  return(
    <div
      className={cx(styles.modal__container,
        modal ? styles.open : styles.close
      )}
      style={{ top: window.pageYOffset + 140 + 'px' }}
    >
      <Paper className={cx(styles.modal__paper)}>
        {content === 'promocode' && <Promocode />}
        {content === 'changePassword' && <ChangePassword />}
      </Paper>
    </div>
  );
}