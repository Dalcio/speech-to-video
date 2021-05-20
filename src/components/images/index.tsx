import { useApp } from '@app-data';
import React, { FC } from 'react';
import Img from './img';
import {
    AudioImagesContainer,
    HandleImagesContainer,
    WordRelatedImagesContainer,
} from './styled';

export const HandleImages: FC = () => {
    const { selectedImages } = useApp();

    return (
        <HandleImagesContainer>
            <WordRelatedImagesContainer id="word-related-images">
                <Img
                    url="https://picsum.photos/id/237/200/300"
                    alt="any img"
                    isSelected={false}
                />
            </WordRelatedImagesContainer>
            <AudioImagesContainer>
                {selectedImages.map(({ images, word }) =>
                    images.map(({ alt, url }, index) => (
                        <Img
                            url={url}
                            alt={alt}
                            isSelected={true}
                            key={`${word}-${index}`}
                        />
                    )),
                )}
            </AudioImagesContainer>
        </HandleImagesContainer>
    );
};
