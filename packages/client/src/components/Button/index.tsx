import React from 'react';
import cx from 'classnames';
import styles from './styles.module.scss';
import { Image } from '@project/libs/components';

type ButtonProps = {
  text?: string;
  icon?: string;
  onClick: any;
  className?: string;
  disabled?: boolean;
  type?: 'submit' | 'reset' | 'button';
};

export const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  className,
  disabled = false,
  type,
  icon = ''
}) => {
  return(
    <button
      className={cx(
        styles.button__body,
        disabled ? styles.disabled : null,
        className
      )}
      onClick={disabled ? () => {} : onClick}
      type={type || 'submit'}
      disabled={disabled}
    >
      <div className={cx(styles.button__content)}>
        {icon ? <Image url={icon} /> : null}
        {text}
      </div>
    </button>
  );
};