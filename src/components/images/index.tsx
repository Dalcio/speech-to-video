import { useApp } from '@app-data';
import { ImgProps } from '@app-data/type';
import React, { FC, useEffect, useState } from 'react';
import Img from './img';
import {
    AudioImagesContainer,
    HandleImagesContainer,
    WordRelatedImagesContainer,
} from './styled';

const mock = [
    {
        alt: 'Two people using a computer to hide the scrollbar using CS',
        isSelected: true,
        url: 'https://blog.hubspot.com/hubfs/Google%20Drive%20Integration/How%20to%20Hide%20the%20Scollbar%20in%20CSS.jpeg',
    },
    {
        alt: 'Adriana Barbosa Ilustração: Davi Augusto/VOCÊ S/A',
        isSelected: true,
        url: 'https://vocesa.abril.com.br/wp-content/uploads/2020/04/abre-adriana-01.jpg?quality=70&strip=info&w=225',
    },
    {
        alt: 'Dog from lorem ipsum',
        isSelected: true,
        url: 'https://picsum.photos/id/237/200/300',
    },
];

export const HandleImages: FC = () => {
    const {
        selectedImages,
        currentWord,
        newImagesToBeAdded,
        imgExist,
        removeImage,
        setNewImagesToBeAdded,
    } = useApp();
    const [imagesToAdd, setImagesToAdd] = useState<ImgProps[]>(mock);

    const getImages = () => {
        //
    };

    const select = (img: ImgProps) => {
        const tmpArr: ImgProps[] = [...newImagesToBeAdded];
        tmpArr.push(img);

        setNewImagesToBeAdded([...tmpArr]);
    };

    const remove = (imgUrl: string) => {
        const tmpArr: ImgProps[] = newImagesToBeAdded.filter(
            ({ url }) => url.toLowerCase() !== imgUrl.toLowerCase(),
        );

        setNewImagesToBeAdded([...tmpArr]);
    };

    return (
        <HandleImagesContainer>
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
            </WordRelatedImagesContainer>
            <AudioImagesContainer>
                {selectedImages.map(({ images, word }) =>
                    images.map(({ alt, url }, index) => (
                        <Img
                            url={url}
                            alt={alt}
                            isSelected={true}
                            key={`${word}-${index}`}
                            remove={() => removeImage(word, url)}
                        />
                    )),
                )}
            </AudioImagesContainer>
        </HandleImagesContainer>
    );
};
