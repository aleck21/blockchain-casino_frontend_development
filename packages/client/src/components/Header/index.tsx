import React, { FC, useCallback, useContext } from 'react';
import cx from 'classnames';
// import { useUser } from 'hooks';
import { Button } from '@project/libs/components/inputs';
import { ButtonTheme } from '@project/libs/components/inputs/Button/types';
import { ModalContext, WidgetContext } from 'context';
import { useTranslation } from 'i18n';
import { Logo } from './Logo';
import { Menu } from './Menu';
import { Roulette } from './Roulette';
import { Note } from './Note';
import { Info } from './Info';
import { Profile } from './Profile';
import styles from './styles.module.scss';

export const Header: FC = () => {
  // const { isUser } = useUser();
  const isUser = true;

  const { t } = useTranslation('main');

  const { openModal, setContentModal } = useContext(ModalContext);
  const { setContentWidget, openWidget } = useContext(WidgetContext);

  const onWalletClick = useCallback(() => {
    setContentWidget('wallet');
    openWidget();
  }, [openWidget, setContentWidget]);

  const onSignInClick = useCallback(() => {
    setContentModal('signInModal');
    openModal();
  }, [openModal, setContentModal]);

  const onRegisterClick = useCallback(() => {
    setContentModal('registerModal');
    openModal();
  }, [openModal, setContentModal]);

  return (
    <header className={cx(styles.container)}>
      <section className={cx(styles.header_mobile__content)}>
        <Logo />
        <Menu />
        {!isUser && (
          <section className={cx(styles.login_buttons_container)}>
            <Button
              onClick={onSignInClick}
              className={cx(styles.button, styles.buttonSignIn)}
            >
              {t('Sign-in')}
            </Button>
            <Button
              className={cx(styles.button, styles.buttonRegister)}
              theme={ButtonTheme.outline}
              onClick={onRegisterClick}
            >
              {t('Register')}
            </Button>
          </section>
        )}
        {isUser && (
          <section className={cx(styles.user_logged_in_container)}>
            <Info />
            <Button
              className={cx(styles.wallet_button)}
              onClick={onWalletClick}
            >
              {t('Wallet')}
            </Button>
            <Profile />
            <div className={cx(styles.head_user_content__note)}>
              <Note />
            </div>
          </section>
        )}
      </section>
      <section className={cx(styles.header_mobile__notifications)}>
        <Roulette />
        <div className={cx(styles.header_mobile__note)}>
          <Note />
        </div>
      </section>
    </header>
  );
};
