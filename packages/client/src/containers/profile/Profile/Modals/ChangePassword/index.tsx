import React from 'react';
import cx from 'classnames';
import { useTranslation } from '@project/libs/utils/i18n';
import { PasswordInput } from 'components/PasswordInput';
import { Text, ButtonWithContent as Button } from '@project/libs/components';
import styles from './styles.module.scss';

export const ChangePassword: React.FC = () => {
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
          <PasswordInput
            name="oldPassword"
            label={t('Old Password')}
          />
          <PasswordInput
            name="newPassword"
            label={t('New Password')}
          />
          <PasswordInput
            name="acceptPassword"
            label={t('Accept Password')}
          />
        </div>
        <div className={cx(styles.changePass__submit__box)}>
          <Button
            text={t('Change Password')}
            onClick={() => {}}
            className={cx(styles.submit__button)}
          />
        </div>
      </form>
    </section>
  );
};
