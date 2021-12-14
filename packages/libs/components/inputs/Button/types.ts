import {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  LegacyRef,
  MouseEventHandler,
  PropsWithChildren,
} from 'react';

export enum ButtonTheme {
  primary = 'primary',
  outline = 'outline',
}

export type ButtonProps = PropsWithChildren<DetailedHTMLProps<
ButtonHTMLAttributes<HTMLButtonElement>,
HTMLButtonElement
> & {
  theme?: ButtonTheme,
  isFullWidth?: boolean,
  onClick?: MouseEventHandler<HTMLButtonElement>,
  iconClassName?: string,
  isLoading?: boolean,
}>;

export type ButtonRef = LegacyRef<HTMLButtonElement> | undefined;
