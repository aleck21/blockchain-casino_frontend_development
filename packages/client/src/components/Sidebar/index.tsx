import { FC } from 'react';
import cx from 'classnames';
import { Main } from './Main';
import { Footer } from './Footer';
import { Image } from '@project/libs/components';
import { BunnyGameLogoBig } from '@project/libs/assets/images';
import { useUser } from 'hooks';
import { useTranslation } from 'i18n';
import styles from './styles.module.scss';

export const Sidebar: FC = () => {
  const { t } = useTranslation('main');
  // const { isUser } = useUser();
  //console.log(isUser);
  //console.log(t('Hello'));

  return (
    <aside className={cx(styles.container)}>
      <div className={cx(styles.sidebar__logo)}>
        <Image
          url={BunnyGameLogoBig}
          className={styles.sidebar__logo__image}
        />
      </div>
      <nav className={cx(styles.sidebar__main)}>
        <Main />
      </nav>
      <footer className={cx(styles.sidebar__footer)}>
        <Footer />
      </footer>
    </aside>
  );
};
