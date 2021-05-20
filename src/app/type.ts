export type AppContextProps = {
    audioFile: AudioFile;
    selectedImages: SelectedImageProps[];
    videoFile: VideoFile;
    transcript: string;
    currentWord: string;
    imgExist: (imgUrl: string) => boolean;
    addImage: (imgId: string) => void;
    removeImage: (imgId: string) => void;
    setAudioFile: (audioFile: AudioFile) => void;
    setVideoFile: (videoFile: VideoFile) => void;
    setTranscript: (transcript: string) => void;
    handleCurrentWord: (currentWord: string) => void;
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
