import {
  BitcoinColor,
  BunnyCoinColor,
  EthereumColor,
  ShibaInuShibColor,
  TetherUsdtColor
} from '@project/libs/assets/images';

export const content = {
  head: [
    'Currency',
    'Win',
    'Bet',
    'Won',
    'Wagered'
  ],
  body: [
    {
      icon: BitcoinColor,
      currency: 'BTC',
      win: 9,
      bet: 10,
      won: 110,
      wagered: '100.0000'
    },
    {
      icon: TetherUsdtColor,
      currency: 'USDT',
      win: 9,
      bet: 10,
      won: 110,
      wagered: '100.0000'
    },
    {
      icon: EthereumColor,
      currency: 'ETH',
      win: 9,
      bet: 10,
      won: 110,
      wagered: '100.0000'
    },
    {
      icon: ShibaInuShibColor,
      currency: 'SHIB',
      win: 9,
      bet: 10,
      won: 110,
      wagered: '100.0000'
    },
    {
      icon: BunnyCoinColor,
      currency: 'BG',
      win: 9,
      bet: 10,
      won: 110,
      wagered: '100.0000'
    },
    {
      icon: BunnyCoinColor,
      currency: 'BGD',
      win: 9,
      bet: 10,
      won: 110,
      wagered: '100.0000'
    },
  ]
};

export const tiles = {
  wins: {
    title: 'Total Wins',
    count: 99
  },
  bets: {
    title: 'Total Bets',
    count: 100
  },
  won: {
    title: 'Total Won',
    count: 1100,
    currency: 'USD'
  },
  wagered: {
    title: 'Total Wagered',
    count: 1000,
    currency: 'USD'
  }
};

export const list = [
  {
    id: '01',
    data: 'Dice'
  },
  {
    id: '02',
    data: 'Crach'
  }
];