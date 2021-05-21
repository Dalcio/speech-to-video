export type AppContextProps = {
    audioFile: AudioFile;
    selectedImages: SelectedImageProps[];
    videoFile: VideoFile;
    transcript: string;
    currentWord: string;
    newImagesToBeAdded: ImgProps[];
    imgExist: (imgUrl: string) => boolean;
    addImages: () => void;
    removeImage: (relatedWord: string, imgUrl: string) => void;
    setAudioFile: (audioFile: AudioFile) => void;
    setVideoFile: (videoFile: VideoFile) => void;
    setTranscript: (transcript: string) => void;
    handleCurrentWord: (currentWord: string) => void;
    setNewImagesToBeAdded: (img: ImgProps[]) => void;
};

export type AudioFile = {
    src: string;
};

export type VideoFile = {
    src: string;
};

export type SelectedImageProps = {
    word: string;
    images: ImgProps[];
};

export type ImgProps = {
    url: string;
    alt: string;
    isSelected: boolean;
};
