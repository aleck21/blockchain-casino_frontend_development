import React, { useContext } from 'react';
import { useTranslation } from '@project/libs/utils/i18n';
import cx from 'classnames';
import { Text, Image } from '@project/libs/components';
import { WalletTabsContext } from 'context/walletTabs';
import styles from './styles.module.scss';

type ItemProps = {
  isActive: boolean;
  title: string;
  icon: string;
  tab: any;
};

export const TabItemMobile: React.FC<ItemProps> = ({
  isActive,
  title,
  icon,
  tab,
}) => {
  const { t } = useTranslation('main');

  const {
    onDeposit,
    onWithdraw,
    onRakeback,
    onExchange,
  } = useContext(WalletTabsContext);

  const type: any = {
    deposit: onDeposit,
    withdraw: onWithdraw,
    rakeback: onRakeback,
    exchange: onExchange,
  };

  return (
    <div
      className={cx(styles.item__container,
        isActive ? styles.item_active : styles.item_inactive)}
      onClick={type[tab]}
    >
      <Image url={icon} />
      <Text
        type="h6"
        className={cx(styles.item__title)}
      >
        {t(title)}
      </Text>
    </div>
  );
};
