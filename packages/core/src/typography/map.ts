import { TextManifest } from '@reflect-ui/core/lib/text';
import { TypographyProps } from './types';

/**
 * converts reflect core text manifest to typography props
 * @param data
 */
export function mapTextManifestToTypographyProps(
  data: TextManifest
): TypographyProps {
  return {
    align: data.textAlign,
    overflow: data.overflow,
    textStyle: data.style,
    variant: undefined,
  };
}
