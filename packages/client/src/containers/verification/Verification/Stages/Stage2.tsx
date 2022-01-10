import React from 'react';
import cx from 'classnames';
import { TextInput } from 'components/TextInput';
import { useTranslation } from '@project/libs/utils/i18n';
import { ButtonWithContent as Button } from '@project/libs/components/inputs/ButtonWithContent';
import { StageProps } from './Stage1';
import styles from '../styles.module.scss';

export const Stage2: React.FC<StageProps> = ({
  goNextStage,
}) => {
  const { t } = useTranslation('main');

  return (
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
      <p>
        You can get BGD through deposit bonus and other activities.
        You can also directly exchange other currencies into the available
        balance of BCD through the BCSwap function in the wallet. You can get
        BGD through deposit bonus and other activities. You can also directly
        exchange other currencies into the available balance of BCD through the
        BCSwap function in the wallet.You can get BGD through deposit bonus and
        other activities. You can also directly exchange other currencies into
        the available balance of BCD through the BCSwap function in the wallet.
        You can get BGD through deposit bonus and other activities. You can
        also directly exchange other currencies into the available balance of
        BCD through the BCSwap function in the wallet.
      </p>
      <footer className={cx(styles.verification__footer)}>
        <Button
          text={t('Validate')}
          onClick={goNextStage}
        />
      </footer>
    </div>
  );
};
