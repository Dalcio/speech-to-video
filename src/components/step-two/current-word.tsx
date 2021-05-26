import { useApp } from '@app-data';
import { ImgProps } from '@app-data/type';
import { KEYS } from '@constants';
import {
    faChevronLeft,
    faChevronRight,
    faSearch,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSnackbar } from '@hooks/use-snackbar';
import useTranslation from 'next-translate/useTranslation';
import React, { FC } from 'react';

import { CurrentWordContainer, PreviousNextWordBtn } from './styled';

const CurrentWord: FC = () => {
    const {
        currentWord,
        previousWord,
        nextWord,
        imgExist,
        setImagesToAdd,
        setNewImagesToBeAdded,
        transcriptsIndex,
        transcripts,
    } = useApp();
    const { openErrorSnackbar } = useSnackbar();
    const { t } = useTranslation();

    const getImages = async () => {
        setNewImagesToBeAdded([]);
        try {
            const res = await fetch(`${KEYS.localhost}${currentWord}`);
            const images = await res.json();
            if (images) {
                const aux: ImgProps[] = [];
                images.map((img) => {
                    aux.push({
                        alt: img?.title,
                        url: img?.url,
                        isSelected: imgExist(img.url),
                    });
                });
                setImagesToAdd([...aux]);
            }
        } catch (error) {
            openErrorSnackbar(t`common:errors.something-wrong`);
        }
    };

    return (
        <CurrentWordContainer>
            <PreviousNextWordBtn
                onClick={previousWord}
                disabled={transcriptsIndex === 0 || transcripts.length === 0}
            >
                <FontAwesomeIcon icon={faChevronLeft} />
            </PreviousNextWordBtn>
            <span>{currentWord}</span>
            <PreviousNextWordBtn
                onClick={getImages}
                disabled={currentWord === '' || currentWord === undefined}
            >
                <FontAwesomeIcon icon={faSearch} />
            </PreviousNextWordBtn>
            <PreviousNextWordBtn
                onClick={nextWord}
                disabled={
                    transcriptsIndex === transcripts.length - 1 ||
                    transcripts.length <= 1
                }
            >
                <FontAwesomeIcon icon={faChevronRight} />
            </PreviousNextWordBtn>
        </CurrentWordContainer>
    );
};

export default CurrentWord;
