import StepOne from '@components/step-one';
import StepTwo from '@components/step-two';
import React, { useState } from 'react';

import { BodyContainer } from './styled';

export const Body: React.FC = () => {
    const [step, setStep] = useState<number>(1);
    const [transcript, setTranscript] = useState<string>();
    const [audio, setAudio] = useState<File>();

    return (
        <BodyContainer>
            {(step === 1 && (
                <StepOne
                    setStep={setStep}
                    setAudio={setAudio}
                    setTranscript={setTranscript}
                />
            )) ||
                (step === 2 && (
                    <StepTwo
                        audio={audio}
                        setStep={setStep}
                        transcript={transcript}
                        setTranscript={setTranscript}
                    />
                ))}
        </BodyContainer>
    );
};
