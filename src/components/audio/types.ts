export type ShowProps = 'both' | 'record' | 'drag';

export type AudioProps = {
    setAudio: (file: File) => void;
    setShow: (show: ShowProps) => void;
    show: ShowProps;
};
