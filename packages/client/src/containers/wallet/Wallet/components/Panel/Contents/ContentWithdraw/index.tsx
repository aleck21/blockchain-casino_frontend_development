import React from 'react';
import cx from 'classnames';
import { TextInput } from 'components/TextInput';
import { useTranslation } from '@project/libs/utils/i18n';
import { Button } from '@project/libs/components';
import { croppingText } from 'utils/croppingText';
import { ChooseCurrency } from '../../ChooseCurrency';
import styles from './styles.module.scss';

const addressDemo = 'c2m19375cn2978r5nvn2975rvneu20dj2c9c48n25m2u5p';

export const ContentWithdraw: React.FC = () => {
  const { t } = useTranslation('main');
  const isMobile = document.documentElement.clientWidth < 460;

  return (
    <div className={cx(styles.withdraw__container)}>
      <ChooseCurrency />
      <form>
        <div className={cx(styles.form_element__box)}>
          <TextInput
            name="withdraw"
            label={t('How much funds do you want to withdraw?')}
            defaultValue="1000"
          />
        </div>
        <div className={cx(styles.form_element__box)}>
          <TextInput
            name="walletAddress"
            label={t('To withdraw funds enter your wallet address in BSC')}
            defaultValue={
              isMobile ? croppingText(addressDemo, 24) : addressDemo
            }
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
