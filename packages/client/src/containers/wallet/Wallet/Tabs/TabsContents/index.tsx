import React, { memo } from 'react';
import cx from 'classnames';
import styles from './styles.module.scss';

type TabsContentsProps = {
  tabsContents: Array<JSX.Element>;
  chosenTabIndex: number;
};

export const TabsContents = memo<TabsContentsProps>(({
  chosenTabIndex,
  tabsContents,
}) => (
  <div className={cx(styles.tabs__container)}>
    {tabsContents.map((tabContent, index) => {
      if (chosenTabIndex === index) {
        return tabContent;
      } return null;
    })}
  </div>
));
