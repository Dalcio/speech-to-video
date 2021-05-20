import { ImgProps } from '@app-data/type';
import { useDisplayImage } from '@components/display-image';
import useTranslation from 'next-translate/useTranslation';
import React, { FC, useEffect, useState } from 'react';

import { ImgContainer } from './styled';

const Img: FC<ImgProps> = ({ url, alt, isSelected }) => {
    const [label, setLabel] = useState<string>('');
    const { t } = useTranslation();
    const { showImage } = useDisplayImage();

    useEffect(() => {
        setLabel(t(`home:step-two.labels.${isSelected ? 'remove' : 'select'}`));
    }, []);

    useEffect(() => {
        setLabel(t(`home:step-two.labels.${isSelected ? 'remove' : 'select'}`));
    }, [isSelected]);

    const onClick = () => {
        showImage(url);
    };

    const addRem = () => {
        alert(`${alt}  =>  ${!isSelected ? 'select' : 'remove'}`);
        if (isSelected) {
            alert('removing');
        } else {
            alert('adding');
        }
    };

    return (
        <ImgContainer>
            <img
                id={`img-${isSelected ? 'remove' : 'select'}`}
                src={url}
                alt={alt}
                onClick={onClick}
            />
            <button onClick={addRem}>{label}</button>
        </ImgContainer>
    );
};

export default Img;
