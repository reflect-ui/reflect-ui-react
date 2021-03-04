import { TextAlign__Api } from '@reflect-ui/core/lib/text-align';
import { TextOverflow } from '@reflect-ui/core/lib/text-overflow';
import { TextStyle } from '@reflect-ui/core/lib/text-style';
import { TextThemeDefaultVariants__Api } from '@reflect-ui/core/lib/extensions/text-theme/templates/text-theme.default';
export { TextAlign__Api as TextAlign, TextOverflow, TextStyle };

/**
 * [mui](https://material-ui.com/api/typography/#props)
 * [mui-source](https://github.com/mui-org/material-ui/tree/next/packages/material-ui/src/Typography)
 * [flutter](https://api.flutter.dev/flutter/widgets/Text-class.html)
 */
export interface TypographyProps {
  align?: TextAlign__Api;
  variant?: TextThemeDefaultVariants__Api;
  overflow?: TextOverflow;
  //   color:
  textStyle?: TextStyle;
  // display?;
}
