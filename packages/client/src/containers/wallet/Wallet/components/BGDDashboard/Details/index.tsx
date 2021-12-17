import React from 'react';
import cx from 'classnames';
import styles from './styles.module.scss';
import { useTranslation } from '@project/libs/utils/i18n';
import { Image, Text } from '@project/libs/components';
import { ArrowToDown } from '@project/libs/assets/images';

export const Details: React.FC = () => {
  const { t } = useTranslation('main');
  
  return (
    <div className={cx(styles.details__block)}>
      <Text type='p' className={cx(styles.details__block__text)}>
        {t('Details')}
        <Image
          url={ArrowToDown}
          className={cx(styles.details__block__arrowToRight)}
        />
      </Text>
    </div>
  );
}