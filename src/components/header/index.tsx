import useTranslation from 'next-translate/useTranslation';
import Image from 'next/image';
import React from 'react';
import { HeaderWrapper } from './styled';

export const Header: React.FC = () => {
    const { t } = useTranslation();

    return (
        <HeaderWrapper>
            <Image
                src="/icons/logo-icon.svg"
                alt={t`common:name`}
                width="102"
                height="42"
            />
            <h2>{t`common:name`}</h2>
        </HeaderWrapper>
    );
};
