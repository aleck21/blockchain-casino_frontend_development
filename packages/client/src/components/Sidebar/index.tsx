import React, { FC } from 'react';
import { Image } from '@project/libs/components';
import { BunnyGameLogoBig, BunnyGameLogoSmall } from '@project/libs/assets/images';
import { Main } from './Main';
import { Footer } from './Footer';
import styles from './styles.module.scss';
// import { useUser } from 'hooks';

export const Sidebar: FC = () =>
// const { isUser } = useUser();

  (
    <aside className={styles.sidebar__container}>
      <div className={styles.sidebar__logo}>
        <Image
          url={BunnyGameLogoBig}
          className={styles.sidebar__logo__image}
        />
      </div>
      <div className={styles.sidebar__logo__mobile}>
        <Image
          url={BunnyGameLogoSmall}
          className={styles.sidebar__logo__image}
        />
      </div>
      <nav className={styles.sidebar__main}>
        <Main />
      </nav>
      <footer className={styles.sidebar__footer}>
        <Footer />
      </footer>
    </aside>
  );
