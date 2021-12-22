import React from 'react';
import cx from 'classnames';
import styles from './styles.module.scss';
import { Image } from '@project/libs/components';

type ButtonProps = {
  text?: string;
  icon?: string;
  onClick: Function;
  className?: string;
  disabled?: boolean;
  type?: 'submit' | 'reset' | 'button';
};

export const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  className,
  disabled = true,
  type,
  icon
}) => {
  return(
    <div
      className={cx(styles.button__container)}
    >
      <button
        className={cx(styles.button__body, className)}
        type={type || 'submit'}
        disabled={disabled}
        onClick={() => onClick()}
      >
        <div className={cx(styles.button__content)}>
          {icon && <Image url={icon} />}
          {text}
        </div>
      </button>
    </div>
  );
};