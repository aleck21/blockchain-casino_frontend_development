import React, { useState } from 'react';
import cx from 'classnames';
import styles from '../styles.module.scss';
import { StageProps } from './Stage1';
import { TextInput } from 'components/TextInput';
import { useTranslation } from '@project/libs/utils/i18n';
import { result, bytes } from './contentDemo';
import { Image } from '@project/libs/components';
import { ArrowBlue } from '@project/libs/assets/images';

export const Stage3: React.FC<StageProps> = ({
  goNextStage,
}) => {
  const { t } = useTranslation('main');

  const [short, setShort] = useState(true);
  
  return(
    <div className={cx(styles.stageX__container)}>
      <h4>
        Input
      </h4>
      <TextInput
        label={t('Enter server seed hash')}
        placeholder={t('Server Seed (hash)')}
        className={cx(styles.h44)}
        classNameLabel={cx(styles.stageX__label)}
      />
      <div className={cx(styles.stageX__doubleInput)}>
        <TextInput
          label={t('Enter client seed')}
          placeholder={t('Client seed')}
          className={cx(styles.h44)}
          classNameLabel={cx(styles.stageX__label)}
        />
        <TextInput
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
        <TextInput
          label={t('Server seed hash')}
          placeholder={t('Server Seed (hash)')}
          className={cx(styles.h44)}
          classNameLabel={cx(styles.stageX__label)}
        />
        <TextInput
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
        <h4 className={cx(styles.left)} onClick={() => goNextStage()}>Results</h4>
        <div className={cx(styles.result__table__container)}>
          <table>
            <thead>
              <tr>
                {result.map((th, key) => (
                  <th key={`result_th_${key}`}>
                    {th.title}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                {result.map((td, key) => (
                  <td key={`result_td_${key}`}>
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
          >
            Bytes to number
            <Image url={ArrowBlue} className={cx(
              short ? styles.arrow__toRight : styles.arrow__toDown
            )} />
          </span>
          <span className={cx(styles.bytes__text)}>
            {short
              ? bytes.short
              : <>{bytes.details[0]}<br/>{bytes.details[1]}</>
            }
          </span>
        </div>
      </footer>
    </div>
  );
}