import { DropZone, RecordButton } from '@components/audio';
import { ShowProps } from '@components/audio/types';
import useTranslation from 'next-translate/useTranslation';
import React, { FC, useState } from 'react';

import { StepOneContainer, StepOneWrapper, TextContainer } from './styled';
import { StepOneProps } from './type';

const StepOne: FC<StepOneProps> = ({ setStep }) => {
    const { t } = useTranslation();
    const [show, setShow] = useState<ShowProps>('both');

    return (
        <StepOneWrapper>
            <TextContainer>
                <h2>{t`home:step-one.title`}</h2>
                <p>{t`home:step-one.message`}</p>
            </TextContainer>
            <StepOneContainer>
                {(show === 'both' || show === 'drag') && (
                    <DropZone setShow={setShow} show={show} setStep={setStep} />
                )}
                {(show === 'both' || show === 'record') && (
                    <RecordButton
                        setShow={setShow}
                        show={show}
                        setStep={setStep}
                    />
                )}
            </StepOneContainer>
        </StepOneWrapper>
    );
};

export default StepOne;
