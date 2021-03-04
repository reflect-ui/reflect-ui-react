import React from 'react';
import { css, cx } from '@emotion/css';

// region no export
import { TextManifest } from '@reflect-ui/core/lib/text';
import { TextOverflow, TypographyProps } from './types';
import { TextThemeDefaultVariants, TextThemeDefaultVariants__Api } from '@reflect-ui/core/lib/extensions/text-theme/templates/text-theme.default';

// todo make typography defaullt values based on reflect defaults
const typographyDefaultVariantStyles: {
  [key in TextThemeDefaultVariants__Api]: string;
} = {
  [TextThemeDefaultVariants.heading1]: css`
    font-size: 80px;
    font-weight: bold;

    @media (max-width : 321px) {
      font-size: 48px;
    }
  `,
  [TextThemeDefaultVariants.heading2]: css`
    font-size: 64px;
    font-weight: bold;

    @media (max-width : 321px) {
      font-size: 32px;
    }
  `,
  [TextThemeDefaultVariants.heading3]: css``,
  [TextThemeDefaultVariants.heading4]: css`
    font-size: 36px;
    font-weight: bold;

    @media (max-width : 321px) {
      font-size: 32px;
    }
  `,
  [TextThemeDefaultVariants.heading5]: css``,
  [TextThemeDefaultVariants.heading6]: css``,
  [TextThemeDefaultVariants.body1]: css`
    font-size: 24px;

    @media (max-width : 321px) {
      font-size: 18px;
    }
  `,
  [TextThemeDefaultVariants.body2]: css``,
  [TextThemeDefaultVariants.subtitle]: css`
    font-size: 24px;

    @media (max-width : 321px) {
      font-size: 20px;
    }
  `,
  [TextThemeDefaultVariants.caption]: css``,
  [TextThemeDefaultVariants.button1]: css``,
  [TextThemeDefaultVariants.button2]: css``,
  inherit: css``
};

const Typography: React.FC<TypographyProps> = ({
  align = 'inherit',
  overflow = TextOverflow.clip,
  variant = 'inherit',
  ...props
}) => {
  return (
    <span
      className={cx(
        css`
          margin: 0;
          overflow: 'hidden';
          text-align: 'start';
          font-size: '14px';
          /* todo -- add typography styling */
        `,
        typographyDefaultVariantStyles[variant]
      )}
      {...props}
    />
  );
};

export default Typography;