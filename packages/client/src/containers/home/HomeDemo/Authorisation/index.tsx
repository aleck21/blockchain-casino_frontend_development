import React, { memo, useCallback } from 'react';
import cx from 'classnames';
import { useTranslation } from '@project/libs/utils/i18n';
import {
  ButtonIcon,
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

type AuthorisationProps = {
  isRegister?: boolean;
};

export const Authorisation = memo(({
  isRegister,
}: AuthorisationProps) => {
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
          {isRegister ? t('Register') : t('Sing In')}
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
        {isRegister && (
          <TextInputWithIcon
            label={t('Accept password')}
            className={cx(styles.singIn__input)}
            classNameLabel={cx(styles.singIn__acceptPassword__box)}
            password
            typeIcon="password"
            name="password"
          />
        )}
      </div>
      <div className={cx(styles.singIn__bottom)}>
        <Button
          text={isRegister ? t('Register') : t('Sing in')}
          className={cx(styles.singIn__button)}
          onClick={() => {}}
        />
        <Text type="p">
          {t('Register with')}
        </Text>
        <div className={cx(styles.singIn__iconsBox)}>
          <ButtonIcon
            onClick={onGoogleClick}
            imageURL={GoogleIcon}
          />
          <ButtonIcon
            onClick={onMetaMaskClick}
            imageURL={MetaMaskIcon}
          />
          <ButtonIcon
            onClick={onEmailClick}
            imageURL={EmailIcon}
          />
        </div>
      </div>
    </div>
  );
});
