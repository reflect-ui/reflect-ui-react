import React from 'react';

export type TSmall = 'small' | 's' | 'sm';
export type TMedium = 'medium' | 'm' | 'md';
export type TLarge = 'large' | 'l' | 'lg';
export type TSize = TSmall | TMedium | TLarge;

export enum ButtonVariants {
  filled = 'filled',
  outline = 'outline',
  ghost = 'ghost',
}

export type TButtonVariant = keyof typeof ButtonVariants;

export interface IButton {
  size?: TSize;
  variant?: TButtonVariant;
  radius?: number;
}

const Button: React.FC<IButton> = ({
  size = 'medium',
  variant = 'filled',
  radius = 8,
  children,
}) => {
  return <button>{children}</button>;
};

export default Button;
