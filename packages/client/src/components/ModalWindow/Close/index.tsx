import { ModalContext } from 'context/modalOpen';
import { FC, useContext } from 'react';
import cx from 'classnames';
import styles from './styles.module.scss';
import { Image } from '@project/libs/components';
import { CloseIcon } from '@project/libs/assets/images';

export const Close: FC = () => {
  const { closeModal } = useContext(ModalContext);

  return(
    <div className={cx(styles.close__box)} onClick={closeModal} >
      <Image url={CloseIcon} />
    </div>
  );
}