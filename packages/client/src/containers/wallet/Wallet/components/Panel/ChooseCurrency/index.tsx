import React from 'react';
import { useTranslation } from '@project/libs/utils/i18n';
import cx from 'classnames';
import { Text } from '@project/libs/components';
import { SelectWithResult } from 'components/SelectWithResult';
import { SelectItem } from 'components/SelectWithResult/SelectItem';
import { BinaceCoinColor, BitcoinColor, EthereumColor } from '@project/libs/assets/images';
import styles from './styles.module.scss';

export const ChooseCurrency: React.FC = () => {
  const { t } = useTranslation('main');

  const dataDemo = [
    {
      id: 'bnb',
      logo: BinaceCoinColor,
      shortName: 'BNB',
      name: 'Binance Coin',
      balance: '34,382.0052',
    },
    {
      id: 'btc',
      logo: BitcoinColor,
      shortName: 'BTC',
      name: 'Bitcoin',
      balance: '34,382.0053',
    },
    {
      id: 'eth',
      logo: EthereumColor,
      shortName: 'ETH',
      name: 'Ethereum',
      balance: '34,382.0054',
    },
  ];

  const list = dataDemo.map((item) => ({
    element: (
      <SelectItem
        {...item}
        key={item.id}
      />
    ),
    result: item.balance,
    id: item.id,
  }));

  return (
    <>
      <div className={cx(styles.choose__title)}>
        <Text
          type="p"
          className={cx(styles.choose__title__text)}
        >
          {t('Choose currency that you want to deposit')}
        </Text>
      </div>
      <SelectWithResult list={list} />
    </>
  );
};
