import React, { useState } from 'react';
import cx from 'classnames';
import { useTranslation } from '@project/libs/utils/i18n';
import { Image, Button, TextInput } from '@project/libs/components';
import { ArrowBlue } from '@project/libs/assets/images';
import { result, bytes } from './contentDemo';
import { StageProps } from './Stage1';
import styles from '../styles.module.scss';

export const Stage3: React.FC<StageProps> = ({
  goNextStage,
}) => {
  const { t } = useTranslation('main');
  const [serverSeedHash, setServerSeedHash] = useState('');
  const [clientSeed, setClientSeed] = useState('');
  const [nonce, setNonce] = useState('');
  const [short, setShort] = useState(true);
  const [finalHash, setFinalHash] = useState('');
  const [outputSserverSeed, setOutputServerSeed] = useState('');

  return (
    <div className={cx(styles.stageX__container)}>
      <h4>
        Input
      </h4>
      <TextInput
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
          label={t('Enter client seed')}
          placeholder={t('Client seed')}
          classNameInput={cx(styles.h44)}
          classNameLabel={cx(styles.stageX__label)}
          value={clientSeed}
          onChangeValue={setClientSeed}
          isTextOnly
        />
        <TextInput
          label={t('Enter nonce')}
          placeholder={t('Nonce')}
          classNameInput={cx(styles.h44)}
          classNameLabel={cx(styles.stageX__label)}
          value={nonce}
          onChangeValue={setNonce}
          isTextOnly
        />
      </div>
      <h4>
        Output
      </h4>
      <div className={cx(styles.stageX__doubleInput)}>
        <TextInput
          label={t('Server seed hash')}
          placeholder={t('Server Seed (hash)')}
          classNameInput={cx(styles.h44)}
          classNameLabel={cx(styles.stageX__label)}
          value={outputSserverSeed}
          onChangeValue={setOutputServerSeed}
          isTextOnly
        />
        <TextInput
          label={t('Final hash')}
          placeholder={t('Final hash')}
          classNameInput={cx(styles.h44)}
          classNameLabel={cx(styles.stageX__label)}
          value={finalHash}
          onChangeValue={setFinalHash}
          isTextOnly
        />
      </div>
      <footer
        className={cx(styles.verification__footer)}
        style={{ paddingTop: 30 }}
      >
        <h4
          className={cx(styles.left)}
        >
          <Button
            onClick={goNextStage}
            className={cx(styles.result__button)}
          >
            Results
          </Button>
        </h4>
        <div className={cx(styles.result__table__container)}>
          <table>
            <thead>
              <tr>
                {result.map((th) => (
                  <th key={th.id}>
                    {th.title}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                {result.map((td) => (
                  <td key={td.id}>
                    {td.data}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
        <div className={cx(styles.bytes__box)}>
          <span
            className={cx(styles.bytes__title)}
            onClick={() => setShort(!short)}
            onKeyPress={() => {}}
            tabIndex={0}
            role="button"
          >
            Bytes to number
            <Image
              url={ArrowBlue}
              className={cx(
                short ? styles.arrow__toRight : styles.arrow__toDown,
              )}
            />
          </span>
          <span className={cx(styles.bytes__text)}>
            {short
              ? bytes.short
              : (
                <>
                  {bytes.details[0]}
                  <br />
                  {bytes.details[1]}
                </>
              )}
          </span>
        </div>
      </footer>
    </div>
  );
};
