import { useApp } from '@app-data';
import { ImgProps } from '@app-data/type';
import { KEYS } from '@constants';
import { useSnackbar } from '@hooks';
import useTranslation from 'next-translate/useTranslation';
import React, { FC, useEffect, useState } from 'react';
import Img from './img';

import { WordRelatedImagesContainer } from './styled';

export const HandleImages: FC = () => {
    const {
        currentWord,
        newImagesToBeAdded,
        imgExist,
        setNewImagesToBeAdded,
        addImages,
        remove,
    } = useApp();
    const { openErrorSnackbar } = useSnackbar();
    const [imagesToAdd, setImagesToAdd] = useState<ImgProps[]>([]);
    const { t } = useTranslation();

    const getImages = async () => {
        try {
            const res = await fetch(`${KEYS.localhost}${currentWord}`);
            const images = await res.json();
            console.log(images);
        } catch (error) {
            openErrorSnackbar(t`common:errors.something-wrong`);
        }
    };

    useEffect(() => {
        if (currentWord === '' || !currentWord) {
            getImages();
        }
    }, [currentWord]);

    const select = (img: ImgProps) => {
        const tmpArr: ImgProps[] = [...newImagesToBeAdded];
        tmpArr.push(img);
        setNewImagesToBeAdded([...tmpArr]);
    };

    return (
        <WordRelatedImagesContainer id="word-related-images">
            {imagesToAdd.map(({ url, alt }, index) => (
                <Img
                    url={url}
                    alt={alt}
                    isSelected={imgExist(url)}
                    key={`${currentWord}-${index}`}
                    remove={() => remove(url)}
                    add={() => select({ alt, url, isSelected: true })}
                />
            ))}
            {imagesToAdd.length > 0 && (
                <button
                    onClick={addImages}
                    id="add-images"
                >{t`home:step-two.labels.add-images`}</button>
            )}
        </WordRelatedImagesContainer>
    );
};
