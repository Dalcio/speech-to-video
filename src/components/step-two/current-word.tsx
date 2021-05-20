import { useApp } from '@app-data';
import {
    faChevronLeft,
    faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { FC } from 'react';

import { CurrentWordContainer, PreviousNextWordBtn } from './styled';

const CurrentWord: FC = () => {
    const { currentWord } = useApp();

    const previousWord = () => {
        alert('previous');
    };
    const nextWord = () => {
        alert('next word');
    };

    return (
        <CurrentWordContainer>
            <PreviousNextWordBtn onClick={previousWord}>
                <FontAwesomeIcon icon={faChevronLeft} />
            </PreviousNextWordBtn>
            <span>{currentWord}</span>
            <PreviousNextWordBtn onClick={nextWord}>
                <FontAwesomeIcon icon={faChevronRight} />
            </PreviousNextWordBtn>
        </CurrentWordContainer>
    );
};

export default CurrentWord;
