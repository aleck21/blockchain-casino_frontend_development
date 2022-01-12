import React, { CSSProperties, ReactNode, useContext } from 'react';
import 'antd/dist/antd.css';
import cx from 'classnames';
import {
  Header, Sidebar, Footer, Main,
} from 'components';
import { NavigationProvider } from 'context/navigation';
import { ModalContext, ModalProvider } from 'context/modalOpen';
import { ModalWindow } from 'components/ModalWindow';
import { Widget } from 'components/Widget';
import { WidgetProvider } from 'context/widget';
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
    <ModalProvider>
      <NavigationProvider>
        <WidgetProvider>
          <div
            className={cx(styles.page__container, pageLayout,
              modal ? styles.no_scroll : styles.scroll)}
            style={style}
          >
            <Header />
            <Sidebar />
            <Main>
              {children}
            </Main>
            <Footer />
          </div>
          <ModalWindow />
          <Widget />
        </WidgetProvider>
      </NavigationProvider>
    </ModalProvider>
  );
};

export { MainLayout };
