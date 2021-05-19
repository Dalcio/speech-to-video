import React, { FC } from 'react';
import { faMicrophone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { AudioProps } from '../types';
import { RecordContainer } from './styled';

export const RecordButton: FC<AudioProps> = ({ setAudio, setShow, show }) => {
    return (
        <RecordContainer>
            <FontAwesomeIcon icon={faMicrophone} />
        </RecordContainer>
    );
};
