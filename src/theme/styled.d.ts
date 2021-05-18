import 'styled-components';

type ExtendedColors =
    | 'transparent'
    | 'darkGrey'
    | 'blackGrey'
    | 'white'
    | 'toggleBorder'
    | 'gradient'
    | 'background'
    | 'headerBg'
    | 'cardsBg'
    | 'textColor'
    | 'dodgerBlue';

declare module 'styled-components' {
    export interface DefaultTheme {
        name: 'light' | 'dark';
        colors: Record<ExtendedColors, string>;
    }
}
