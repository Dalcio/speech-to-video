import {
    faChevronLeft,
    faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { ChangeEvent, FC, useState, useEffect } from 'react';
import CurrentWord from './current-word';

import {
    StepTwoContainer,
    StepTwoAsideLeft,
    StepTwoAsideRight,
} from './styled';
import { StepTwoProps } from './types';

const StepTwo: FC<StepTwoProps> = ({
    audio,
    setStep,
    setTranscript,
    transcript,
}) => {
    const [currentWord, handleCurrentWord] = useState<string>('');
    const [images, handleImages] = useState<[]>([]);

    const handleTextArea = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setTranscript(event.target.value);
    };

    useEffect(() => {
        handleCurrentWord('primeira palavra');
    }, []);

    return (
        <StepTwoContainer>
            <StepTwoAsideLeft>
                <CurrentWord currentWord={currentWord} />
                <textarea value={transcript} onChange={handleTextArea} />
            </StepTwoAsideLeft>
            <StepTwoAsideRight>Right</StepTwoAsideRight>
        </StepTwoContainer>
    );
};

export default StepTwo;
