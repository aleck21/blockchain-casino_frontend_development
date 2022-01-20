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
// import { useUser } from 'hooks';
import { LocationDescriptor } from 'history';
import { WidgetContext, ModalContext, MenuContext } from 'context';
import styles from './styles.module.scss';

type NavigationButtonProps = {
  name?: string;
  routerLink?: LocationDescriptor;
  icon: string;
  text: string;
  isNotAuthNeeded?: boolean;
};

export const NavigationButton = memo(({
  name = '',
  routerLink = '',
  icon,
  text,
  isNotAuthNeeded = false,
}: NavigationButtonProps) => {
  // const { isUser } = useUser();
  const isUser = true;
  const isMobile = useMobile();

  const { closeWidget } = useContext(WidgetContext);
  const { openModal, setContentModal, closeModal } = useContext(ModalContext);
  const { closeMenu } = useContext(MenuContext);

  const onClickIsModal = useCallback(() => {
    setContentModal(name);
    openModal();
    closeMenu();
    if (isMobile) closeWidget();
  }, [closeMenu, closeWidget, isMobile, name, openModal, setContentModal]);

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

  if (!isNotAuthNeeded && !isUser) return (<div className={cx(styles.no_visible)} />);
  if (name) {
    return (
      <section
        className={cx(styles.nav__item)}
        onClick={onClickIsModal}
        onKeyPress={undefined}
        role="menuitem"
        tabIndex={0}
      >
        <Image url={icon} />
        <Text type="p">{text}</Text>
        <Image
          url={ArrowWhite}
          className={cx(styles.arrow)}
        />
      </section>
    );
  }

  return (
    <NavLink
      to={routerLink}
      {...navLinkCommonProps}
    >
      <Image url={icon} />
      <Text type="p">{text}</Text>
      <Image
        url={ArrowWhite}
        className={cx(styles.arrow)}
      />
    </NavLink>
  );
});
