import React, { memo, useCallback } from 'react';
import cx from 'classnames';
import { useTranslation } from '@project/libs/utils/i18n';
import {
  ButtonWithContent as Button,
  Image,
  Text,
  TextInputWithIcon,
} from '@project/libs/components';
import {
  EmailIcon,
  GoogleIcon,
  MetaMaskIcon,
  SingInImage,
} from '@project/libs/assets/images';
import styles from './styles.module.scss';

export const Authorisation: React.FC = memo(() => {
  const { t } = useTranslation('main');

  const onGoogleClick = useCallback(() => {}, []);

  const onMetaMaskClick = useCallback(() => {}, []);

  const onEmailClick = useCallback(() => {}, []);

  return (
    <div className={cx(styles.singIn__container)}>
      <div className={cx(styles.singIn__top)}>
        <div className={cx(styles.singIn__image)}>
          <Image url={SingInImage} />
        </div>
        <Text
          type="h3"
          className={cx(styles.singIn__title)}
        >
          {t('Sing In')}
          {' '}
          Bunny
          <span className={cx(styles.singIn__title__blue)}>Game</span>
        </Text>
        <div className={cx(styles.singIn__inputMail__box)}>
          <TextInputWithIcon
            label={t('Your email address')}
            className={cx(styles.singIn__input)}
            defaultValue="janedoe@mail.com"
            typeIcon="clear"
            name="email"
          />
        </div>
        <TextInputWithIcon
          label={t('Password')}
          className={cx(styles.singIn__input)}
          password
          typeIcon="password"
          name="password"
        />
      </div>
      <div className={cx(styles.singIn__bottom)}>
        <Button
          text={t('Sing in')}
          className={cx(styles.singIn__button)}
          onClick={() => {}}
        />
        <Text type="p">
          {t('Register with')}
        </Text>
        <div className={cx(styles.singIn__iconsBox)}>
          <div
            onClick={onGoogleClick}
            onKeyPress={() => {}}
            tabIndex={0}
            role="button"
          >
            <Image url={GoogleIcon} />
          </div>
          <div
            onClick={onMetaMaskClick}
            onKeyPress={() => {}}
            tabIndex={0}
            role="button"
          >
            <Image url={MetaMaskIcon} />
          </div>
          <div
            onClick={onEmailClick}
            onKeyPress={() => {}}
            tabIndex={0}
            role="button"
          >
            <Image url={EmailIcon} />
          </div>
        </div>
      </div>
    </div>
  );
});
