import React, { useState } from 'react';
import cx from 'classnames';
import { TextInputClient } from 'components/TextInput';
import { useTranslation } from '@project/libs/utils/i18n';
import { Image, Button } from '@project/libs/components';
import { ArrowBlue } from '@project/libs/assets/images';
import { result, bytes } from './contentDemo';
import { StageProps } from './Stage1';
import styles from '../styles.module.scss';

export const Stage3: React.FC<StageProps> = ({
  goNextStage,
}) => {
  const { t } = useTranslation('main');

  const [short, setShort] = useState(true);

  return (
    <div className={cx(styles.stageX__container)}>
      <h4>
        Input
      </h4>
      <TextInputClient
        label={t('Enter server seed hash')}
        placeholder={t('Server Seed (hash)')}
        className={cx(styles.h44)}
        classNameLabel={cx(styles.stageX__label)}
      />
      <div className={cx(styles.stageX__doubleInput)}>
        <TextInputClient
          label={t('Enter client seed')}
          placeholder={t('Client seed')}
          className={cx(styles.h44)}
          classNameLabel={cx(styles.stageX__label)}
        />
        <TextInputClient
          label={t('Enter nonce')}
          placeholder={t('Nonce')}
          className={cx(styles.h44)}
          classNameLabel={cx(styles.stageX__label)}
        />
      </div>
      <h4>
        Output
      </h4>
      <div className={cx(styles.stageX__doubleInput)}>
        <TextInputClient
          label={t('Server seed hash')}
          placeholder={t('Server Seed (hash)')}
          className={cx(styles.h44)}
          classNameLabel={cx(styles.stageX__label)}
        />
        <TextInputClient
          label={t('Final hash')}
          placeholder={t('Final hash')}
          className={cx(styles.h44)}
          classNameLabel={cx(styles.stageX__label)}
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
