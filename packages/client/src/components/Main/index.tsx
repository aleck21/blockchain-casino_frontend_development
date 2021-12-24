import { FC, useContext } from 'react';
import cx from 'classnames';
import styles from './styles.module.scss';
import { ModalContext } from 'context/modalOpen';

export const Main: FC = ({ children }) => {
  const { modal } = useContext(ModalContext);
  
  return(
    <main className={cx(styles.container)}>
      <div className={cx(modal ? styles.on_blur : styles.no_blur)}>
        {children}
      </div>
    </main>
  );
};
