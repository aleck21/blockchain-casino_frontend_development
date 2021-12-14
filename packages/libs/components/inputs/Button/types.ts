import {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  LegacyRef,
  MouseEventHandler,
  PropsWithChildren,
} from 'react';

export enum ButtonArrowStyle {
  primary = 'arrowPrimary',
  secondary = 'arrowSecondary',
}

export enum ButtonTheme {
  primary = 'primary',
  secondary = 'secondary',
  gradient = 'gradient',
}

export type ButtonProps = PropsWithChildren<DetailedHTMLProps<
ButtonHTMLAttributes<HTMLButtonElement>,
HTMLButtonElement
> & {
  theme?: ButtonTheme,
  hoverStyle?: ButtonArrowStyle,
  isFullWidth?: boolean,
  onClick?: MouseEventHandler<HTMLButtonElement>,
  iconClassName?: string,
  isLoading?: boolean,
}>;

export type ButtonRef = LegacyRef<HTMLButtonElement> | undefined;
