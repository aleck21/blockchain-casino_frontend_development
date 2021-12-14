import React, { FC } from 'react';
import cx from 'classnames';
import { Image } from '@project/libs/components';
import { BunnyGameLogoBig } from '@project/libs/assets/images';
import { useUser } from 'hooks';
import { useTranslation } from 'i18n';
import styles from './styles.module.scss';

export const Sidebar: FC = () => {
  const { t } = useTranslation('main');
  const { isUser } = useUser();
  console.log(isUser);
  console.log(t('Hello'));

  return (
    <div className={cx(styles.container)}>
      <Image
        url={BunnyGameLogoBig}
        className={styles.logo}
      />
    </div>
  );
};
