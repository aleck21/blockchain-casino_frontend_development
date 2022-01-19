import React, { useState } from 'react';
import cx from 'classnames';
import { useTranslation } from '@project/libs/utils/i18n';
import { Text, Button, TextInput } from '@project/libs/components';
import styles from './styles.module.scss';

export const ChangePassword: React.FC = () => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [acceptPassword, setAcceptPassword] = useState('');

  const { t } = useTranslation('main');

  return (
    <section className={cx(styles.changePass__container)}>
      <div className={cx(styles.changePass__head)}>
        <Text
          type="h3"
          className={cx(styles.changPass__head__title)}
        >
          {t('Change Password')}
        </Text>
      </div>
      <form>
        <div className={cx(styles.changePass__inputs__box)}>
          <TextInput
            name="oldPassword"
            label={t('Old Password')}
            onChangeValue={setOldPassword}
            value={oldPassword}
            isPassword
          />
          <TextInput
            name="newPassword"
            label={t('New Password')}
            onChangeValue={setNewPassword}
            value={newPassword}
            isPassword
          />
          <TextInput
            name="acceptPassword"
            label={t('Accept Password')}
            onChangeValue={setAcceptPassword}
            value={acceptPassword}
            isPassword
          />
        </div>
        <div className={cx(styles.changePass__submit__box)}>
          <Button
            onClick={() => {}}
            className={cx(styles.submit__button)}
          >
            {t('Change Password')}
          </Button>
        </div>
      </form>
    </section>
  );
};
