import React, { memo, useContext } from 'react';
import cx from 'classnames';
import { Image, Text } from '@project/libs/components';
import {
  BunnyGameLogoBig,
  BunnyGameLogoSmall,
  IconHome,
  IconNotification,
  IconProfile,
  IconRoulette,
  IconVerification,
  IconWallet,
} from '@project/libs/assets/images';
import { RouteLink, ModalName } from '@project/client/src/constants';
import { MenuContext } from 'context';
import { useTranslation } from '@project/libs/utils/i18n';
import { Footer } from './Footer';
import { NavigationButton } from './NavigationButton';
import styles from './styles.module.scss';

export const Sidebar = memo(() => {
  const { t } = useTranslation('main');
  const { isMenuOpen } = useContext(MenuContext);

  return (
    <aside className={cx(styles.sidebar__container, { [styles.sidebar_mobile_open]: isMenuOpen })}>
      <Image
        url={BunnyGameLogoBig}
        className={cx(styles.sidebar__logo)}
      />
      <Image
        url={BunnyGameLogoSmall}
        className={cx(styles.sidebar__logo__mobile)}
      />
      <section className={cx(styles.sidebar__welcomBlock)}>
        <Text type="h2">
          {t('Welcome to BunnyGame Casino!')}
        </Text>
        <Text type="p">
          {t('Classic-dice-is-a-game-SIDEBAR')}
        </Text>
      </section>
      <nav className={styles.sidebar__main}>
        <section className={cx(styles.nav_top__container)}>
          <NavigationButton
            routerLink={RouteLink.home}
            icon={IconHome}
            title={t('Home')}
            isNotAuthNeeded
          />
          <NavigationButton
            routerLink={RouteLink.wallet}
            icon={IconWallet}
            title={t('Wallet')}
          />
          <NavigationButton
            routerLink={RouteLink.profile}
            icon={IconProfile}
            title={t('Profile')}
          />
          <NavigationButton
            modalName={ModalName.notifications}
            icon={IconNotification}
            title={t('Notifications')}
          />
        </section>
        <div className={cx(styles.separator)} />
        <section className={cx(styles.nav_bottom__container)}>
          <NavigationButton
            modalName={ModalName.roulette}
            icon={IconRoulette}
            title={t('Roulette')}
          />
          <NavigationButton
            routerLink={RouteLink.verification}
            icon={IconVerification}
            title={t('Verification')}
            isNotAuthNeeded
          />
        </section>
      </nav>
      <footer className={styles.sidebar__footer}>
        <Footer />
      </footer>
    </aside>
  );
});
