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
    addImages: () => undefined,
    removeImage: () => undefined,
    setAudioFile: () => undefined,
    setVideoFile: () => undefined,
    setTranscript: () => undefined,
    handleCurrentWord: () => undefined,
    imgExist: () => undefined,
    newImagesToBeAdded: undefined,
    currentWord: undefined,
    selectedImages: [],
    audioFile: undefined,
    videoFile: undefined,
    transcript: undefined,
    setNewImagesToBeAdded: () => undefined,
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

export const mockedImages = [mockImages1, mockImages2];

export const AppProvider: FC = ({ children }) => {
    const [selectedImages, setSelectedImages] = useState<SelectedImageProps[]>([
        {
            word: 'belas',
            images: [mockImages3, mockImages1, mockImages4, mockImages2],
        },
        {
            word: 'mulheres',
            images: [mockImages3, mockImages4],
        },
    ]);
    const [newImagesToBeAdded, setNewImagesToBeAdded] = useState<ImgProps[]>(
        [],
    );
    const [audioFile, setAudioFile] = useState<VideoFile>();
    const [videoFile, setVideoFile] = useState<AudioFile>();
    const [transcript, setTranscript] = useState<string>('');
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

    const imgExist = (imgUrl: string) => {
        const exist =
            newImagesToBeAdded.filter(
                ({ url }) =>
                    url.toLocaleLowerCase() === imgUrl.toLocaleLowerCase(),
            ).length > 0;
        return exist;
    };

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
            currentWord,
            newImagesToBeAdded,
            imgExist,
            setTranscript,
            setAudioFile,
            setVideoFile,
            addImages,
            removeImage,
            handleCurrentWord,
            setNewImagesToBeAdded,
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
            addImages,
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
