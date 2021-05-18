import { DefaultTheme } from 'styled-components';
import { light } from './light';

const dark: DefaultTheme = {
    ...light,
    name: 'dark',
    colors: {
        ...light.colors,
        toggleBorder: '#556678',
        gradient: 'linear-gradient(#091236, #1E215D)',
        background: '#20232A',
        headerBg: '#1A1C22',
        cardsBg: '#1A1C22',
        textColor: '#FFFFFF',
        dodgerBlue: '#0062CC',
    },
};

export { dark };
