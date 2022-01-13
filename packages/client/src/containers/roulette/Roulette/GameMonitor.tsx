import React, { memo } from 'react';
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

type User = {
  id: string;
  userName: string;
  currency: string;
  currencyCount: number;
};

type UserProps = {
  user: User;
};

type GameMonitorProps = {
  userItems: User[];
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
  user,
}) => (
  <div
    className={cx(styles.user__box)}
    key={user.id}
  >
    <Text type="p">
      {user.userName}
    </Text>
    <Image url={currencyImages[user.currency]} />
    <Text
      type="p"
      className={cx(styles.user__currencyCount)}
    >
      {user.currencyCount}
    </Text>
  </div>
);

export const GameMonitor = memo(({
  userItems,
  index,
}: GameMonitorProps) => {
  const left = index * 70;

  return (
    <div
      style={{ left: -left }}
      className={cx(styles.users__container)}
    >
      {userItems.map((user) => (
        <UserItem user={user} />
      ))}
    </div>
  );
});
