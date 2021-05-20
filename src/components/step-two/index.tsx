import { useApp } from '@app-data';
import { HandleImages } from '@components/images';
import React, { ChangeEvent, FC, useEffect } from 'react';
import CurrentWord from './current-word';

import { StepTwoContainer, StepTwoAsideLeft } from './styled';
import { StepTwoProps } from './types';

const StepTwo: FC<StepTwoProps> = ({ setStep }) => {
    const { setTranscript, transcript, handleCurrentWord } = useApp();

    const handleTextArea = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setTranscript(event.target.value);
    };

    useEffect(() => {
        handleCurrentWord('belas');
    }, []);

    return (
        <StepTwoContainer>
            <StepTwoAsideLeft>
                <CurrentWord />
                <textarea value={transcript} onChange={handleTextArea} />
            </StepTwoAsideLeft>
            <HandleImages />
        </StepTwoContainer>
    );
};

export default StepTwo;
