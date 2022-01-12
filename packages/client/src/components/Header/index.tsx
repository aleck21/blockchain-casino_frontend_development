import React, { FC } from 'react';
import cx from 'classnames';
// import { useUser } from 'hooks';
import styles from './styles.module.scss';
import { Logo } from './Logo';
import { Menu } from './Menu';
import { Roulette } from './Roulette';
import { Note } from './Note';
import { HeaderContentUser } from './HeaderContentUser';
import { HeaderContentNotUser } from './HeaderContentNotUser';

export const Header: FC = () => {
  // const { isUser } = useUser();
  const isUser = true;

  return (
    <header className={cx(styles.container)}>
      <section className={cx(styles.header_mobile__content)}>
        <Logo />
        <Menu />
        {isUser ? <HeaderContentUser /> : <HeaderContentNotUser />}
      </section>
      <section className={cx(styles.header_modile__notifications)}>
        <Roulette />
        <div className={cx(styles.heafer_mobile__note)}>
          <Note />
        </div>
      </section>
    </header>
  );
};
