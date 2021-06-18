import { useApp } from '@app-data';
import { useSnackbar } from '@hooks/use-snackbar';
import useTranslation from 'next-translate/useTranslation';
import React, { FC, useCallback, useState } from 'react';
import { useDropzone as useDropZone } from 'react-dropzone';

import { AudioProps } from '../types';
import { uploadFile } from '../upload';

import { DropZoneContainer } from './styled';

export const DropZone: FC<AudioProps> = ({ setShow, show, setStep }) => {
    const { t } = useTranslation();
    const [selected, setSelected] = useState<string>('');
    const { openErrorSnackbar } = useSnackbar();
    const { setAudioFile } = useApp();

    const onDrop = useCallback((acceptedFile) => {
        uploadFile(acceptedFile[0], setAudioFile, openErrorSnackbar);
    }, []);

    const { getRootProps, getInputProps, isDragActive } = useDropZone({
        onDrop,
        maxFiles: 1,
        accept: 'audio/flac',
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
