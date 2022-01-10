import React, { FC } from 'react';
import { Text } from '@project/libs/components';
import { useTranslation } from '@project/libs/utils/i18n';

import cx from 'classnames';
import styles from './styles.module.scss';

export const Links: FC = () => {
  const { t } = useTranslation('main');

  return (
    <div className={cx(styles.container)}>
      <Text
        type="p"
        className={cx(styles.links__text)}
      >
        {t('HELP CENTER')}
      </Text>
      <Text
        type="p"
        className={cx(styles.links__text)}
      >
        {t('USER AGREEMENT')}
      </Text>
      <Text
        type="p"
        className={cx(styles.links__text)}
      >
        {t('PRIVACY POLICY')}
      </Text>
    </div>
  );
};
