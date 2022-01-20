import React, {
  memo,
  useCallback,
  useContext,
  useState,
} from 'react';
import cx from 'classnames';
import { useTranslation } from '@project/libs/utils/i18n';
import {
  Button,
  Image,
  Text,
  TextInput,
} from '@project/libs/components';
import { ModalContext } from 'context';
import {
  AvatarDefault,
  ChangePasswordIcon,
  LogOutIcon,
} from '@project/libs/assets/images';
import { Modals } from 'constants/modals';
import styles from './styles.module.scss';
import { SwitchPanel } from './SwitchPanel';

export const Profile = memo(() => {
  const { t } = useTranslation('main');
  const { openModal, setContentModal } = useContext(ModalContext);

  const [name, setName] = useState('JaneDoe');
  const [email, setEmail] = useState('janedoe@mail.com');

  const onChangePasswordClick = useCallback(() => {
    setContentModal(Modals.changePassword);
    openModal();
  }, [openModal, setContentModal]);

  const avatar = AvatarDefault;

  return (
    <>
      <Text
        type="h2"
        className={cx(styles.profile__head)}
      >
        {t('Profile')}
      </Text>
      <Image
        url={avatar}
        className={cx(styles.avatar__mobile)}
      />
      <div className={cx(styles.panel__main__container)}>
        <div className={cx(styles.panel__main__personal)}>
          <Image
            url={avatar}
            className={cx(styles.personal__avatar)}
          />
          <TextInput
            value={name}
            onChangeValue={setName}
            label={t('Username')}
            classNameInput={styles.input}
          />
        </div>
        <TextInput
          value={email}
          onChangeValue={setEmail}
          label={t('Email')}
          classNameInput={styles.input}
        />
        <div className={cx(styles.panel__main__toggles)}>
          <SwitchPanel />
        </div>
        <div className={cx(styles.panel__main__buttons)}>
          <Button
            onClick={onChangePasswordClick}
            className={cx(styles.button)}
          >
            <Image url={ChangePasswordIcon} />
          &nbsp;
            {t('Change password')}
          </Button>
          <Button
            onClick={() => {}}
            className={cx(styles.button)}
          >
            <Image url={LogOutIcon} />
            {t('Log Out')}
          </Button>
        </div>
      </div>
    </>
  );
});
