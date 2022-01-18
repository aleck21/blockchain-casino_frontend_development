import React, { memo, useCallback, useState } from 'react';
import cx from 'classnames';
import { useTranslation } from '@project/libs/utils/i18n';
import {
  Button,
  Image,
  Text,
  TextInput,
} from '@project/libs/components';
import {
  SingInImage,
} from '@project/libs/assets/images';
import styles from './styles.module.scss';
import { ButtonIconsBox } from '../ButtonIconsBox';

export const SignInModal = memo(() => {
  const { t } = useTranslation('main');

  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

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
          <TextInput
            value={email}
            onChangeValue={setEmail}
            label={t('Your email address')}
            classNameInput={cx(styles.singIn__input)}
            defaultValue="janedoe@mail.com"
            isWithClear
            name="email"
          />
        </div>
        <TextInput
          value={password}
          onChangeValue={setPassword}
          label={t('Password')}
          classNameInput={cx(styles.singIn__input)}
          isPassword
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
