import React, { useCallback } from 'react';
import { useTranslation } from '@project/libs/utils/i18n';
import cx from 'classnames';
import { Text } from '@project/libs/components';
import styles from './styles.module.scss';

type TabNameItemProps = {
  title: string;
  chosenTabIndex: number;
  tabIndex: number;
  onTabChange: (tabIndex: number) => void;
};

export const TabNameItem: React.FC<TabNameItemProps> = ({
  title,
  chosenTabIndex,
  tabIndex,
  onTabChange,
}) => {
  const { t } = useTranslation('main');

  const isActive = chosenTabIndex === tabIndex;

  const onTabClick = useCallback(() => {
    onTabChange(tabIndex);
  }, [tabIndex, onTabChange]);

  return (
    <div
      className={cx(isActive ? styles.item_active : styles.item_inactive)}
      onClick={onTabClick}
      onKeyPress={undefined}
      tabIndex={0}
      role="button"
    >
      <Text
        type="h6"
        className={cx(styles.item__title)}
      >
        {t(title)}
      </Text>
    </div>
  );
};
