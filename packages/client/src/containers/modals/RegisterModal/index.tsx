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

export const RegisterModal = memo(() => {
  const { t } = useTranslation('main');

  const onGoogleClick = useCallback(() => {}, []);

  const onMetaMaskClick = useCallback(() => {}, []);

  const onEmailClick = useCallback(() => {}, []);

  return (
    <div className={cx(styles.register__container)}>
      <div className={cx(styles.register__top)}>
        <div className={cx(styles.register__image)}>
          <Image url={SingInImage} />
        </div>
        <Text
          type="h3"
          className={cx(styles.register__title)}
        >
          {t('Register')}
          {' '}
          Bunny
          <span className={cx(styles.register__title__blue)}>Game</span>
        </Text>
        <div className={cx(styles.register__inputMail__box)}>
          <TextInputWithIcon
            label={t('Your email address')}
            className={cx(styles.register__input)}
            defaultValue="janedoe@mail.com"
            typeIcon="clear"
            name="email"
          />
        </div>
        <TextInputWithIcon
          label={t('Password')}
          className={cx(styles.register__input)}
          password
          typeIcon="password"
          name="password"
        />
        <TextInputWithIcon
          label={t('Accept password')}
          className={cx(styles.register__input)}
          classNameLabel={cx(styles.register__acceptPassword__box)}
          password
          typeIcon="password"
          name="password"
        />
      </div>
      <div className={cx(styles.register__bottom)}>
        <Button
          className={cx(styles.register__button)}
          onClick={() => {}}
        >
          {t('Register')}
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
