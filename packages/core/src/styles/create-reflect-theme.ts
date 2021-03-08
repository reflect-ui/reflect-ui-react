import createColorScheme from './create-color-scheme';
import createBreakpoints from './create-breakpoints';
import createSpacing from './create-spacing';
import createTextTheme from './create-text-theme';
import deepmerge from '../utils.internal/deepmerge';

/**
 * references
 * [mui](https://github.com/mui-org/material-ui/blob/next/packages/material-ui/src/styles/createMuiTheme.js)
 */
export function createReflectTheme(
  input: {
    breakpoints: any;
    mixins: any;
    colorScheme: any;
    spacing: any;
    textTheme: any;
  },
  ...args
) {
  const colorScheme = createColorScheme(input.colorScheme);
  const breakpoints = createBreakpoints(input.breakpoints);
  const spacing = createSpacing(input.spacing);
  const textTheme = createTextTheme(colorScheme, input.textTheme);

  const theme = deepmerge(
    {
      breakpoints: breakpoints,
      spacing: spacing,
      colorScheme: colorScheme,
      textTheme: textTheme,
    },
    args
  );

  return theme;
}
