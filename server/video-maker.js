const VideoConverter = require('./video');

const mockImages = [
    'https://placekitten.com/450/300',
    'https://placekitten.com/550/500',
    'https://s1.cdn.autoevolution.com/images/news/arctic-trucks-gigantic-ford-f-150-lariat-is-the-hulk-of-pickups-150464_1.jpg',
];

const videoMaker = async (images, audio = '') => {
    const videoConverter = new VideoConverter({}, {});

    videoConverter.downloadImages(images, () => {
        videoConverter.makeVideo();
    });

    // const audioFile = videoConverter.downloadAudio(audio);
};

videoMaker(mockImages);

module.exports = videoMaker;
