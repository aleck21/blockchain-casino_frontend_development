import React, { useCallback } from 'react';
import { useTranslation } from '@project/libs/utils/i18n';
import cx from 'classnames';
import { Text, Image } from '@project/libs/components';
import styles from './styles.module.scss';

type ItemProps = {
  title: string;
  chosenTabIndex: number;
  tabIndex: number;
  onTabChange: (tabIndex: number) => void;
  icon: string;
};

export const TabLabelMobile: React.FC<ItemProps> = ({
  title,
  chosenTabIndex,
  tabIndex,
  icon,
  onTabChange,
}) => {
  const { t } = useTranslation('main');

  const isActive = chosenTabIndex === tabIndex;

  const onTabClick = useCallback(() => {
    onTabChange(tabIndex);
  }, [tabIndex, onTabChange]);

  return (
    <div
      className={cx(styles.item__container,
        isActive ? styles.item_active : styles.item_inactive)}
      onClick={onTabClick}
      onKeyPress={undefined}
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
