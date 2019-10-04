/**
 * e.g.
 * {
 *   xs: 0,
 *   sm: 320
 * }
 */
export type Breakpoints = { [key in Breakpoint]?: number };

/**
 * e.g.
 * {
 *    xs: '@media (min-width: 0px)',
 *    sm: '@media (min-width: 320px)'
 * }
 */
export type MediaQueries = { [k in Breakpoint]?: string };

/**
 * e.g.
 * {
 *   xxs: '5px',
 *   xs: '10px'
 * }
 */
export type Spacings = { [key in Spacing]: string };

/**
 * e.g.
 * {
 *   xs: { padding: 'xs', margin: 'xs' },
 *   sm: { margin: 'lg' }
 * }
 */
export type SpacingProps = { [key in Breakpoint]?: { [key in SpaceTypes]?: Spacing } };

export type SpaceSizes = { [key in SpaceTypes]?: string };

export type MediaQueryByBreakpoints = { [key in Breakpoint]?: string };

export type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type Spacing = 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
export type SpaceTypes =
  | 'padding'
  | 'paddingTop'
  | 'paddingBottom'
  | 'paddingLeft'
  | 'paddingRight'
  | 'margin'
  | 'marginTop'
  | 'marginBottom'
  | 'marginLeft'
  | 'marginRight';

export type BorderRadius = { [key in BorderRadiusSizes]?: string };

export type BorderRadiusSizes = 'sm' | 'md' | 'lg';

export type BoxShadows = { [key in BoxShadowSizes]?: string };

export type BoxShadowSizes = 'sm' | 'md' | 'lg';
