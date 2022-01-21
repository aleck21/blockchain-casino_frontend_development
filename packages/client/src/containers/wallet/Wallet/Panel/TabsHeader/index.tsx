import React, { memo } from 'react';
import cx from 'classnames';
import styles from './styles.module.scss';
import { TabNameItem } from './TabItem';

type TabsHeaderProps = {
  chosenTabIndex: number;
  tabTitles: Array<string>;
  onTabChange: (tabIndex: number) => void;
};

export const TabsHeader = memo<TabsHeaderProps>(({
  chosenTabIndex,
  onTabChange,
  tabTitles,
}) => (
  <nav className={cx(styles.tabs__container)}>
    {tabTitles.map((tabTitle, index) => (
      <TabNameItem
        key={tabTitle}
        title={tabTitle}
        tabIndex={index}
        chosenTabIndex={chosenTabIndex}
        onTabChange={onTabChange}
      />
    ))}
  </nav>
));
