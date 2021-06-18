const path = require('path');

const downloadAudio = (audioName) => {
    // const audioPath = path.normalize(`${__dirname}/${audioName}`);
    const audioPath = path.normalize(`${__dirname}/audio-file.flac`);

    return audioPath;
};

module.exports = downloadAudio;
