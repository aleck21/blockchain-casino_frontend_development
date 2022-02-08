import React, { memo } from 'react';
import { BackArrow } from '@project/libs/assets/images';
import { ButtonIcon, Text } from '@project/libs/components';
import { useTranslation } from '@project/libs/utils/i18n';
import { Trans } from 'react-i18next';
import styles from './styles.module.scss';

type BankrollProps = {
  onBack: () => void;
};

const BankrollInfoModal = memo(({
  onBack,
}: BankrollProps) => {
  const { t } = useTranslation('main');

  return (
    <section className={styles.bankrollInfo__container}>
      <Text type="h2">
        {t('Bankroll')}
      </Text>
      <ButtonIcon
        imageURL={BackArrow}
        onClick={onBack}
        className={styles.back__button}
      />
      <Text type="p">
        <Trans
          i18nKey={t('You-can-get-BGD-through-deposit')}
        >
          You can get BGD through deposit bonus and other activities. You can
          also directly exchange other currencies into the available balance of
          BCD through the
          {' '}
          <a href="https://xx.xx">BCSwap</a>
          {' '}
          function in the wallet. You can get BGD through deposit bonus and
          other activities. You can also directly exchange other currencies into
          the available balance of BCD through the
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
        {t('BGD-(BG Dollar)-is-a-special')}
      </Text>
      <Text type="h3">
        {t('Fairness')}
      </Text>
      <Text type="p">
        {t('BGD-(BG Dollar)-is-a-special')}
      </Text>
      <Text type="h3">
        {t('Bankroll')}
      </Text>
      <Text type="p">
        {t('BGD-(BG Dollar)-is-a-special')}
      </Text>
    </section>
  );
});

export { BankrollInfoModal };
