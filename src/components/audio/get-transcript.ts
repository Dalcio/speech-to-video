import { KEYS } from '@constants';
import axios from 'axios';
import { UrlBuilder } from 'http-url-builder';

export const getTranscript = async (
    audioUrl,
    successCallback,
    failCallback,
) => {
    try {
        const url = new UrlBuilder(KEYS.localhost)
            .addPath('speech-to-text')
            .addQueryParam('audio', audioUrl)
            .build();

        const response = await (await fetch(url)).json();

        if (response) {
            if (successCallback) {
                successCallback(response);
            }
        }
    } catch (error) {
        failCallback(`common:errors.something-wrong-general`);
    }
};
