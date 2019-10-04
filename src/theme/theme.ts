import { Breakpoints, Spacings, BorderRadius, MediaQueries, BoxShadows } from './types';

const breakpoints: Breakpoints = {
  xs: 0,
  sm: 320,
  md: 768,
  lg: 1024,
  xl: 1200,
};

const spacings: Spacings = {
  xxs: '5px',
  xs: '10px',
  sm: '15px',
  md: '20px',
  lg: '30px',
  xl: '40px',
  xxl: '60px',
};

// https://guidelines.klarna.com/document/1#/basics/colour-palette
const colorPalette = {
  black: '#343434',
  darkGray: '#787878',
  gray: '#F2F2F1',
  white: '#FFFFFF',
  primary: '#EB6F93',
  secondary: '#6E9896',

  metadata: '#9C9C9B',

  divider: '#E9E9E8',
  dividerStrong: '#D1D1D0',

  errorBackground: '#FFD4C2',
  errorDivider: '#FC8064',
  errorIcon: '#FC8064',
  errorText: '#E66640',

  warningBackground: '#FCE8BA',
  warningDivider: '#E2AC62',
  warningIcon: '#E2AC62',
  warningText: '#CA8A1C',

  successBackground: '#DAEEBC',
  successDivider: '#82BC7E',
  successIcon: '#82BC7E',
  successText: '#589E60',

  brand: [
    {
      background: '#f2a4af',
      foreground: '#5c4144',
    },
    {
      background: '#efcac8',
      foreground: '#564242',
    },
    {
      background: '#d7bbd4',
      foreground: '#51444e',
    },
    {
      background: '#bcd5d3',
      foreground: '#424c4a',
    },
    {
      background: '#d2cbbb',
      foreground: '#3f443e',
    },
    {
      background: '#b2ced7',
      foreground: '#40494c',
    },
    {
      background: '#d0ddbb',
      foreground: '#3d4336',
    },
  ],
};

type Colors = typeof colorPalette;

export interface Brand {
  background: string;
  foreground: string;
  [key: string]: string;
}

// Naming colors is hard. There's a tool that helps a bit for that.
// http://chir.ag/projects/name-that-color
// Unfortunately it generate colors that are not that easy to understand either. Use it only
// for colors that are almost alike and are hard to clearly differentiate them.
export enum BrandColors {
  klarnaPink = 0,
  pink = 1,
  purple = 2,
  jetStream = 3,
  brown = 4,
  blue = 5,
  green = 6,
}

export type BrandColorNames =
  | 'klarnaPink'
  | 'pink'
  | 'purple'
  | 'jetStream'
  | 'brown'
  | 'blue'
  | 'green';

export interface ColorPalette extends Colors {
  [key: string]: string | Brand[];
}

export type ColorNames = 'white' | 'gray' | 'black' | 'primary' | 'secondary' | 'error';

const borderRadius: BorderRadius = {
  sm: '3px',
  md: '9px',
  lg: '25px',
};

const boxShadows: BoxShadows = {
  sm: 'rgba(0,0,0,0.15) 0px 1px 3px 0px',
  md: 'rgba(0,0,0,0.15) 0px 2px 7px 0px',
  lg: 'rgba(0, 0, 0, 0.15) 0px 3px 15px 0px',
};

export const theme = {
  breakpoints,
  spacings,
  colorPalette,
  borderRadius,
  boxShadows,
};

export interface ThemeProps {
  breakpoints: Breakpoints;
  spacings: Spacings;
  mediaQueries: MediaQueries;
  colorPalette: ColorPalette;
  borderRadius: BorderRadius;
  boxShadows: BoxShadows;
}

export interface ColorProps {
  brand?: number | BrandColorNames;
  color?: ColorNames;
  textColor?: ColorNames;
}
