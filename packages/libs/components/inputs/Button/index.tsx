import React, { forwardRef } from 'react';
import cx from 'classnames';
import { useHoverEvent } from '@project/libs/hooks/useHoverEvent';
import { FontIcon, FontIconName } from '../FontIcon';
import Loader from '../Loader';
import {
  ButtonArrowStyle,
  ButtonProps,
  ButtonRef,
  ButtonTheme,
} from './types';
import styles from './styles.module.scss';

const Button = forwardRef(({
  theme = ButtonTheme.primary,
  hoverStyle = ButtonArrowStyle.primary,
  isFullWidth,
  onClick,
  className,
  children,
  disabled,
  iconClassName,
  isLoading,
  ...rest
}: ButtonProps,
ref: ButtonRef) => {
  const { hover, onMouseEnter, onMouseLeave } = useHoverEvent();

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
      {...rest}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {isLoading ? <Loader /> : (
        <>
          {children}
        </>
      )}
      <FontIcon
        name={FontIconName.ArrowRight}
        size={16}
        className={cx(styles.arrow, { [styles.hover]: hover }, styles[hoverStyle])}
      />
    </button>
  );
});

export { Button };
