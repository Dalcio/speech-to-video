import 'styled-components';

type CommonColors =
    | 'transparent'
    | 'white'
    | 'gradient'
    | 'background'
    | 'primary'
    | 'text';

type BreakPoints = {
    small: string;
    medium: string;
};

type BorderRadius = {
    s: string;
    m: string;
    l: string;
};

type Spacing = {
    s: string;
    m: string;
    l: string;
    xl: string;
    xxl: string;
};

type FontSize = {
    p: string;
    h1: string;
    h2: string;
};

declare module 'styled-components' {
    export interface DefaultTheme {
        colors: Record<CommonColors, string>;
        breakpoints: BreakPoints;
        borderRadius: BorderRadius;
        spacing: Spacing;
        fontSize: FontSize;
    }
}
