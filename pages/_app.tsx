import React from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider } from '@theme';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
    return (
        <ThemeProvider>
            <Component {...pageProps} />
        </ThemeProvider>
    );
}

export default MyApp;
