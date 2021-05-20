import React, { FC } from 'react';
import { faMicrophone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useApp } from '@app-data';

import { AudioProps } from '../types';
import { RecordContainer } from './styled';

export const RecordButton: FC<AudioProps> = ({ setShow, show }) => {
    const { setAudioFile } = useApp();

    return (
        <RecordContainer>
            <FontAwesomeIcon icon={faMicrophone} />
        </RecordContainer>
    );
};
