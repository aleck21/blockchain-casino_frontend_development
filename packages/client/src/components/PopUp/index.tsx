import React, { memo } from 'react';
import { ButtonIcon } from '@project/libs/components';
import { CloseIcon } from '@project/libs/assets/images';
import styles from './styles.module.scss';

type PopUpProps = {
  onClose: () => void;
  children: React.ReactElement;
};

const PopUp = memo(({
  onClose,
  children,
}: PopUpProps) => (
  <div
    className={styles.popup__dropscreen}
  >
    <section
      className={styles.popup__container}
    >
      <ButtonIcon
        imageURL={CloseIcon}
        onClick={onClose}
        className={styles.popup__close__button}
      />
      {children}
    </section>
  </div>
));

export { PopUp };
