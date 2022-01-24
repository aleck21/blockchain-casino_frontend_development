import React, { memo } from 'react';
import cx from 'classnames';
import { TabLabelDesktop } from './TabLabelDesktop';
import { TabLabelMobile } from './TabLabelMobile';
import styles from './styles.module.scss';

type TabsHeaderProps = {
  chosenTabIndex: number;
  tabLabels: Array<{ title: string, icon: string }>;
  onTabChange: (tabIndex: number) => void;
};

export const TabsLabels = memo<TabsHeaderProps>(({
  chosenTabIndex,
  onTabChange,
  tabLabels,
}) => (
  <>
    <div className={cx(styles.tabs_desktop__container)}>
      {tabLabels.map(({ title }, index) => (
        <TabLabelDesktop
          key={title}
          title={title}
          tabIndex={index}
          chosenTabIndex={chosenTabIndex}
          onTabChange={onTabChange}
        />
      ))}
    </div>
    <div className={cx(styles.tabs__container__mobile)}>
      {tabLabels.map(({ title, icon }, index) => (
        <TabLabelMobile
          key={title}
          title={title}
          tabIndex={index}
          icon={icon}
          chosenTabIndex={chosenTabIndex}
          onTabChange={onTabChange}
        />
      ))}
    </div>
  </>
));
