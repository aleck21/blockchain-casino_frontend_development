import React, { memo, useState } from 'react';
import { Button, Text, TextInput } from '@project/libs/components';
import { useTranslation } from '@project/libs/utils/i18n';
import styles from './styles.module.scss';

const SeedSettings = memo(() => {
  const { t } = useTranslation('main');
  const [serverSeed, setServerSeed] = useState('');
  const [clientSeed, setClientSeed] = useState('');
  const [bets, setBets] = useState('');

  const currentDatas = {
    serverSeed: '',
    clientSeed: '',
    bets: '',
  };

  const onChangeServerSeed = (text: string) => {
    setServerSeed(text);
  };

  const onChangeClientSeed = (text: string) => {
    setClientSeed(text);
  };

  const onChangeBets = (text: string) => {
    setBets(text);
  };

  return (
    <div className={styles.seed__container}>
      <Text type="h2">
        {t('Seed Settings')}
      </Text>
      <article className={styles.seed__info__block}>
        {t('You-may-use-this-function')}
      </article>
      <Text type="h3">
        {t('Current Seeds')}
      </Text>
      <TextInput
        label={t('Server seed')}
        value={currentDatas.serverSeed}
        placeholder={t('You can get BGD through deposit bonus and')}
        disabled
        isTextOnly
        classNameInput={styles.seed__input}
      />
      <div className={styles.seed__2inputs}>
        <TextInput
          label={t('Client seed')}
          value={currentDatas.clientSeed}
          placeholder={t('You can get BGD')}
          disabled
          isTextOnly
          classNameInput={styles.seed__input}
        />
        <TextInput
          label={t('Amount of bets')}
          value={currentDatas.bets}
          disabled
          isTextOnly
          placeholder={t('You can get BGD')}
          classNameInput={styles.seed__input}
        />
      </div>
      <Text type="h3">
        {t('New Seeds')}
      </Text>
      <TextInput
        label={t('Server seed')}
        value={serverSeed}
        placeholder={t('You can get BGD through deposit bonus and')}
        onChangeValue={onChangeServerSeed}
        isTextOnly
        classNameInput={styles.seed__input}
      />
      <div className={styles.seed__2inputs}>
        <TextInput
          label={t('Client seed')}
          value={clientSeed}
          placeholder={t('You can get BGD')}
          onChangeValue={onChangeClientSeed}
          isTextOnly
          classNameInput={styles.seed__input}
        />
        <TextInput
          label={t('Amount of bets')}
          value={bets}
          placeholder={t('You can get BGD')}
          onChangeValue={onChangeBets}
          isTextOnly
          classNameInput={styles.seed__input}
        />
      </div>
      <Button
        className={styles.newSeed__button}
      >
        {t('Use new seeds')}
      </Button>
    </div>
  );
});

export { SeedSettings };
