import React, { FC } from 'react';
import { Text, Image } from '@project/libs/components';
import cx from 'classnames';
import { useTranslation } from '@project/libs/utils/i18n';
import styles from './styles.module.scss';

export const Profile: FC = () => {
  const { t } = useTranslation('main');

  const userName = false;
  const userAvatar = false;

  return (
    <article className={cx(styles.container)}>
      <section className={cx(styles.header_profile__avatar)}>
        {userAvatar
          ? (
            <Image
              url={userAvatar}
              className={cx(styles.header_profile__avatar__image)}
            />
          )
          : null}
      </section>
      <section className={cx(styles.header_profile__userName)}>
        <Text
          type="p"
          className={cx(styles.smallTitle)}
        >
          {userName || t('UserName')}
        </Text>
      </section>
    </article>
  );
};
