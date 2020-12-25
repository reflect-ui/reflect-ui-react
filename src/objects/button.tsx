import React from 'react';
import { css, cx } from '@emotion/css';

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

const buttonVariantStyles: { [key in TButtonVariant]: string } = {
  [ButtonVariants.filled]: css`
    background-color: #1890ff;
    border: 0;
    color: white;
  `,
  [ButtonVariants.outline]: css`
    background-color: transparent;
    border: 2px solid #1890ff;
    color: #1890ff;
  `,
  [ButtonVariants.ghost]: css`
    background-color: transparent;
    border: 0;
    color: #1890ff;
  `,
};

const Button: React.FC<IButton> = ({
  size = 'medium',
  variant = 'filled',
  radius = 8,
  children,
}) => {
  return (
    <button
      className={cx(
        css`
          padding: 12px 24px;
          font-weight: bold;
          font-size: 24px;
          line-height: 1.5;
          border-radius: ${radius}px;
        `,
        buttonVariantStyles[variant]
      )}
    >
      {children}
    </button>
  );
};

export default Button;
