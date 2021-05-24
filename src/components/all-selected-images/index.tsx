import { useApp } from '@app-data';
import Img from '@components/images/img';
import React from 'react';
import { AllSelectedContainer } from './styled';

export const AllSelectedImages: React.FC = () => {
    const { selectedImages, removeImage, remove } = useApp();

    return (
        <AllSelectedContainer>
            {selectedImages.map(({ images, word }) =>
                images.map(({ alt, url }, index) => (
                    <Img
                        url={url}
                        alt={alt}
                        isSelected={true}
                        key={`${word}-${index}`}
                        remove={() => {
                            remove(url);
                            removeImage(word, url);
                        }}
                    />
                )),
            )}
        </AllSelectedContainer>
    );
};
