import React, { FC } from 'react';
import { faMicrophone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useApp } from '@app-data';

import { AudioProps } from '../types';
import { RecordContainer } from './styled';

export const RecordButton: FC<AudioProps> = ({ setShow, show, setStep }) => {
    const { setAudioFile } = useApp();

    const onStartRecord = () => {
        setShow('record');
    };

    const onStopRecord = () => {
        setStep(2);
    };

    return (
        <RecordContainer onClick={onStartRecord} show={show === 'record'}>
            <FontAwesomeIcon icon={faMicrophone} id="text" />
        </RecordContainer>
    );
};
