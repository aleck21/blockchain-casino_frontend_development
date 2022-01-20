import React, { memo, useContext } from 'react';
import cx from 'classnames';
import { Image, Text } from '@project/libs/components';
import { BunnyGameLogoBig, BunnyGameLogoSmall } from '@project/libs/assets/images';
import { MenuContext } from 'context';
import { useTranslation } from '@project/libs/utils/i18n';
import { Footer } from './Footer';
import styles from './styles.module.scss';
import { NavigationButton } from './NavigationButton';
// import { useUser } from 'hooks';

export const Sidebar = memo(() => {
// const { isUser } = useUser();
  const isUser = true;
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
            name="home"
            isUser={isUser}
          />
          <NavigationButton
            name="wallet"
            isUser={isUser}
          />
          <NavigationButton
            name="profile"
            isUser={isUser}
          />
          <NavigationButton
            name="notifications"
            isUser={isUser}
            isModal
          />
        </section>
        {isUser && <div className={cx(styles.separator)} />}
        <section className={cx(styles.nav_bottom__container)}>
          <NavigationButton
            name="roulette"
            isUser={isUser}
            isModal
          />
          <NavigationButton
            name="verification"
            isUser={isUser}
          />
        </section>
      </nav>
      <footer className={styles.sidebar__footer}>
        <Footer />
      </footer>
    </aside>
  );
});
