import React, { memo } from 'react';
import cx from 'classnames';
import {
  ButtonIcon,
} from '@project/libs/components';
import {
  EmailIcon,
  GoogleIcon,
  MetaMaskIcon,
} from '@project/libs/assets/images';
import styles from './styles.module.scss';

type ButtonIconsBoxProps = {
  onGoogleClick: () => void;
  onMetaMaskClick: () => void;
  onEmailClick: () => void;
};

export const ButtonIconsBox = memo<ButtonIconsBoxProps>(({
  onGoogleClick,
  onMetaMaskClick,
  onEmailClick,
}) => (
  <div className={cx(styles.singIn__iconsBox)}>
    <ButtonIcon
      onClick={onGoogleClick}
      imageURL={GoogleIcon}
    />
    <ButtonIcon
      onClick={onMetaMaskClick}
      imageURL={MetaMaskIcon}
    />
    <ButtonIcon
      onClick={onEmailClick}
      imageURL={EmailIcon}
    />
  </div>
));
