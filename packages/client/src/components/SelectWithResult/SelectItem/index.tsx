import React from 'react';
import cx from 'classnames';
import styles from './styles.module.scss';
import { Image, Text } from '@project/libs/components';

type ItemProps = {
  logo: string;
  name: string;
  shortName: string;
}

export const SelectItem: React.FC<ItemProps> = ({
  logo,
  name,
  shortName
}) => {
  return(
    <div className={cx(styles.coin__container)}>
      <Image url={logo} />
      <Text type='p' className={cx(styles.coin__name)}>
        {name}
      </Text>
      <Text
        type='p'
        className={cx(styles.coin__name, styles.coin__shortName)}
      >
        {shortName}
      </Text>
    </div>
  );
}