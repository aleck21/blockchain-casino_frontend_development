import React, { FC } from 'react';
import cx from 'classnames';
import { About } from './About';
import { Links } from './Links';
import { Currencies } from './Currencies';
import { Contacts } from './Contacts';
import { Rate } from './Rate';
// import { useTranslation } from '@project/libs/utils/i18n';
import styles from './styles.module.scss';
import { Copyright } from './Copyright';

export const Footer: FC = () =>
// const { t } = useTranslation('main');

  (
    <footer className={cx(styles.container)}>
      <div className={cx(styles.footer__main)}>
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
