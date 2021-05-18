import React from 'react';
import Image from 'next/image';
import useTranslation from 'next-translate/useTranslation';

import { Wrapper, Container, TextContainer } from './styled';

export const Main: React.FC = () => {
    const { t } = useTranslation();

    return (
        <Wrapper>
            <Container>
                <TextContainer>
                    <h1>
                        {t`common:hello`}
                        <span>{t`common:name`}</span>
                    </h1>
                    <p>{t`common:app-description`}</p>
                </TextContainer>
                <Image
                    src="/assets/context-svg.svg"
                    alt={t`common:img-description`}
                    width="810"
                    height="460"
                />
            </Container>
        </Wrapper>
    );
};
