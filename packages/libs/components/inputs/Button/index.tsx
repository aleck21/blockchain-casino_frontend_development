import React, { forwardRef } from 'react';
import cx from 'classnames';
import { useHoverEvent } from '@project/libs/hooks/useHoverEvent';
import Loader from '../Loader';
import {
  ButtonProps,
  ButtonRef,
  ButtonTheme,
} from './types';
import styles from './styles.module.scss';

const Button = forwardRef(({
  theme = ButtonTheme.primary,
  isFullWidth,
  onClick,
  className,
  children,
  disabled,
  isLoading,
}: ButtonProps,
ref: ButtonRef) => {
  const { onMouseEnter, onMouseLeave } = useHoverEvent();

  return (
    <button
      ref={ref}
      type="button"
      className={cx(
        styles.button,
        styles[theme],
        {
          [styles.full_width]: isFullWidth,
        },
        className,
      )}
      onClick={onClick}
      disabled={disabled || isLoading}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {isLoading ? <Loader /> : (
        <>
          {children}
        </>
      )}
    </button>
  );
});

export { Button };
