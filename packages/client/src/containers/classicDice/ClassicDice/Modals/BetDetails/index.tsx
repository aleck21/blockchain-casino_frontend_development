import React, { memo, useCallback, useState } from 'react';
import { useTranslation } from '@project/libs/utils/i18n';
import { Trans } from 'react-i18next';
import { AvatarDefault } from '@project/libs/assets/images';
import {
  TextInput,
  Button,
  Text,
  Image,
} from '@project/libs/components';
import styles from './styles.module.scss';
import { betDetails } from './contentDemo';

const BetDetails = memo(() => {
  const { t } = useTranslation('main');
  const [serverSeed, setServerSeed] = useState('');
  const [clientSeed, setClientSeed] = useState('');
  const [bets, setBets] = useState('');

  const onVerifyClick = useCallback(() => {
    setServerSeed(betDetails.serverSeed);
    setClientSeed(betDetails.clientSeed);
    setBets(betDetails.bets);
  }, []);

  return (
    <section className={styles.betDetails__container}>
      <Text type="h2">
        {t('Bet Details')}
      </Text>
      <section className={styles.user__block}>
        <Image
          url={AvatarDefault}
        />
        <article className={styles.bets__box}>
          <Text type="p">
            {t('Bet ID')}
            &emsp;
            <span>
              {betDetails.betId}
            </span>
          </Text>
          <Text type="p">
            {t('Bet date')}
            &emsp;
            <span>
              {betDetails.date.toLocaleDateString(
                'fr-CH',
                { day: '2-digit', year: 'numeric', month: '2-digit' },
              )}
              {' '}
              {betDetails.date.toLocaleTimeString().slice(0, -3)}
            </span>
          </Text>
        </article>
      </section>
      <Text type="h3">
        {t('Details')}
      </Text>
      <Text
        type="p"
        className={styles.mb20}
      >
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
      <TextInput
        label={t('Server seed')}
        value={serverSeed}
        placeholder={t('You can get BGD through deposit bonus and')}
        isTextOnly
        classNameInput={styles.seed__input}
      />
      <div className={styles.seed__2inputs}>
        <TextInput
          label={t('Client seed')}
          value={clientSeed}
          placeholder={t('You can get BGD')}
          isTextOnly
          classNameInput={styles.seed__input}
        />
        <TextInput
          label={t('Amount of bets')}
          value={bets}
          placeholder={t('You can get BGD')}
          isTextOnly
          classNameInput={styles.seed__input}
        />
      </div>
      <Button
        className={styles.verify__button}
        onClick={onVerifyClick}
      >
        {t('Verify')}
      </Button>
    </section>
  );
});

export { BetDetails };
