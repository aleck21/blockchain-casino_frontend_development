import { BitcoinColor } from '@project/libs/assets/images'
import { Image } from '@project/libs/components'

export const select = [
  {
    value: 'all',
    text: 'All'
  },
  {
    value: 'bitcoin',
    text: 'BTC'
  },
  {
    value: 'ethereum',
    text: 'ETH'
  }
]

export const table = [
  {
    time: 'Time',
    amount: 'Amount',
    state: 'State',
    transaction: 'Transaction',
  },
  {
    time: '12:08',
    amount: <><Image url={BitcoinColor} /> 21 BTC</>,
    state: 'Pending',
    transaction: '0x238n3rdjdjc2m92385cn9275cn7t8wyrn8c9nq89r83yx837',
  },
  {
    time: '12:08',
    amount: <><Image url={BitcoinColor} /> 21 BTC</>,
    state: 'Rejected',
    transaction: '0x238n3rdjdjc2m92385cn9275cn7t8wyrn8c9nq89r83yx837',
  },
  {
    time: '12:08',
    amount: <><Image url={BitcoinColor} /> 21 BTC</>,
    state: 'Comfirmed',
    transaction: '0x238n3rdjdjc2m92385cn9275cn7t8wyrn8c9nq89r83yx837',
  },
  {
    time: '12:08',
    amount: <><Image url={BitcoinColor} /> 21 BTC</>,
    state: 'Comfirmed',
    transaction: '0x238n3rdjdjc2m92385cn9275cn7t8wyrn8c9nq89r83yx837',
  },
  {
    time: '12:08',
    amount: <><Image url={BitcoinColor} /> 21 BTC</>,
    state: 'Rejected',
    transaction: '0x238n3rdjdjc2m92385cn9275cn7t8wyrn8c9nq89r83yx837',
  },
]

