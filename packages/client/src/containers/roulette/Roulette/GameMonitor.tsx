import React, { memo } from 'react';
import cx from 'classnames';
import {
  BinaceCoinColorIcon,
  BitcoinColorIcon,
  BunnyCoinColorIcon,
  EthereumColorIcon,
  ShibaInuShibColorIcon,
} from '@project/libs/assets/images';
import { Image, Text } from '@project/libs/components';
import styles from './styles.module.scss';

type User = {
  id: string;
  userName: string;
  currency: string;
  currencyCount: number;
};

type GameMonitorProps = {
  userItems: User[];
  index: number;
};

const currencyImages: Record<string, string> = {
  BNB: BinaceCoinColorIcon,
  SHIB: ShibaInuShibColorIcon,
  ETH: EthereumColorIcon,
  BTC: BitcoinColorIcon,
  BGD: BunnyCoinColorIcon,
};

const UserItem: React.FC<User> = ({
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
        <UserItem
          id={user.id}
          userName={user.userName}
          currencyCount={user.currencyCount}
          currency={user.currency}
        />
      ))}
    </div>
  );
});
