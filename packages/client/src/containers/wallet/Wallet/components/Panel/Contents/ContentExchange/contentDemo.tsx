import { BitcoinColor, EthereumColor } from '@project/libs/assets/images';
import { SelectItem } from 'components/SelectWithResult/SelectItem';

const listDemo = [
  {
    logo: BitcoinColor,
    name: 'Bitcoin',
    shortName: 'BTC',
    balance: 34382.0052
  },
  {
    logo: EthereumColor,
    name: 'Ethereum',
    shortName: 'ETH',
    balance: 1382.0052
  }
];

const listDemo2 = [
  {
    logo: EthereumColor,
    name: 'Ethereum',
    shortName: 'ETH',
    balance: 1382.0052
  }
];

export const list = listDemo.map((item, key) => {
  return {
    element: (
      <SelectItem {...item} key={key} />
    ),
    result: item.balance
  }
});

export const list2 = listDemo2.map((item, key) => {
  return {
    element: (
      <SelectItem {...item} key={key} />
    ),
    result: item.balance
  }
});