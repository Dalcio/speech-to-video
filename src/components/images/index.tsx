import { useApp } from '@app-data';
import { ImgProps } from '@app-data/type';
import useTranslation from 'next-translate/useTranslation';
import React, { FC, useState } from 'react';
import Img from './img';
import { HandleImagesContainer, WordRelatedImagesContainer } from './styled';

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
        currentWord,
        newImagesToBeAdded,
        imgExist,
        setNewImagesToBeAdded,
        addImages,
        remove,
    } = useApp();
    const [imagesToAdd, setImagesToAdd] = useState<ImgProps[]>(mock);
    const { t } = useTranslation();

    const getImages = () => {
        //
    };

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
