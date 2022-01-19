import React from 'react';
import cx from 'classnames';
import { useTranslation } from '@project/libs/utils/i18n';
import { Image, Text } from '@project/libs/components';
import styles from './styles.module.scss';
import { avatarDemo, Main } from './Main';

export const Profile: React.FC = () => {
  const { t } = useTranslation('main');

  return (
    <>
      <Text
        type="h2"
        className={cx(styles.profile__head)}
      >
        {t('Profile')}
      </Text>
      <Image
        url={avatarDemo}
        className={cx(styles.avatar__mobile)}
      />
      <Main />
    </>
  );
};
