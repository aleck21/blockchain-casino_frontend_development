import React, { CSSProperties } from 'react';
import cx from 'classnames';
import styles from './styles.module.scss';

type ButtonIconProps = {
  imageURL: string;
  className?: string;
  onClick: () => void;
  styleImage?: CSSProperties;
  alt?: string;
};

export const ButtonIcon: React.FC<ButtonIconProps> = ({
  imageURL,
  className,
  onClick,
  styleImage,
  alt = '',
}) => (
  <button
    className={cx(styles.buttonIcon, className)}
    onClick={onClick}
    type="button"
  >
    <img
      src={imageURL}
      style={styleImage}
      alt={alt}
    />
  </button>
);
