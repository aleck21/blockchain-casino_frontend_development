import React, { FC, useContext } from 'react';
import { Button } from '@project/libs/components';
import { ButtonTheme } from '@project/libs/components/inputs/Button/types';
import { useTranslation } from 'i18n';
import cx from 'classnames';
import { ModalContext } from 'context/modalOpen';
import styles from './styles.module.scss';

export const LogInButtons: FC = () => {
  const { t } = useTranslation('main');

  const { openModal, setContentModal } = useContext(ModalContext);

  const onSignInClick = () => {
    setContentModal('authorisation');
    openModal();
  };

  const onRegisterClick = () => {
    setContentModal('registration');
    openModal();
  };

  return (
    <section className={cx(styles.container)}>
      <Button
        onClick={onSignInClick}
        className={cx(styles.button, styles.buttonSignIn)}
      >
        {t('Sign-in')}
      </Button>
      <Button
        className={styles.button}
        theme={ButtonTheme.outline}
        onClick={onRegisterClick}
      >
        {t('Register')}
      </Button>
    </section>
  );
};
