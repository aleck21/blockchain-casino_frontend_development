import React from 'react';
import { useTranslation } from '@project/libs/utils/i18n';
import cx from 'classnames';
import { Image, Text } from '@project/libs/components';
import { ActiveBonusBkgDesktop } from '@project/libs/assets/images';
import styles from './styles.module.scss';

export const Active: React.FC = () => {
  const { t } = useTranslation('main');

  return (
    <div className={cx(styles.active__container)}>
      <div className={cx(styles.active__container__otherBkg)}>
        <Image
          url={ActiveBonusBkgDesktop}
          className={cx(styles.active__container__otherBkg__image)}
        />
      </div>
      <div className={cx(styles.active__container__content)}>
        <Text
          type="h6"
          className={cx(styles.active__title)}
        >
          {t('Active Bonus')}
        </Text>
        <Text
          type="p"
          className={cx(styles.active__text)}
        >
          {t('+100% BGD bonus for the next 100-200 USD deposit')}
        </Text>
      </div>
    </div>
  );
};
