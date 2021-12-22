import React from 'react';
import { useTranslation } from '@project/libs/utils/i18n';
import cx from 'classnames';
import styles from './styles.module.scss';
import { Text, Image } from '@project/libs/components';

type ItemProps = {
  isActive: boolean;
  title: string;
  icon: string;
  onClick: CallableFunction;
};

export const TabItemMobile: React.FC<ItemProps> = ({
  isActive,
  title,
  icon,
  onClick
}) => {
  const { t } = useTranslation('main');
  
  const onChange = () => {
    onClick();
  }

  return (
    <div
      className={cx(styles.item__container,
        isActive ? styles.item_active : styles.item_inactive
      )}
      onClick={onChange}
    >
      <Image url={icon} />
      <Text type='h6' className={cx(styles.item__title)}>
        {t(title)}
      </Text>
    </div>
  );
}