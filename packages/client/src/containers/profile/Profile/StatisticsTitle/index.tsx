import React from 'react';
import cx from 'classnames';
import styles from './styles.module.scss';
import { useTranslation } from '@project/libs/utils/i18n';
import { Text } from '@project/libs/components';
import { Button } from 'components/Button';

export const StatisticsTitle: React.FC = () => {
  const { t } = useTranslation('main');

  return(
    <div className={cx(styles.title__container)}>
      <Text type='h3' className={cx(styles.title__text)}>
        {t('Statistics')}
      </Text>
      <Button
        text={t('Transactions')}
        onClick={() => {}}
        className={cx(styles.transaction__button)}
      />
    </div>
  );
}
