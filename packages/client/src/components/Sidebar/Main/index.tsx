import React, {
  FC,
  useCallback,
  useContext,
  useMemo,
} from 'react';
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
import { WidgetContext, ModalContext, MenuContext } from 'context';
import { RouteLink } from '@project/client/src/constants';
import styles from './styles.module.scss';

export const Main: FC = () => {
  const { t } = useTranslation('main');
  const isMobile = document.documentElement.clientWidth < 460;

  const { closeWidget } = useContext(WidgetContext);
  const { openModal, setContentModal, closeModal } = useContext(ModalContext);
  const { closeMenu } = useContext(MenuContext);

  const onClickNotification = useCallback(() => {
    setContentModal('notifications');
    openModal();
    closeMenu();
    if (isMobile) closeWidget();
  }, [closeMenu, closeWidget, isMobile, openModal, setContentModal]);

  const onClickRoulette = useCallback(() => {
    setContentModal('roulette');
    openModal();
    closeMenu();
    if (isMobile) closeWidget();
  }, [closeMenu, closeWidget, isMobile, openModal, setContentModal]);

  const closeModalAndMenu = useCallback(() => {
    closeModal();
    closeMenu();
  }, [closeMenu, closeModal]);

  const navLinkCommonProps = useMemo(() => ({
    exact: true,
    className: cx(styles.nav__item),
    activeClassName: styles.active,
    onClick: closeModalAndMenu,
  }), [closeModalAndMenu]);

  return (
    <div className={cx(styles.container)}>
      <nav className={cx(styles.nav_top__container)}>

        <NavLink
          to={RouteLink.home}
          {...navLinkCommonProps}
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
          {...navLinkCommonProps}
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
          {...navLinkCommonProps}
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
          {...navLinkCommonProps}
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
