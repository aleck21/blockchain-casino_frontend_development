import React, { memo, useCallback } from 'react';
import cx from 'classnames';
import { useTranslation } from '@project/libs/utils/i18n';
import {
  Button,
  Image,
  Text,
  TextInputWithIcon,
} from '@project/libs/components';
import {
  SingInImage,
} from '@project/libs/assets/images';
import styles from './styles.module.scss';
import { ButtonIconsBox } from '../ButtonIconsBox';

export const SignInModal = memo(() => {
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
          className={cx(styles.singIn__button)}
          onClick={() => {}}
        >
          {t('Sing in')}
        </Button>
        <Text type="p">
          {t('Register with')}
        </Text>
        <ButtonIconsBox
          onGoogleClick={onGoogleClick}
          onMetaMaskClick={onMetaMaskClick}
          onEmailClick={onEmailClick}
        />
      </div>
    </div>
  );
});
