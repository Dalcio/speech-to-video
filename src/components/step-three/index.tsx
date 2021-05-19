import React, { FC } from 'react';
import { StepThreeWrapper } from './styled';
import { StepThreeProps } from './type';

const StepThree: FC<StepThreeProps> = ({
    audio,
    setStep,
    setTranscript,
    transcript,
}) => {
    return <StepThreeWrapper>Step Three</StepThreeWrapper>;
};

export default StepThree;
