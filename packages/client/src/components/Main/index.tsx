import { FC, useContext } from 'react';
import cx from 'classnames';
import { ModalContext } from 'context/modalOpen';
import { NavigationContext } from 'context/navigation';
import { HomeDemo, Verification, Wallet } from 'containers';
import { Profile } from 'containers/profile';
import styles from './styles.module.scss';

export const Main: FC = ({ children }) => {
  const { modal } = useContext(ModalContext);
  const { menuItem } = useContext(NavigationContext);

  return (
    <main className={cx(styles.container)}>
      <div className={cx(modal ? styles.on_blur : styles.no_blur)}>
        {menuItem.home && <HomeDemo />}
        {menuItem.wallet && <Wallet />}
        {menuItem.profile && <Profile />}
        {/*
        {menuItem.notification && <Notification />}
        {menuItem.roulette && <Roulette />}
        */}
        {menuItem.verification && <Verification />}
      </div>
    </main>
  );
};
