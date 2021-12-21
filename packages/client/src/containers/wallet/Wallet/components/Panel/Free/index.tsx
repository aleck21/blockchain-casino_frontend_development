import React from 'react';
import { useTranslation } from '@project/libs/utils/i18n';
import { Text } from '@project/libs/components';
import cx from 'classnames';
import styles from './styles.module.scss';

type FreeProps = {
  currencyCount: number | string;
  currencyType: string;
}

export const Free: React.FC<FreeProps> = ({currencyCount, currencyType}) => {
  const { t } = useTranslation('main');

  return(
    <div className={cx(styles.free__container)}>
      <Text type='p' className={cx(styles.free__text)}>
        {t('Free')}&nbsp;
        {currencyCount}&nbsp;
        {currencyType}
      </Text>
    </div>
  );
}