import React from 'react';
import { useTranslation } from '@project/libs/utils/i18n';
import { Text } from '@project/libs/components';

import cx from 'classnames';
import styles from './styles.module.scss';

type RateProps = {
  rate: string | number;
};

export const Rate: React.FC<RateProps> = ({
  rate = '47377.20',
}) => {
  const { t } = useTranslation('main');

  return (
    <div className={cx(styles.container)}>
      <Text
        type="p"
        className={cx(styles.rate__text)}
      >
        {t(`1BTC=$${rate}`)}
      </Text>
    </div>
  );
};
