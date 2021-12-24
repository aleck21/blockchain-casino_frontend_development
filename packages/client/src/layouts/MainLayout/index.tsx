import { CSSProperties, ReactNode, useContext } from 'react';
import cx from 'classnames';
import {
  Header, Sidebar, Footer, Main,
} from 'components';
import styles from './styles.module.scss';
import { NavigationProvider } from 'context/navigation';
import { ModalProvider } from 'context/modalOpen';
import { ModalWindow } from 'components/ModalWindow';

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
  return(
    <ModalProvider>
      <NavigationProvider>
        <div
          className={cx(styles.container, pageLayout)}
          style={style}
          >
          <Header />
          <Sidebar />
            <Main>
              {children}
            </Main>
            <Footer />
          <ModalWindow />
        </div>
      </NavigationProvider>
    </ModalProvider>
  )
};

export { MainLayout };
