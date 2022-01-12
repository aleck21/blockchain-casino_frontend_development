import { BitcoinColor, BunnyCoinColor, EthereumColor } from '@project/libs/assets/images';
import { Image } from '@project/libs/components';

export const list = [
  {
    id: '01',
    data: 'BTC',
    icon: BitcoinColor,
  },
  {
    id: '02',
    data: 'BGD',
    icon: BunnyCoinColor,
  },
  {
    id: '03',
    data: 'ETH',
    icon: EthereumColor,
  },
];

export const table = [
  {
    game: 'Game',
    date: 'Date & Time',
    bet: 'Best',
    currency: 'Currency',
    profit: 'Profit',
  },
  {
    game: 'Dice-win',
    date: new Date(2021, 9, 14, 21, 9),
    bet: <>
      <Image url={BitcoinColor} />
      {' '}
      1 BTC
         </>,
    currency: '10x',
    profit: <>
      <Image url={BitcoinColor} />
      {' '}
      9 BTC
            </>,
  },
  {
    game: 'Dice-win',
    date: new Date(2021, 9, 14, 21, 15),
    bet: <>
      <Image url={BitcoinColor} />
      {' '}
      1 BTC
         </>,
    currency: '10x',
    profit: <>
      <Image url={BitcoinColor} />
      {' '}
      9 BTC
            </>,
  },
  {
    game: 'Dice-win',
    date: new Date(2021, 10, 14, 21, 9),
    bet: <>
      <Image url={BitcoinColor} />
      {' '}
      1 BTC
         </>,
    currency: '10x',
    profit: <>
      <Image url={BitcoinColor} />
      {' '}
      9 BTC
            </>,
  },
  {
    game: 'Dice-win',
    date: new Date(2021, 9, 15, 21, 9),
    bet: <>
      <Image url={BitcoinColor} />
      {' '}
      1 BTC
         </>,
    currency: '10x',
    profit: <>
      <Image url={BitcoinColor} />
      {' '}
      9 BTC
            </>,
  },
  {
    game: 'Dice-win',
    date: new Date(2021, 9, 17, 21, 9),
    bet: <>
      <Image url={BitcoinColor} />
      {' '}
      1 BTC
         </>,
    currency: '10x',
    profit: <>
      <Image url={BitcoinColor} />
      {' '}
      9 BTC
            </>,
  },
];

export const tableCrash = [
  {
    game: 'Game',
    date: 'Date & Time',
    bet: 'Best',
    currency: 'Currency',
    profit: 'Profit',
  },
  {
    game: 'Crash-win',
    date: new Date(2021, 9, 14, 21, 9),
    bet: <>
      <Image url={BitcoinColor} />
      {' '}
      1 BTC
         </>,
    currency: '10x',
    profit: <>
      <Image url={BitcoinColor} />
      {' '}
      9 BTC
            </>,
  },
  {
    game: 'Crash-win',
    date: new Date(2021, 9, 14, 21, 15),
    bet: <>
      <Image url={BitcoinColor} />
      {' '}
      1 BTC
         </>,
    currency: '10x',
    profit: <>
      <Image url={BitcoinColor} />
      {' '}
      9 BTC
            </>,
  },
  {
    game: 'Crash-win',
    date: new Date(2021, 10, 14, 21, 9),
    bet: <>
      <Image url={BitcoinColor} />
      {' '}
      1 BTC
         </>,
    currency: '10x',
    profit: <>
      <Image url={BitcoinColor} />
      {' '}
      9 BTC
            </>,
  },
  {
    game: 'Crash-win',
    date: new Date(2021, 9, 15, 21, 9),
    bet: <>
      <Image url={BitcoinColor} />
      {' '}
      1 BTC
         </>,
    currency: '10x',
    profit: <>
      <Image url={BitcoinColor} />
      {' '}
      9 BTC
            </>,
  },
  {
    game: 'Crash-win',
    date: new Date(2021, 9, 17, 21, 9),
    bet: <>
      <Image url={BitcoinColor} />
      {' '}
      1 BTC
         </>,
    currency: '10x',
    profit: <>
      <Image url={BitcoinColor} />
      {' '}
      9 BTC
            </>,
  },
];

export const allTable = {
  columns: 5,
  keyPrefix: 'all-bets',
  body: {
    1: {
      type: 'string',
      style: { textAlign: 'left' },
      data: ['game', 'Dice-win', 'Dice-win', 'Dice-win', 'Dice-win', 'Dice-win'],
    },
    2: {
      type: 'date',
      style: '',
      data: [
        'Date & Time',
        new Date(2021, 9, 14, 21, 9),
        new Date(2021, 9, 14, 21, 9),
        new Date(2021, 9, 14, 21, 9),
        new Date(2021, 9, 14, 21, 9),
        new Date(2021, 9, 14, 21, 9),
      ],
    },
    3: {
      type: 'with icon',
      style: '',
      icon: ['', BitcoinColor, BitcoinColor, BitcoinColor, BitcoinColor, BitcoinColor],
      data: ['Bet', '1 BTC', '1 BTC', '1 BTC', '1 BTC', '1 BTC'],
    },
    4: {
      type: 'string',
      style: { color: '#138EFF' },
      data: ['Currency', '10x', '10x', '10x', '10x', '10x'],
    },
    5: {
      type: 'with icon',
      style: '',
      icon: ['', BitcoinColor, BitcoinColor, BitcoinColor, BitcoinColor, BitcoinColor],
      data: ['Profit', '9 BTC', '9 BTC', '9 BTC', '9 BTC', '9 BTC'],
    },
  },
};
