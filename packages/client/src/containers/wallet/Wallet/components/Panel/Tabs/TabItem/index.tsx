import React from 'react';
import { useTranslation } from '@project/libs/utils/i18n';
import cx from 'classnames';
import styles from './styles.module.scss';
import { Text } from '@project/libs/components';

type ItemProps = {
  isActive: boolean;
  title: string;
  onClick: CallableFunction;
};

export const TabItem: React.FC<ItemProps> = ({isActive, title, onClick}) => {
  const { t } = useTranslation('main');
  
  const onChange = () => {
    onClick();
  }

  return (
    <div
      className={cx(isActive ? styles.item_active : styles.item_inactive)} onClick={onChange}
    >
      <Text type='h6' className={cx(styles.item__title)}>
        {t(title)}
      </Text>
    </div>
  );
}