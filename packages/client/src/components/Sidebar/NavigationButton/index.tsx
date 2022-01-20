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
import { useMobile } from 'hooks';
import { WidgetContext, ModalContext, MenuContext } from 'context';
import { RouteLink } from '@project/client/src/constants';
import styles from './styles.module.scss';

type NavigationButtonProps = {
  name: string;
  isUser: boolean;
  isModal?: boolean;
};

export const NavigationButton: FC<NavigationButtonProps> = ({
  name,
  isUser,
  isModal = false,
}) => {
  const { t } = useTranslation('main');
  const isMobile = useMobile();

  const { closeWidget } = useContext(WidgetContext);
  const { openModal, setContentModal, closeModal } = useContext(ModalContext);
  const { closeMenu } = useContext(MenuContext);

  const routerLinks: Record<string, string> = {
    home: RouteLink.home,
    wallet: RouteLink.wallet,
    profile: RouteLink.profile,
    verification: RouteLink.verification,
  };

  const menuItemsIsNotUser: Record<string, boolean> = {
    home: true,
    wallet: false,
    profile: false,
    notifications: false,
    roulette: false,
    verification: true,
  };

  const namesLinks: Record<string, string> = {
    home: t('Home'),
    wallet: t('Wallet'),
    profile: t('Profile'),
    notifications: t('Notifications'),
    roulette: t('Roulette'),
    verification: t('Verification'),
  };

  const onClickIsModal = useCallback((contentModal: string) => {
    setContentModal(contentModal);
    openModal();
    closeMenu();
    if (isMobile) closeWidget();
  }, [closeMenu, closeWidget, isMobile, openModal, setContentModal]);

  const menuIcons: Record<string, string> = {
    home: IconHome,
    wallet: IconWallet,
    profile: IconProfile,
    notifications: IconNotification,
    roulette: IconRoulette,
    verification: IconVerification,
  };

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

  if (!isUser && !menuItemsIsNotUser[name]) return (<div className={cx(styles.no_visible)} />);
  if (isModal) {
    return (
      <section
        className={cx(styles.nav__item)}
        onClick={() => onClickIsModal(name)}
        onKeyPress={undefined}
        role="menuitem"
        tabIndex={0}
      >
        <Image url={menuIcons[name]} />
        <Text type="p">{namesLinks[name]}</Text>
        <Image
          url={ArrowWhite}
          className={cx(styles.arrow)}
        />
      </section>
    );
  }

  return (
    <NavLink
      to={routerLinks[name]}
      {...navLinkCommonProps}
    >
      <Image url={menuIcons[name]} />
      <Text type="p">{namesLinks[name]}</Text>
      <Image
        url={ArrowWhite}
        className={cx(styles.arrow)}
      />
    </NavLink>
  );
};
