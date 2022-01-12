import React from 'react';
import cx from 'classnames';
import { Text } from '@project/libs/components';
import { useTranslation } from '@project/libs/utils/i18n';
import styles from './styles.module.scss';

export const Roulette: React.FC = () => {
  const { t } = useTranslation('main');
  return (
    <section className={cx(styles.roulette__container)}>
      <Text
        type="h3"
        className={cx(styles.roulette__title)}
      >
        {t('Roulette')}
      </Text>

    </section>
  );
};
