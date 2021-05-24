import { useApp } from '@app-data';
import { AllSelectedImages } from '@components/all-selected-images';
import { HandleImages } from '@components/images';

import React, { ChangeEvent, FC, useEffect } from 'react';

import CurrentWord from './current-word';
import { StepTwoContainer, StepTwoAsideLeft, StepTwoWrapper } from './styled';
import { StepTwoProps } from './types';

const StepTwo: FC<StepTwoProps> = ({ setStep }) => {
    const { transcript, setTranscript, handleCurrentWord } = useApp();

    const handleTextArea = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setTranscript(event.target.value);
    };

    useEffect(() => {
        handleCurrentWord('belas');
    }, []);

    return (
        <StepTwoWrapper>
            <StepTwoContainer>
                <StepTwoAsideLeft>
                    <CurrentWord />
                    <textarea value={transcript} onChange={handleTextArea} />
                </StepTwoAsideLeft>
                <HandleImages />
            </StepTwoContainer>
            <AllSelectedImages />
        </StepTwoWrapper>
    );
};

export default StepTwo;
