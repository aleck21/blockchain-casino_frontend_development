import React, { useContext } from 'react';
import cx from 'classnames';
import { TextInput } from 'components/TextInput';
import { useTranslation } from '@project/libs/utils/i18n';
import { AvatarDefault, ChangePasswordIcon, LogOutIcon } from '@project/libs/assets/images';
import { Image, ButtonWithContent as Button } from '@project/libs/components';
import { ModalContext } from 'context/modalOpen';
import { SwitchPanel } from './SwitchPanel';
import styles from './styles.module.scss';

export const avatarDemo = AvatarDefault;

export const Main: React.FC = () => {
  const { t } = useTranslation('main');
  const { openModal, setContentModal } = useContext(ModalContext);

  const changePassword = () => {
    setContentModal('changePassword');
    openModal();
  };

  return (
    <div className={cx(styles.panel__main__container)}>
      <div className={cx(styles.panel__main__personal)}>
        <Image
          url={avatarDemo}
          className={cx(styles.personal__avatar)}
        />
        <TextInput
          label={t('Username')}
          name="username"
          defaultValue="JaneDoe"
        />
      </div>
      <TextInput
        label={t('Email')}
        name="email"
        defaultValue="janedoe@mail.com"
      />
      <div className={cx(styles.panel__main__toggles)}>
        <SwitchPanel />
      </div>
      <div className={cx(styles.panel__main__buttons)}>
        <Button
          text={t('Change password')}
          icon={ChangePasswordIcon}
          onClick={changePassword}
          className={cx(styles.button)}
        />
        <Button
          text={t('Log Out')}
          icon={LogOutIcon}
          onClick={() => {}}
          className={cx(styles.button)}
        />
      </div>
    </div>
  );
};