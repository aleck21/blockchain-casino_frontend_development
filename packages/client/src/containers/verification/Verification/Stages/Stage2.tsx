import React, { useState } from 'react';
import cx from 'classnames';
import { useTranslation } from '@project/libs/utils/i18n';
import { Button, TextInput } from '@project/libs/components';
import { StageProps } from './Stage1';
import styles from '../styles.module.scss';

export const Stage2: React.FC<StageProps> = ({
  goNextStage,
}) => {
  const [serverSeedHash, setServerSeedHash] = useState('');
  const [clientSeed, setClientSeed] = useState('');
  const [nonce, setNonce] = useState('');
  const { t } = useTranslation('main');

  return (
    <div className={cx(styles.stageX__container)}>
      <h4>
        Input
      </h4>
      <TextInput
        name="serverSeed"
        label={t('Enter server seed hash')}
        placeholder={t('Server Seed (hash)')}
        classNameInput={cx(styles.h44)}
        classNameLabel={cx(styles.stageX__label)}
        value={serverSeedHash}
        onChangeValue={setServerSeedHash}
        isTextOnly
      />
      <div className={cx(styles.stageX__doubleInput)}>
        <TextInput
          name="clientSeed"
          label={t('Enter client seed')}
          placeholder={t('Client seed')}
          classNameInput={cx(styles.h44)}
          classNameLabel={cx(styles.stageX__label)}
          value={clientSeed}
          onChangeValue={setClientSeed}
          isTextOnly
        />
        <TextInput
          name="nonce"
          label={t('Enter nonce')}
          placeholder={t('Nonce')}
          classNameInput={cx(styles.h44)}
          classNameLabel={cx(styles.stageX__label)}
          value={nonce}
          onChangeValue={setNonce}
          isTextOnly
        />
      </div>
      <p>
        {t('You-can-get-BGD-verification')}
      </p>
      <footer className={cx(styles.verification__footer)}>
        <Button
          onClick={goNextStage}
          className={cx(styles.validate__button)}
        >
          {t('Validate')}
        </Button>
      </footer>
    </div>
  );
};
