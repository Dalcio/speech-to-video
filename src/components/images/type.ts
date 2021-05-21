import { ImgProps } from '@app-data/type';

export type ExtendedImgProps = ImgProps & {
    add?: () => void;
    remove: () => void;
};
