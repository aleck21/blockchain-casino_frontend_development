import React from 'react';
import { useTranslation } from '@project/libs/utils/i18n';
import { Text } from '@project/libs/components';
import cx from 'classnames';
import styles from './styles.module.scss';

export const LinkBonus: React.FC = () => {
  const { t } = useTranslation('main');

  return (
    <div className={cx(styles.linkBonus__container)}>
      <Text
        type="p"
        className={cx(styles.linkBonus__text)}
      >
        {t('Use another bonus for the next deposit')}
      </Text>
    </div>
  );
};
