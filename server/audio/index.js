const fs = require('fs');
const SpeechToTextV1 = require('ibm-watson/speech-to-text/v1');
const { IamAuthenticator } = require('ibm-watson/auth');
const downloadAudio = require('./download-audio');

const ibmSpeechToText = async (audio, callback) => {
    const audioPath = downloadAudio(audio);

    const speechToText = new SpeechToTextV1({
        authenticator: new IamAuthenticator({
            apikey: process.env.SPEECH_TO_TEXT_IAM_API_KEY,
        }),
        serviceUrl: process.env.SPEECH_TO_TEXT_URL,
    });

    const params = {
        audio: fs.createReadStream(audioPath),
        contentType: 'audio/flac; rate=44100',
    };

    try {
        const response = await speechToText.recognize(params);
        if (response) {
            const alternatives = response.result.results[0].alternatives;
            const bestAlternative = alternatives.sort(
                (a, b) => b.confidence - a.confidence,
            );

            if (callback) {
                callback(bestAlternative[0].transcript);
            }
        }
    } catch (error) {
        console.log(error);
    }
};

module.exports = ibmSpeechToText;
