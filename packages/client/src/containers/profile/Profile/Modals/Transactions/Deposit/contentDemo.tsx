import React from 'react';
import { BitcoinColorIcon } from '@project/libs/assets/images';
import { Image } from '@project/libs/components';

export const select = [
  {
    id: 'all',
    value: 'all',
    text: 'All',
  },
  {
    id: 'bitcoin',
    value: 'bitcoin',
    text: 'BTC',
  },
  {
    id: 'ethereum',
    value: 'ethereum',
    text: 'ETH',
  },
];

export const table = [
  {
    id: '1',
    time: 'Time',
    amount: 'Amount',
    state: 'State',
    transaction: 'Transaction',
  },
  {
    id: '2',
    time: '12:08',
    amount: (
      <>
        <Image url={BitcoinColorIcon} />
        {' '}
        21 BTC
      </>
    ),
    state: 'Pending',
    transaction: '0x238n3rdjdjc2m92385cn9275cn7t8wyrn8c9nq89r83yx837',
  },
  {
    id: '3',
    time: '12:08',
    amount: (
      <>
        <Image url={BitcoinColorIcon} />
        {' '}
        21 BTC
      </>
    ),
    state: 'Rejected',
    transaction: '0x238n3rdjdjc2m92385cn9275cn7t8wyrn8c9nq89r83yx837',
  },
  {
    id: '4',
    time: '12:08',
    amount: (
      <>
        <Image url={BitcoinColorIcon} />
        {' '}
        21 BTC
      </>
    ),
    state: 'Comfirmed',
    transaction: '0x238n3rdjdjc2m92385cn9275cn7t8wyrn8c9nq89r83yx837',
  },
  {
    id: '5',
    time: '12:08',
    amount: (
      <>
        <Image url={BitcoinColorIcon} />
        {' '}
        21 BTC
      </>
    ),
    state: 'Comfirmed',
    transaction: '0x238n3rdjdjc2m92385cn9275cn7t8wyrn8c9nq89r83yx837',
  },
  {
    id: '6',
    time: '12:08',
    amount: (
      <>
        <Image url={BitcoinColorIcon} />
        {' '}
        21 BTC
      </>
    ),
    state: 'Rejected',
    transaction: '0x238n3rdjdjc2m92385cn9275cn7t8wyrn8c9nq89r83yx837',
  },
];
