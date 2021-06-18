export type ShowProps = 'both' | 'record' | 'drag';

export type AudioProps = {
    setShow: (show: ShowProps) => void;
    show: ShowProps;
};
