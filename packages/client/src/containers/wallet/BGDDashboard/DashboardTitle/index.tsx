import React from 'react';
import cx from 'classnames';
import { useTranslation } from '@project/libs/utils/i18n';
import { Text } from '@project/libs/components';
import styles from './styles.module.scss';
import { Details } from '../Details';

export const DashboardTitle: React.FC = () => {
  const { t } = useTranslation('main');

  return (
    <div className={cx(styles.dashboard__titleBlock)}>
      <Text
        type="h3"
        className={cx(styles.dashboard__titleBlock__h3)}
      >
        {t('BGD Dashboard')}
      </Text>
      <Text
        type="p"
        className={cx(styles.dashboard__text)}
      >
        {t('Enjoy the game while unlocking BGD to your wallet')}
      </Text>
      <div className={cx(styles.dashboard__text__mobile__details)}>
        <Details />
      </div>
    </div>
  );
};
