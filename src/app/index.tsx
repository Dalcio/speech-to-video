import { ThemeProvider } from '@theme';
import React, {
    createContext,
    FC,
    useContext,
    useEffect,
    useMemo,
    useState,
} from 'react';
import {
    AppContextProps,
    AudioFile,
    ImgProps,
    SelectedImageProps,
    VideoFile,
} from './type';

export const AppContext = createContext<AppContextProps>({
    setNewImagesToBeAdded: () => undefined,
    handleCurrentWord: () => undefined,
    setTranscript: () => undefined,
    setTranscripts: () => undefined,
    setAudioFile: () => undefined,
    setVideoFile: () => undefined,
    removeImage: () => undefined,
    addImages: () => undefined,
    imgExist: () => undefined,
    remove: () => undefined,
    previousWord: () => undefined,
    nextWord: () => undefined,
    selectedImages: [],
    transcriptsIndex: undefined,
    audioFile: undefined,
    videoFile: undefined,
    transcript: undefined,
    transcripts: undefined,
    currentWord: undefined,
    newImagesToBeAdded: undefined,
});

export const useApp = () => useContext(AppContext);

export const AppProvider: FC = ({ children }) => {
    const [selectedImages, setSelectedImages] = useState<SelectedImageProps[]>(
        [],
    );
    const [newImagesToBeAdded, setNewImagesToBeAdded] = useState<ImgProps[]>(
        [],
    );
    const [audioFile, setAudioFile] = useState<VideoFile>();
    const [videoFile, setVideoFile] = useState<AudioFile>();
    const [transcript, setTranscript] = useState<string>('');
    const [transcripts, setTranscripts] = useState<string[]>([]);
    const [transcriptsIndex, setTranscriptsIndex] = useState<number>(0);
    const [currentWord, handleCurrentWord] = useState<string>('');

    const addImages = () => {
        const index = selectedImages.findIndex(
            ({ word }) =>
                word.toLowerCase() === currentWord.toLocaleLowerCase(),
        );
        const tmpArr: SelectedImageProps[] = [...selectedImages];

        if (index >= 0) {
            const tmpImg = [...tmpArr[index].images];
            newImagesToBeAdded.map((img) => {
                if (tmpImg.filter(({ url }) => url === img.url).length <= 0) {
                    tmpImg.push(img);
                }
            });
            tmpArr[index].images = tmpImg;
        } else {
            tmpArr.push({
                word: currentWord,
                images: [...newImagesToBeAdded],
            });
        }
        setSelectedImages([...tmpArr]);
    };

    const removeImage = (relatedWord: string, imgUrl: string) => {
        const index = selectedImages.findIndex(
            ({ word }) => word.toLowerCase() === relatedWord.toLowerCase(),
        );
        const tempImages = selectedImages[index].images.filter(
            ({ url }) => url !== imgUrl,
        );
        const tmpSpecificWordImages: SelectedImageProps = {
            ...selectedImages[index],
            images: tempImages,
        };

        const tmpSelectedImages: SelectedImageProps[] = [...selectedImages];
        tmpSelectedImages[index] = tmpSpecificWordImages;

        setSelectedImages([...tmpSelectedImages]);
    };

    const remove = (imgUrl: string) => {
        const tmpArr: ImgProps[] = newImagesToBeAdded.filter(
            ({ url }) => url.toLowerCase() !== imgUrl.toLowerCase(),
        );
        setNewImagesToBeAdded([...tmpArr]);
        removeImage(currentWord, imgUrl);
    };

    const imgExist = (imgUrl: string) => {
        const exist =
            newImagesToBeAdded.filter(
                ({ url }) =>
                    url.toLocaleLowerCase() === imgUrl.toLocaleLowerCase(),
            ).length > 0;
        return exist;
    };

    const previousWord = () => {
        if (transcriptsIndex >= 1) {
            setTranscriptsIndex((prev) => prev - 1);
        }
    };

    const nextWord = () => {
        if (transcriptsIndex < transcripts.length - 1) {
            setTranscriptsIndex((prev) => prev + 1);
        }
    };

    useEffect(() => {
        handleCurrentWord(transcripts[transcriptsIndex]);
    }, [transcriptsIndex]);

    useEffect(() => {
        setTranscripts(transcript.split(' '));
    }, [transcript]);

    useEffect(() => {
        if (currentWord === '' || !currentWord) {
            handleCurrentWord(transcripts[0]);
        }
        if (transcripts.length <= 0) {
            handleCurrentWord('');
        }
    }, [transcripts]);

    useEffect(() => {
        const tmpIndex = selectedImages.findIndex(
            ({ word }) => word.toLowerCase() === currentWord.toLowerCase(),
        );
        if (tmpIndex >= 0) {
            setNewImagesToBeAdded([...selectedImages[tmpIndex].images]);
        }
    }, [selectedImages, currentWord]);

    const values = useMemo(
        () => ({
            selectedImages,
            audioFile,
            videoFile,
            transcript,
            transcripts,
            currentWord,
            newImagesToBeAdded,
            transcriptsIndex,
            nextWord,
            previousWord,
            imgExist,
            setTranscript,
            setTranscripts,
            setAudioFile,
            setVideoFile,
            addImages,
            removeImage,
            handleCurrentWord,
            remove,
            setNewImagesToBeAdded,
        }),
        [
            selectedImages,
            audioFile,
            videoFile,
            transcript,
            transcripts,
            currentWord,
            newImagesToBeAdded,
            transcriptsIndex,
            nextWord,
            previousWord,
            imgExist,
            setTranscript,
            setTranscripts,
            setAudioFile,
            setVideoFile,
            addImages,
            removeImage,
            handleCurrentWord,
            remove,
            setNewImagesToBeAdded,
        ],
    );

    return (
        <AppContext.Provider value={values}>
            <ThemeProvider>{children}</ThemeProvider>
        </AppContext.Provider>
    );
};
