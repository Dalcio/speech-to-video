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
    imgExist: () => undefined,
    currentWord: undefined,
    selectedImages: [],
    audioFile: undefined,
    videoFile: undefined,
    transcript: undefined,
});

export const useApp = () => useContext(AppContext);

const mockImages1 = {
    alt: 'React JS',
    isSelected: true,
    url: 'https://blog.logrocket.com/wp-content/uploads/2018/06/React-createref-DOM.png',
};
const mockImages2 = {
    alt: 'Two people using a computer to hide the scrollbar using CS',
    isSelected: true,
    url: 'https://blog.hubspot.com/hubfs/Google%20Drive%20Integration/How%20to%20Hide%20the%20Scollbar%20in%20CSS.jpeg',
};
const mockImages3 = {
    alt: 'Adriana Barbosa Ilustração: Davi Augusto/VOCÊ S/A',
    isSelected: true,
    url: 'https://vocesa.abril.com.br/wp-content/uploads/2020/04/abre-adriana-01.jpg?quality=70&strip=info&w=225',
};
const mockImages4 = {
    alt: 'Trator',
    isSelected: true,
    url: 'https://miro.medium.com/max/2800/1*Gflf0YTQmugEesBFVzJQ2A.jpeg',
};

export const mockedImages = [
    mockImages1,
    mockImages2,
    mockImages3,
    mockImages4,
];

export const AppProvider: FC = ({ children }) => {
    const [selectedImages, setSelectedImages] = useState<SelectedImageProps[]>([
        {
            word: 'belas',
            images: mockedImages,
        },
        {
            word: 'mulheres',
            images: mockedImages.reverse(),
        },
    ]);
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

    const imgExist = (imgUrl: string) => {
        const currentWordImages = selectedImages.filter(
            ({ word }) => word.toLowerCase() === currentWord.toLowerCase(),
        );
        if (currentWordImages.length === 0) return false;

        const exist =
            currentWordImages[0].images.filter(
                ({ url }) =>
                    url.toLocaleLowerCase() === imgUrl.toLocaleLowerCase(),
            ).length > 0;
        return exist;
    };

    const values = useMemo(
        () => ({
            selectedImages,
            audioFile,
            videoFile,
            transcript,
            currentWord,
            imgExist,
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
