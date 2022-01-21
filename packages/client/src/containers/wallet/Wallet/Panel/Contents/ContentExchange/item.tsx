import React from 'react';
import cx from 'classnames';
import { Image, Text } from '@project/libs/components';
import styles from './styles.module.scss';

type ItemProps = {
  logo: string;
  name: string;
  shortName: string;
  key: number | string;
};

export const SelectItem: React.FC<ItemProps> = ({
  logo,
  name,
  shortName,
  key,
}) => (
  <div
    className={cx(styles.coin__container)}
    key={`item_coins_${key}`}
  >
    <Image url={logo} />
    <Text
      type="p"
      className={cx(styles.coin__name)}
    >
      {name}
    </Text>
    <Text
      type="p"
      className={cx(styles.coin__name, styles.coin__shortName)}
    >
      {shortName}
    </Text>
  </div>
);
