import React, { memo } from 'react';
import cx from 'classnames';
import { useTranslation } from '@project/libs/utils/i18n';
import { Trans } from 'react-i18next';
import { Text } from '@project/libs/components';
import { quanityDeposit, sizeBonus } from 'constants/bonus';
import styles from './styles.module.scss';

export const ActivateNewBonus = memo(() => {
  const { t } = useTranslation('main');

  return (
    <div className={cx(styles.activate__container)}>
      <Text type="h3">
        {t('Activating new bonus')}
      </Text>
      <section className={cx(styles.activate__activeBonus__box)}>
        <Text type="h6">
          {t('Active Bonus')}
        </Text>
        <Text type="p">
          <Trans i18nKey="active-bonus">
            <b>
              {{ sizeBonus: sizeBonus.b1000 }}
            </b>
            <b> BGD</b>
            {' '}
            bonus for the next
            {' '}
            {{ quanityDeposit: quanityDeposit.b1000 }}
            {' '}
            USD deposit
          </Trans>
        </Text>
      </section>
    </div>
  );
});
