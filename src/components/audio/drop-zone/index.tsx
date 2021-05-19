import useTranslation from 'next-translate/useTranslation';
import React, { FC, useCallback, useState } from 'react';
import { useDropzone as useDropZone } from 'react-dropzone';
import { AudioProps } from '../types';

import { DropZoneContainer } from './styled';

export const DropZone: FC<AudioProps> = ({ setAudio, setShow, show }) => {
    const { t } = useTranslation();
    const [selected, setSelected] = useState<string>('');

    const onDrop = useCallback((acceptedFile) => {
        // Do something with the files
        setSelected('audio name');
    }, []);

    const { getRootProps, getInputProps, isDragActive } = useDropZone({
        onDrop,
        maxFiles: 1,
        accept: 'audio/*',
    });

    return (
        <DropZoneContainer {...getRootProps()} isDragActive={isDragActive}>
            <input {...getInputProps()} />
            {isDragActive ? (
                <p>{t`home:step-one.drag-n-drop.active`}</p>
            ) : (
                <p>
                    {(selected === '' &&
                        t`home:step-one.drag-n-drop.inactive`) ||
                        selected}
                </p>
            )}
        </DropZoneContainer>
    );
};
