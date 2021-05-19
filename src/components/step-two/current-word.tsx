import {
    faChevronLeft,
    faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { FC } from 'react';

import { CurrentWordContainer, NextWordBtn, PreviousWordBtn } from './styled';
import { CurrentWordProps } from './types';

const CurrentWord: FC<CurrentWordProps> = ({ currentWord }) => {
    return (
        <CurrentWordContainer>
            <PreviousWordBtn>Previous word</PreviousWordBtn>
            <span>{currentWord}</span>
            <NextWordBtn>Next word</NextWordBtn>
        </CurrentWordContainer>
    );
};

export default CurrentWord;
