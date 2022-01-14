import React, { FC, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import cx from 'classnames';
import { Image, Text } from '@project/libs/components';
import {
  ArrowWhite,
  IconHome,
  IconNotification,
  IconProfile,
  IconRoulette,
  IconVerification,
  IconWallet,
} from '@project/libs/assets/images';
import { useTranslation } from '@project/libs/utils/i18n';
import {
  WidgetContext,
  ModalContext,
  MenuContext,
} from 'context';
import { RouteLink } from '@project/client/src/constants';
import styles from './styles.module.scss';

export const Main: FC = () => {
  const { t } = useTranslation('main');
  const isMobile = document.documentElement.clientWidth < 460;

  const { closeWidget } = useContext(WidgetContext);
  const { openModal, setContentModal } = useContext(ModalContext);
  const { isMenuOpen } = useContext(MenuContext);

  const onClickNotification = () => {
    setContentModal('notifications');
    openModal();
    if (isMobile) closeWidget();
  };

  const onClickRoulette = () => {
    setContentModal('roulette');
    openModal();
    if (isMobile) closeWidget();
  };

  return (
    <div className={cx(styles.container)}>
      <nav className={cx(styles.nav_top__container)}>

        <NavLink
          to={RouteLink.home}
          exact
          className={cx(styles.nav__item)}
          activeClassName={styles.active}
        >
          <Image url={IconHome} />
          <Text type="p">{t('Home')}</Text>
          <Image
            url={ArrowWhite}
            className={cx(styles.arrow)}
          />
        </NavLink>

        <NavLink
          to={RouteLink.wallet}
          exact
          className={cx(styles.nav__item)}
          activeClassName={styles.active}
        >
          <Image url={IconWallet} />
          <Text type="p">{t('Wallet')}</Text>
          <Image
            url={ArrowWhite}
            className={cx(styles.arrow)}
          />
        </NavLink>

        <NavLink
          to={RouteLink.profile}
          exact
          className={cx(styles.nav__item)}
          activeClassName={styles.active}
        >
          <Image url={IconProfile} />
          <Text type="p">{t('Profile')}</Text>
          <Image
            url={ArrowWhite}
            className={cx(styles.arrow)}
          />
        </NavLink>

        <section
          className={cx(styles.nav__item)}
          onClick={onClickNotification}
          onKeyPress={undefined}
          role="menuitem"
          tabIndex={0}
        >
          <Image url={IconNotification} />
          <Text type="p">{t('Notification')}</Text>
          <Image
            url={ArrowWhite}
            className={cx(styles.arrow)}
          />
        </section>
      </nav>
      <div className={cx(styles.separator)} />
      <nav className={cx(styles.nav_bottom__container)}>
        <section
          className={cx(styles.nav__item)}
          onClick={onClickRoulette}
          onKeyPress={undefined}
          role="menuitem"
          tabIndex={0}
        >
          <Image url={IconRoulette} />
          <Text type="p">{t('Roulette')}</Text>
          <Image
            url={ArrowWhite}
            className={cx(styles.arrow)}
          />
        </section>
        <NavLink
          to={RouteLink.verification}
          exact
          className={cx(styles.nav__item)}
          activeClassName={styles.active}
        >
          <Image url={IconVerification} />
          <Text type="p">{t('Verification')}</Text>
          <Image
            url={ArrowWhite}
            className={cx(styles.arrow)}
          />
        </NavLink>
      </nav>
    </div>
  );
};
