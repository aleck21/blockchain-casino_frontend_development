import React from 'react';
import cx from 'classnames';
import styles from './styles.module.scss';

type ButtonProps = {
  text?: string;
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
  type
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
        {text}
      </button>
    </div>
  );
};