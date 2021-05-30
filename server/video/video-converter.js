const videoshow = require('videoshow');
const downloadImage = require('image-downloader').image;
const path = require('path');
const fs = require('fs');

// var upload_video = require('./video_upload.js');

class VideoConverter {
    constructor(
        imagesParams = {},
        audioParams = {},
        videoName = 'video-file-converted',
    ) {
        this.audio = undefined;
        this.images = [];
        this.video = undefined;
        this.imagesParams = imagesParams;
        this.audioParams = audioParams;
        this.videoName = videoName;
    }

    async downloadImages(images) {
        if (!Array.isArray(images)) throw new Error('Invalid set of images');

        const dest = path.normalize(`${__dirname}/downloads/images`);

        const recursiveDownload = async (index = 0) => {
            if (index === images.length) return;

            downloadImage({ url: images[index], dest })
                .then(async ({ filename: oldName }) => {
                    console.log();
                    const extname = !path.extname(oldName)
                        ? '.png'
                        : path.extname(oldName);
                    const newPath = path.normalize(
                        `${__dirname}/downloads/images/image_${index}${extname}`,
                    );
                    fs.renameSync(oldName, newPath);
                    this.images.push(newPath);
                    await recursiveDownload(index + 1);
                })
                .catch((err) => console.log(err));
        };

        await recursiveDownload();
    }

    async _deleteAllFiles() {
        if (this.images) {
            this.images.forEach((path) => fs.rmSync(path));
            this.images = [];
        }
        if (this.audio) {
            fs.rmSync(this.audio);
            this.audio = undefined;
        }
        if (this.video) {
            fs.rmSync(this.video);
            this.video = undefined;
        }
    }

    async _uploadVideo() {
        // upload_video();
    }

    async downloadAudio(audio) {
        //
    }

    async makeVideo() {
        if (!this.images) throw new Error('Invalid set of images');
        videoshow(this.images)
            .audio(this.audio, this.audioParams)
            .save(`${this.videoName}.mp4`)
            .on('start', function (command) {
                console.log('ffmpeg process started:', command);
            })
            .on('error', function (err) {
                console.error('Error:', err);
            })
            .on('end', function (output) {
                console.log('Video created in:', output);

                this._deleteAllFiles();
            });
    }
}

module.exports = VideoConverter;
