import React from 'react';
import { useTranslation } from '@project/libs/utils/i18n';
import cx from 'classnames';
import styles from './styles.module.scss';
import { Text } from '@project/libs/components';
import { SelectWithResult } from 'components/SelectWithResult';
import { SelectItem } from 'components/SelectWithResult/SelectItem';
import { BinaceCoinColor, BitcoinColor, EthereumColor } from '@project/libs/assets/images';

export const ChooseCurrency: React.FC = () => {
  const { t } = useTranslation('main');
  
  const dataDemo = [
    {
      logo: BinaceCoinColor,
      shortName: 'BNB',
      name: 'Binance Coin',
      balance: '34,382.0052'
    },
    {
      logo: BitcoinColor,
      shortName: 'BTC',
      name: 'Bitcoin',
      balance: '34,382.0053'
    },
    {
      logo: EthereumColor,
      shortName: 'ETH',
      name: 'Ethereum',
      balance: '34,382.0054'
    },
  ];

  const list = dataDemo.map((item, key) => {
    return {
      element: (
        <SelectItem {...item} key={key} />
      ),
      result: item.balance
    }
  });

  return (
    <>
      <div className={cx(styles.choose__title)}>
        <Text type='p' className={cx(styles.choose__title__text)}>
          {t('Choose currency that you want to deposit')}
        </Text>
      </div>
      <SelectWithResult list={list} />
    </>
  );
};