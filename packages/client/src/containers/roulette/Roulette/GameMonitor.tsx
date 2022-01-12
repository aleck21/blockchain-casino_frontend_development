import React from 'react';
import cx from 'classnames';
import {
  BinaceCoinColor,
  BitcoinColor,
  BunnyCoinColor,
  EthereumColor,
  ShibaInuShibColor,
} from '@project/libs/assets/images';
import { Image, Text } from '@project/libs/components';
import styles from './styles.module.scss';

type UserProps = {
  id: string;
  userName: string;
  currency: string;
  currencyCount: number;
};

type GameMonitorProps = {
  content: UserProps[];
  index: number;
};

const currencyImages: Record<string, string> = {
  BNB: BinaceCoinColor,
  SHIB: ShibaInuShibColor,
  ETH: EthereumColor,
  BTC: BitcoinColor,
  BGD: BunnyCoinColor,
};

const UserItem: React.FC<UserProps> = ({
  id,
  userName,
  currency,
  currencyCount,
}) => (
  <div
    className={cx(styles.user__box)}
    key={id}
  >
    <Text type="p">
      {userName}
    </Text>
    <Image url={currencyImages[currency]} />
    <Text
      type="p"
      className={cx(styles.user__currencyCount)}
    >
      {currencyCount}
    </Text>
  </div>
);

export const GameMonitor: React.FC<GameMonitorProps> = React.memo(({
  content,
  index,
}) => {
  const left = index * 70;

  return (
    <div
      style={{ left: -left }}
      className={cx(styles.users__container)}
    >
      {content.map((user) => (
        <UserItem {...user} />
      ))}
    </div>
  );
});
