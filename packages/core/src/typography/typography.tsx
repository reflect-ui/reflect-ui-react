import React from 'react';
import { css, cx } from '@emotion/css';

// region no export
import { TextManifest } from '@reflect-ui/core/lib/text';
import { TextOverflow, TypographyProps } from './types';
import { TextThemeDefaultVariants } from '@reflect-ui/core/lib/text-theme/templates/text-theme.default';

// todo make typography defaullt values based on reflect defaults
const typographyDefaultVariantStyles: {
  [key in TextThemeDefaultVariants]: string;
} = {
  [TextThemeDefaultVariants.heading1]: css``,
  [TextThemeDefaultVariants.heading2]: css``,
  [TextThemeDefaultVariants.heading3]: css``,
  [TextThemeDefaultVariants.heading4]: css``,
  [TextThemeDefaultVariants.heading5]: css``,
  [TextThemeDefaultVariants.heading6]: css``,
  [TextThemeDefaultVariants.body1]: css``,
  [TextThemeDefaultVariants.body2]: css``,
  [TextThemeDefaultVariants.subtitle]: css``,
  [TextThemeDefaultVariants.caption]: css``,
  [TextThemeDefaultVariants.button1]: css``,
  [TextThemeDefaultVariants.button2]: css``,
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
          /* todo -- add typography styling */
        `,
        typographyDefaultVariantStyles[variant]
      )}
      {...props}
    />
  );
};
