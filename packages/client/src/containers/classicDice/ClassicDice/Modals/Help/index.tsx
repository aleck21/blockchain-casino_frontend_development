import React, { memo } from 'react';
import { Button, Text } from '@project/libs/components';
import { useTranslation } from '@project/libs/utils/i18n';
import { Trans } from 'react-i18next';
import styles from './styles.module.scss';

type HelpProps = {
  onBack: () => void;
};

const Help = memo(({
  onBack,
}: HelpProps) => {
  const { t } = useTranslation('main');

  return (
    <section className={styles.help__container}>
      <Text type="h2">
        {t('Help')}
      </Text>
      <Text type="p">
        <Trans
          i18nKey={t('You-can-get-BGD-through-deposit-help')}
        >
          You can get BGD through deposit bonus and other activities. You can
          also directly exchange other currencies into the available balance of
          BCD through the
          {' '}
          <a href="https://xx.xx">BCSwap</a>
          {' '}
          function in the wallet.
        </Trans>
      </Text>
      <Text type="h3">
        {t('What game is it?')}
      </Text>
      <Text type="p">
        {t('BGD-(BG Dollar)-is-a-special-help')}
      </Text>
      <Text type="h3">
        {t('Fairness')}
      </Text>
      <Text type="p">
        {t('BGD-(BG Dollar)-is-a-special-help')}
      </Text>
      <Text type="h3">
        {t('Bankroll')}
      </Text>
      <Text type="p">
        {t('BGD-(BG Dollar)-is-a-special-help')}
      </Text>
      <Button
        onClick={onBack}
        className={styles.back__button}
      >
        {t('Got it')}
      </Button>
    </section>
  );
});

export { Help };
