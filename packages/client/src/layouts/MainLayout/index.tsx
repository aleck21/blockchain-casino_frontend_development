import React, { CSSProperties, ReactNode, useContext } from 'react';
import 'antd/dist/antd.css';
import cx from 'classnames';
import {
  Header, Sidebar, Footer,
} from 'components';
import { ModalContext } from 'context/modalOpen';
import { ModalWindow } from 'components/ModalWindow';
import { Widget } from 'components/Widget';
import styles from './styles.module.scss';

type MainLayoutProps = {
  pageLayout?: string;
  children: ReactNode;
  style?: CSSProperties;
};

const MainLayout = ({
  children,
  pageLayout,
  style,
}: MainLayoutProps) => {
  const { modal } = useContext(ModalContext);

  return (
    <>
      <div
        className={cx(styles.page__container, pageLayout,
          modal ? styles.no_scroll : styles.scroll)}
        style={style}
      >
        <Header />
        <Sidebar />
        <main className={cx(styles.mainContainer)}>
          <div className={cx(modal ? styles.on_blur : styles.no_blur)}>
            {children}
          </div>
        </main>
        <Footer />
      </div>
      <ModalWindow />
      <Widget />
    </>
  );
};

export { MainLayout };
