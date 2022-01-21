import React from 'react';
import { useTranslation } from '@project/libs/utils/i18n';
import cx from 'classnames';
import { Text, Image } from '@project/libs/components';
import styles from './styles.module.scss';

type ItemProps = {
  isActive: boolean;
  title: string;
  icon: string;
};

export const TabItemMobile: React.FC<ItemProps> = ({
  isActive,
  title,
  icon,
}) => {
  const { t } = useTranslation('main');

  return (
    <div
      className={cx(styles.item__container,
        isActive ? styles.item_active : styles.item_inactive)}
      onClick={() => {}}
      onKeyPress={() => {}}
      tabIndex={0}
      role="button"
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
