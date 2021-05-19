import { DefaultTheme } from 'styled-components';

const light: DefaultTheme = {
    colors: {
        transparent: 'transparent',
        white: '#FFFFFF',
        gradient: 'linear-gradient(#39598A, #79D7ED)',
        primary: '#F5B66B',
        background: '#F8F6EE',
        text: '#484848',
        error: '#B70A0F',
        success: '#4EA855',
    },
    breakpoints: {
        small: '767px',
        medium: '840px',
    },
    borderRadius: {
        s: '8px',
        m: '14px',
        l: '16px',
    },
    spacing: {
        s: '16px',
        m: '24px',
        l: '28px',
        xl: '48px',
        xxl: '58px',
    },
    fontSize: {
        p: '1.15rem',
        h2: '1.45rem',
        h1: '2.75rem',
    },
};

export { light };
