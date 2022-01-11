import React from 'react';
import { BitcoinColor, EthereumColor } from '@project/libs/assets/images';
import { SelectItem } from 'components/SelectWithResult/SelectItem';

const listDemo = [
  {
    id: 'btc',
    logo: BitcoinColor,
    name: 'Bitcoin',
    shortName: 'BTC',
    balance: 34382.0052,
  },
  {
    id: 'eth',
    logo: EthereumColor,
    name: 'Ethereum',
    shortName: 'ETH',
    balance: 1382.0052,
  },
];

const listDemo2 = [
  {
    id: 'eth',
    logo: EthereumColor,
    name: 'Ethereum',
    shortName: 'ETH',
    balance: 1382.0052,
  },
];

export const list = listDemo.map((item) => ({
  element: (
    <SelectItem
      {...item}
      key={item.id}
    />
  ),
  result: item.balance,
  id: item.id,
}));

export const list2 = listDemo2.map((item) => ({
  element: (
    <SelectItem
      {...item}
      key={item.id}
    />
  ),
  result: item.balance,
  id: item.id,
}));
