import React, {
  useCallback,
  useContext,
  useMemo,
  memo,
} from 'react';
import { NavLink } from 'react-router-dom';
import cx from 'classnames';
import { Image, Text } from '@project/libs/components';
import { ArrowWhite } from '@project/libs/assets/images';
import { useMobile } from 'hooks';
import { RouteLink, ModalName } from '@project/client/src/constants';
// import { useUser } from 'hooks';
import { WidgetContext, ModalContext, MenuContext } from 'context';
import styles from './styles.module.scss';

type NavigationButtonProps = {
  modalName?: ModalName;
  routerLink?: RouteLink;
  icon: string;
  title: string;
  isNotAuthNeeded?: boolean;
};

export const NavigationButton = memo(({
  modalName,
  routerLink,
  icon,
  title,
  isNotAuthNeeded = false,
}: NavigationButtonProps) => {
  // const { isUser } = useUser();
  const isUser = false;
  const isMobile = useMobile();

  const { closeWidget } = useContext(WidgetContext);
  const { openModal, setContentModal, closeModal } = useContext(ModalContext);
  const { closeMenu } = useContext(MenuContext);

  const onModalOpenClick = useCallback(() => {
    if (!modalName) return;
    setContentModal(modalName);
    openModal();
    closeMenu();
    if (isMobile) closeWidget();
  }, [closeMenu, closeWidget, isMobile, modalName, openModal, setContentModal]);

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

  if (!isNotAuthNeeded && !isUser) return null;
  if (modalName && routerLink === undefined) {
    return (
      <section
        className={cx(styles.nav__item)}
        onClick={onModalOpenClick}
        onKeyPress={undefined}
        role="menuitem"
        tabIndex={0}
      >
        <Image url={icon} />
        <Text type="p">{title}</Text>
        <Image
          url={ArrowWhite}
          className={cx(styles.arrow)}
        />
      </section>
    );
  }
  return (
    routerLink
      ? (
        <NavLink
          to={routerLink}
          {...navLinkCommonProps}
        >
          <Image url={icon} />
          <Text type="p">{title}</Text>
          <Image
            url={ArrowWhite}
            className={cx(styles.arrow)}
          />
        </NavLink>
      )
      : null
  );
});
