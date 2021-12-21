import React from 'react';
import cx from 'classnames';
import styles from './styles.module.scss';
import { ChooseCurrency } from '../../ChooseCurrency';
import { TextInput } from 'components/TextInput';
import { useTranslation } from '@project/libs/utils/i18n';
import { Button } from 'components/Button';

export const ContentWithdraw: React.FC = () => {
  const { t } = useTranslation('main');

  return(
    <div className={cx(styles.withdraw__container)}>
      <ChooseCurrency />
      <form >
        <TextInput 
          name='withdraw'
          label={t('How much funds do you want to withdraw?')}
          defaultValue='1000'
        />
        <TextInput
          name='walletAddress'
          label={t('To withdraw funds enter your wallet address in BSC')}
          defaultValue='c2m19375...25dh2m2u5p'
        />
        <Button
          disabled={false}
          onClick={() => {}}
          text={t('Withdraw funds')}
          type='submit'
          className={cx(styles.withdraw__button)}
        />
      </form>
    </div>
  );
}