import { FC } from 'react';
import { Image } from '@project/libs/components';
import { BunnyGameLogoBig, BunnyGameLogoSmall } from '@project/libs/assets/images';
import { Main } from './Main';
import { Footer } from './Footer';
import './styles.scss';
// import { useTranslation } from 'i18n';
// import { useUser } from 'hooks';

export const Sidebar: FC = () =>
// const { t } = useTranslation('main');
// const { isUser } = useUser();
// console.log(isUser);
// console.log(t('Hello'));

  (
    <aside className="sidebar__container">
      <div className="sidebar__logo">
        <Image
          url={BunnyGameLogoBig}
          className="sidebar__logo__image"
        />
      </div>
      <div className="sidebar__logo__mobile">
        <Image
          url={BunnyGameLogoSmall}
          className="sidebar__logo__image"
        />
      </div>
      <nav className="sidebar__main">
        <Main />
      </nav>
      <footer className="sidebar__footer">
        <Footer />
      </footer>
    </aside>
  );
