import React, { memo } from 'react';
import cx from 'classnames';
import { useTranslation } from '@project/libs/utils/i18n';
import { Trans } from 'react-i18next';
import { Text } from '@project/libs/components';
import styles from './styles.module.scss';

export const AboutBGD: React.FC = memo(() => {
  const { t } = useTranslation('main');

  const links = {
    bcSwap: 'https://bcs',
    bgSwap: 'https://bgs',
    vaultPro: 'https://vault',
  };

  return (
    <div className={cx(styles.aboutBGD__container)}>
      <div className={cx(styles.aboutBGD__top)}>
        <Text type="h3">
          {t('About BGD')}
        </Text>
      </div>
      <div className={cx(styles.aboutBGD__main)}>
        <Text
          type="p"
          className={cx(styles.aboutBGD__title)}
        >
          {t('What is BGD')}
        </Text>
        <Text type="p">
          {t('BGD-BG-Dollar-is-a-special')}
        </Text>

        <Text
          type="p"
          className={cx(styles.aboutBGD__title)}
        >
          {t('How to get BGD?')}
        </Text>
        <Text type="p">
          <Trans
            i18nKey={t('You-can-get-BGD')}
            className={cx(styles.blue__text)}
          >
            You can get BGD through deposit bonus and other activities. You can
            also directly exchange other currencies into the available balance
            of BCD through the
            {' '}
            <a href={links.bcSwap}>BCSwap</a>
            {' '}
            function in the wallet.
          </Trans>
        </Text>

        <Text
          type="p"
          className={cx(styles.aboutBGD__title)}
        >
          {t('How to unlock BGD?')}
        </Text>
        <Text type="p">
          {t('The-BGD-obtained-through')}
          <br />
          <span className={cx(styles.white__text)}>
            {t('Unlock amount')}
            &nbsp;=&nbsp;
            {t('wager amount')}
            &nbsp;*&nbsp;
            {t('house edge')}
            &nbsp;* (20
            <span className={cx(styles.blue__text)}>+5</span>
            )%
          </span>
          <br />
          {t('Different-games-have')}
        </Text>

        <Text
          type="p"
          className={cx(styles.aboutBGD__title)}
        >
          {t('Can-BGD-be-exchanged')}
        </Text>
        <Text type="p">
          <Trans
            i18nKey={t('Sure-The-most-exciting')}
          >
            Sure! The most exciting thing is that the value of 1 BGD is bound to
            the price of 1 USDT, and you can
            {' '}
            <a href={links.bgSwap}>BGSwap</a>
            {' '}
            BGD into other currencies at any time.
          </Trans>
        </Text>

        <Text
          type="p"
          className={cx(styles.aboutBGD__title)}
        >
          {t('What-is-special-about')}
        </Text>
        <Text type="p">
          {t('You-can-enjoy-up-to')}
          <span className={cx(styles.white__text)}>
            &nbsp;10%&nbsp;
          </span>
          <Trans
            i18nKey={t('You-can-enjoy-up-to2')}
          >
            annualized rate of return when you store your BGD in
            {' '}
            <a href={links.vaultPro}>Vault Pro</a>
            . So enjoy collecting BGD!
          </Trans>
        </Text>
      </div>
    </div>
  );
});
