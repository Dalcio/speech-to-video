export type StepThreeProps = {
    setStep: (step: number) => void;
    setTranscript: (text: string) => void;
    audio: File;
    transcript: string;
};
