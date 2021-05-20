import StepOne from '@components/step-one';
import StepTwo from '@components/step-two';
import React, { FC, useState } from 'react';

import { BodyContainer } from './styled';

export const Body: FC = () => {
    const [step, setStep] = useState<number>(1 + 1);

    return (
        <BodyContainer>
            {(step === 1 && <StepOne setStep={setStep} />) ||
                (step === 2 && <StepTwo setStep={setStep} />)}
        </BodyContainer>
    );
};
