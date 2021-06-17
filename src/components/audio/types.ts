export type ShowProps = 'both' | 'record' | 'drag';

export type AudioProps = {
    setStep: (step: number) => void;
    setShow: (show: ShowProps) => void;
    show: ShowProps;
};
