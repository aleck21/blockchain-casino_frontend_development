import React, { useState } from 'react';
import cx from 'classnames';
import { useTranslation } from '@project/libs/utils/i18n';
import { Button, TextInput } from '@project/libs/components';
import { ChooseCurrency } from '../ChooseCurrency';
import styles from './styles.module.scss';

const addressDemo = 'c2m19375cn2978r5nvn2975rvneu20dj2c9c48n25m2u5p';

export const WithdrawTab: React.FC = () => {
  const { t } = useTranslation('main');
  const [windraw, setWindraw] = useState('1000');
  const [walletAddress, setWalletAddress] = useState(addressDemo);

  return (
    <div className={cx(styles.withdraw__container)}>
      <ChooseCurrency />
      <form>
        <div className={cx(styles.form_element__box)}>
          <TextInput
            isTextOnly
            classNameInput={cx(styles.form_element__input)}
            value={windraw}
            onChangeValue={setWindraw}
            label={t('How much funds do you want to withdraw?')}
            name="windraw"
          />
        </div>
        <div className={cx(styles.form_element__box)}>
          <TextInput
            name="walletAddress"
            isTextOnly
            classNameInput={cx(styles.form_element__input)}
            value={walletAddress}
            onChangeValue={setWalletAddress}
            label={t('To withdraw funds enter your wallet address in BSC')}
          />
        </div>
        <div className={cx(styles.form_element__box)}>
          <Button
            onClick={() => {}}
            type="submit"
            className={cx(styles.withdraw__button)}
          >
            {t('Withdraw funds')}
          </Button>
        </div>
      </form>
    </div>
  );
};
