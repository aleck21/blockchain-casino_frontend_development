import React, { FC, useContext } from 'react';
import cx from 'classnames';
import { About } from './About';
import { Links } from './Links';
import { Currencies } from './Currencies';
import { Contacts } from './Contacts';
import { Rate } from './Rate';
import styles from './styles.module.scss';
import { Copyright } from './Copyright';
import { ModalContext } from 'context/modalOpen';

export const Footer: FC = () => {
  const { modal } = useContext(ModalContext);

  return(
    <footer className={cx(styles.container)}>
      <div
        className={cx(styles.footer__main,
          modal ? styles.on_blur : styles.no_blur
        )}
      >
        <About />
        <Links />
        <Currencies />
        <Contacts />
      </div>
      <div className={cx(styles.footer__bottom)}>
        <div className={cx(styles.footer__space)} />
        <Rate rate={47377.22} />
        <Copyright />
      </div>
    </footer>
  );
}
  
