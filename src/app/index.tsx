import { ThemeProvider } from '@theme';
import React, { createContext, FC, useContext, useMemo, useState } from 'react';
import {
    AppContextProps,
    AudioFile,
    SelectedImageProps,
    VideoFile,
} from './type';

export const AppContext = createContext<AppContextProps>({
    addImage: () => undefined,
    removeImage: () => undefined,
    setAudioFile: () => undefined,
    setVideoFile: () => undefined,
    setTranscript: () => undefined,
    handleCurrentWord: () => undefined,
    currentWord: undefined,
    selectedImages: [],
    audioFile: undefined,
    videoFile: undefined,
    transcript: undefined,
});

export const useApp = () => useContext(AppContext);

export const AppProvider: FC = ({ children }) => {
    const [selectedImages, setSelectedImages] = useState<SelectedImageProps[]>(
        [],
    );
    const [audioFile, setAudioFile] = useState<VideoFile>();
    const [videoFile, setVideoFile] = useState<AudioFile>();
    const [transcript, setTranscript] = useState<string>('');
    const [currentWord, handleCurrentWord] = useState<string>('');

    const addImage = (imgId: string) => {
        alert('adding the file');
    };

    const removeImage = (imgId: string) => {
        alert('removing the file');
    };

    const values = useMemo(
        () => ({
            selectedImages,
            audioFile,
            videoFile,
            transcript,
            currentWord,
            setTranscript,
            setAudioFile,
            setVideoFile,
            addImage,
            removeImage,
            handleCurrentWord,
        }),
        [
            selectedImages,
            audioFile,
            videoFile,
            transcript,
            currentWord,
            setTranscript,
            setAudioFile,
            setVideoFile,
            addImage,
            removeImage,
            handleCurrentWord,
        ],
    );

    return (
        <AppContext.Provider value={values}>
            <ThemeProvider>{children}</ThemeProvider>
        </AppContext.Provider>
    );
};
