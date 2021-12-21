import React from 'react';
import { useTranslation } from '@project/libs/utils/i18n';
import cx from 'classnames';
import styles from './styles.module.scss';
import { Text } from '@project/libs/components';
import { Select } from './Select';
import { BinaceCoinColor, BitcoinColor, EthereumColor } from '@project/libs/assets/images';

export const ChooseCurrency: React.FC = () => {
  const { t } = useTranslation('main');
  
  const dataDemo = [
    {
      icon: BinaceCoinColor,
      type: 'BNB',
      name: 'Binance Coin',
      balance: '34,382.0052'
    },
    {
      icon: BitcoinColor,
      type: 'BTC',
      name: 'Bitcoin',
      balance: '34,382.0053'
    },
    {
      icon: EthereumColor,
      type: 'ETH',
      name: 'Ethereum',
      balance: '34,382.0054'
    },
  ];

  return (
    <>
      <div className={cx(styles.choose__title)}>
        <Text type='p' className={cx(styles.choose__title__text)}>
          {t('Choose currency that you want to deposit')}
        </Text>
      </div>
      <Select data={dataDemo} />
    </>
  );
};