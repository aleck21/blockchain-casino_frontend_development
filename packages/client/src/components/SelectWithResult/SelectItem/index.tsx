import React from 'react';
import cx from 'classnames';
import { Image, Text } from '@project/libs/components';
import styles from './styles.module.scss';

type ItemProps = {
  logo: string;
  name: string;
  shortName: string;
};

export const SelectItem: React.FC<ItemProps> = ({
  logo,
  name,
  shortName,
}) => (
  <div className={cx(styles.coin__container)}>
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
