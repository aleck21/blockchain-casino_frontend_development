import React, { FC } from 'react';
import { useTranslation } from '@project/libs/utils/i18n';
import { Text } from '@project/libs/components';

import cx from 'classnames';
import styles from './styles.module.scss';

export const Copyright: FC = () => {
  const { t } = useTranslation('main');

  return (
    <div className={cx(styles.container)}>
      <Text type='p' className={cx(styles.copyright__text)}>
        {t('2021 BunnyGame All Rights reserved')}
      </Text>
    </div>
  );
}