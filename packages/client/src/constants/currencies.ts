import {
  BinaceCoinColorIcon,
  BitCoinCashColorIcon,
  BitcoinColorIcon,
  BunnyCoinColorIcon,
  EthereumColorIcon,
  LiteCoinColorIcon,
  ShibaInuShibColorIcon,
  TetherUsdtColorIcon,
  XrpColorIcon,
} from '@project/libs/assets/images';

export const CurrencyColorIcons: Record<string, string> = {
  BTC: BitcoinColorIcon,
  ETH: EthereumColorIcon,
  USDT: TetherUsdtColorIcon,
  BGD: BunnyCoinColorIcon,
  BG: BunnyCoinColorIcon,
  SHIB: ShibaInuShibColorIcon,
  BNB: BinaceCoinColorIcon,
  LTC: LiteCoinColorIcon,
  XRP: XrpColorIcon,
  BCH: BitCoinCashColorIcon,
};

export const CurrenciesName: Record<string, string> = {
  BTC: 'Bitcoin',
  BNB: 'Binance Coin',
  ETH: 'Ethereum',
  USDT: 'Tether',
  LTC: 'Litecoin',
  BCH: 'Bitcoin Cash',
  XRP: 'XRP',
  SHIB: 'Shiba Inu',
};
