import { useApp } from '@app-data';
import React from 'react';
import { VideoContainer } from './styled';

export const Video: React.FC = () => {
    const { selectedImages } = useApp();

    return <VideoContainer></VideoContainer>;
};
