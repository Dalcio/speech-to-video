import { useApp } from '@app-data';
import {
    faChevronLeft,
    faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { FC } from 'react';

import { CurrentWordContainer, PreviousNextWordBtn } from './styled';

const CurrentWord: FC = () => {
    const {
        currentWord,
        previousWord,
        nextWord,
        transcriptsIndex,
        transcripts,
    } = useApp();

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
