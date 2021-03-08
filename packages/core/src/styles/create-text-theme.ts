import * as DEFAULTS from '@reflect-ui/core/lib/extensions/text-style/templates/text-style.default';

import deepmerge from '../utils.internal/deepmerge';

function round(value) {
  return Math.round(value * 1e5) / 1e5;
}

const caseAllCaps = {
  textTransform: 'uppercase',
};

/**
 * @see @link{https://reflect-ui.com/design/text-theme/type-system}
 * @see @link{https://reflect-ui.com/design/text-theme/understanding-typography}
 */
export default function createTextTheme(colorScheme: any, textTheme: any) {
  const {
    fontFamily = DEFAULTS.REFLECT_WEB_DEFAULT_FONT_FAMILY,
    fontSize = DEFAULTS.REFLECT_DEFAULT_FONT_SIZE,
    fontWeightLight = DEFAULTS.REFLECT_DEFAULT_FONT_WEIGHT_LIGHT,
    fontWeightRegular = DEFAULTS.REFLECT_DEFAULT_FONT_WEIGHT_REGULAR,
    fontWeightMedium = DEFAULTS.REFLECT_DEFAULT_FONT_WEIGHT_MEDIUM,
    fontWeightBold = DEFAULTS.REFLECT_DEFAULT_FONT_WEIGHT_BOLD,
    htmlFontSize = DEFAULTS.REFLECT_WEB_DEFAULT_HTLM_FONT_SIZE,
    allVariants,
    pxToRem: pxToRem2,
    ...others
  } = typeof textTheme === 'function' ? textTheme(colorScheme) : textTheme;

  const coef = fontSize / 14;
  const pxToRem = pxToRem2 || (size => `${(size / htmlFontSize) * coef}rem`);
  const buildVariant = (
    fontWeight,
    size,
    lineHeight,
    letterSpacing,
    casing?
  ) => ({
    fontFamily,
    fontWeight,
    fontSize: pxToRem(size),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight,
    // todo
    // The letter spacing was designed for the Roboto font-family. Using the same letter-spacing
    // across font-families can cause issues with the kerning.
    ...(fontFamily === DEFAULTS.REFLECT_WEB_DEFAULT_FONT_FAMILY
      ? { letterSpacing: `${round(letterSpacing / size)}em` }
      : {}),
    ...casing,
    ...allVariants,
  });

  const variants = {
    h1: buildVariant(fontWeightLight, 96, 1.167, -1.5),
    h2: buildVariant(fontWeightLight, 60, 1.2, -0.5),
    h3: buildVariant(fontWeightRegular, 48, 1.167, 0),
    h4: buildVariant(fontWeightRegular, 34, 1.235, 0.25),
    h5: buildVariant(fontWeightRegular, 24, 1.334, 0),
    h6: buildVariant(fontWeightMedium, 20, 1.6, 0.15),
    subtitle1: buildVariant(fontWeightRegular, 16, 1.75, 0.15),
    subtitle2: buildVariant(fontWeightMedium, 14, 1.57, 0.1),
    body1: buildVariant(fontWeightRegular, 16, 1.5, 0.15),
    body2: buildVariant(fontWeightRegular, 14, 1.43, 0.15),
    button: buildVariant(fontWeightMedium, 14, 1.75, 0.4),
    caption: buildVariant(fontWeightRegular, 12, 1.66, 0.4),
    overline: buildVariant(fontWeightRegular, 12, 2.66, 1, caseAllCaps),
  };

  return deepmerge(
    {
      htmlFontSize,
      pxToRem,
      round, // TODO v5: remove
      fontFamily,
      fontSize,
      fontWeightLight,
      fontWeightRegular,
      fontWeightMedium,
      fontWeightBold,
      ...variants,
    },
    others,
    {
      clone: false, // No need to clone deep
    }
  );
}
