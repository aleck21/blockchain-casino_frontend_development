import React, { memo, useCallback, useState } from 'react';
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

  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [email, setEmail] = useState('');

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
            value={email}
            onChangeValue={setEmail}
            label={t('Your email address')}
            className={cx(styles.register__input)}
            defaultValue="janedoe@mail.com"
            isWithClear
            name="email"
          />
        </div>
        <TextInputWithIcon
          value={password}
          onChangeValue={setPassword}
          label={t('Password')}
          className={cx(styles.register__input)}
          isPassword
          name="password"
        />
        <TextInputWithIcon
          value={passwordConfirm}
          onChangeValue={setPasswordConfirm}
          label={t('Accept password')}
          className={cx(styles.register__input)}
          classNameLabel={cx(styles.register__acceptPassword__box)}
          isPassword
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
