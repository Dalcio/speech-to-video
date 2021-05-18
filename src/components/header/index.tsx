import React from 'react';

import { Wrapper, Container } from './styled';

export const Header: React.FC = () => {
    return (
        <Wrapper>
            <Container>
                <h1>superplate</h1>
                <p>The frontend boilerplate with superpowers!</p>
            </Container>
        </Wrapper>
    );
};
