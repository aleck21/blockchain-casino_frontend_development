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
import { WidgetContext } from 'context/widget';
import { ModalContext } from 'context/modalOpen';
import { RouteLink } from '@project/client/src/constants';
import styles from './styles.module.scss';

export const Main: FC = () => {
  const { t } = useTranslation('main');
  const isMobile = document.documentElement.clientWidth < 460;

  const { setContentWidget, closeWidget } = useContext(WidgetContext);
  const { openModal, setContentModal } = useContext(ModalContext);

  return (
    <div className={cx(styles.container)}>
      <nav className={cx(styles.nav_top__container)}>

        <NavLink
          to={RouteLink.home}
          exact
          className={cx(styles.nav__item, styles.inactive)}
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
          className={cx(styles.nav__item, styles.inactive)}
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
          className={cx(styles.nav__item, styles.inactive)}
          activeClassName={styles.active}
        >
          <Image url={IconProfile} />
          <Text type="p">{t('Profile')}</Text>
          <Image
            url={ArrowWhite}
            className={cx(styles.arrow)}
          />
        </NavLink>

        <NavLink
          to={RouteLink.notification}
          exact
          className={cx(styles.nav__item, styles.inactive)}
          activeClassName={styles.active}
        >
          <Image url={IconNotification} />
          <Text type="p">{t('Notification')}</Text>
          <Image
            url={ArrowWhite}
            className={cx(styles.arrow)}
          />
        </NavLink>

      </nav>
      <div className={cx(styles.separator)} />
      <nav className={cx(styles.nav_bottom__container)}>
        <NavLink
          to={RouteLink.roulette}
          exact
          className={cx(styles.nav__item, styles.inactive)}
          activeClassName={styles.active}
        >
          <Image url={IconRoulette} />
          <Text type="p">{t('Roulette')}</Text>
          <Image
            url={ArrowWhite}
            className={cx(styles.arrow)}
          />
        </NavLink>
        <NavLink
          to={RouteLink.verification}
          exact
          className={cx(styles.nav__item, styles.inactive)}
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
