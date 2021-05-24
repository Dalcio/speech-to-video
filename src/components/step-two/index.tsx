import { useApp } from '@app-data';
import { AllSelectedImages } from '@components/all-selected-images';
import { HandleImages } from '@components/images';
import useTranslation from 'next-translate/useTranslation';

import React, { ChangeEvent, FC, useEffect } from 'react';

import CurrentWord from './current-word';
import {
    StepTwoContainer,
    StepTwoAsideLeft,
    StepTwoWrapper,
    TransformBtn,
} from './styled';
import { StepTwoProps } from './types';

const StepTwo: FC<StepTwoProps> = ({ setStep }) => {
    const { t } = useTranslation();
    const { transcript, setTranscript, handleCurrentWord } = useApp();

    const handleTextArea = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setTranscript(event.target.value);
    };

    useEffect(() => {
        handleCurrentWord('belas');
    }, []);

    const goToTransformStep = () => {
        setStep(3);
    };

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
            <TransformBtn
                onClick={goToTransformStep}
            >{t`home:step-two.labels.transform`}</TransformBtn>
        </StepTwoWrapper>
    );
};

export default StepTwo;
