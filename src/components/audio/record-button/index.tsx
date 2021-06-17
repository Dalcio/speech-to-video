import React, { FC } from 'react';
import AudioReactRecorder, { RecordState } from 'audio-react-recorder';
import { faMicrophone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useApp } from '@app-data';

import { AudioProps } from '../types';
import { RecordContainer } from './styled';
import { useState } from 'react';

export const RecordButton: FC<AudioProps> = ({ setShow, show, setStep }) => {
    const [recordState, setRecordState] = useState<string>();
    const { setAudioFile } = useApp();

    const start = () => {
        setShow('record');
        setRecordState(RecordState.START);
    };

    const stop = () => {
        setRecordState(RecordState.STOP);
    };

    const onStopRecord = (audioData) => {
        setStep(2);
        console.log('audioData', audioData);
    };

    return (
        <>
            <AudioReactRecorder state={recordState} onStop={onStopRecord} />
            <RecordContainer
                onClick={(show === 'record' && stop) || start}
                show={show === 'record'}
            >
                <FontAwesomeIcon icon={faMicrophone} id="text" />
            </RecordContainer>
        </>
    );
};
