import React from 'react';

import { Wrapper, Main, Header } from '@components';
import GlobalStyle from '@styles/globalStyles';

const Home: React.FC = () => {
    return (
        <Wrapper>
            <GlobalStyle />
            <Header />
            <Main />
        </Wrapper>
    );
};
export default Home;
