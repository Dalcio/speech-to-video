const sharp = require('sharp');
const sizeOfImage = require('image-size');
const videoshow = require('videoshow');
const downloadImage = require('image-downloader').image;
const path = require('path');
const fs = require('fs');
const { throws } = require('node:assert');

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
        this.imageDim = [];
    }

    async downloadImages(images, callback) {
        if (!Array.isArray(images)) throw new Error('Invalid set of images');
        const dest = path.normalize(`${__dirname}/files/images`);

        const recursiveDownload = (index = 0) => {
            if (index === images.length) {
                this.resizeImages();
                if (callback) return callback();
                return;
            }

            downloadImage({ url: images[index], dest })
                .then(async ({ filename: oldName }) => {
                    const extname = !path.extname(oldName)
                        ? '.png'
                        : path.extname(oldName);
                    const newPath = path.normalize(
                        `${__dirname}/files/images/image_${index}${extname}`,
                    );
                    fs.renameSync(oldName, newPath);
                    this.images.push(newPath);
                    const dim = sizeOfImage(newPath);
                    if (this.imageDim.length === 0 || !this.imageDim) {
                        this.imageDim.push(dim.width);
                        this.imageDim.push(dim.height);
                    } else {
                        if (dim.width < this.imageDim.width)
                            this.imageDim[0] = dim.width;
                        if (dim.height < this.imageDim.height)
                            this.imageDim[1] = dim.height;
                    }

                    await recursiveDownload(index + 1);
                })
                .catch((err) => console.log(err));
        };

        recursiveDownload();
    }

    async downloadAudio(audio) {
        //
    }

    async unlinkImages() {
        const imagesFolder = path.normalize(`${__dirname}/files/images/`);

        this.images = [];
        const imagesFiles = fs.readdirSync(imagesFolder);

        imagesFiles.map((img) => {
            const dir = `${__dirname}/files/images/${img}`;
            fs.unlinkSync(dir);
        });
    }

    async unlinkVideo() {
        fs.unlinkSync(this.video);
    }

    async unlinkAudio() {
        fs.unlinkSync(this.audio);
    }

    async _uploadVideo() {
        // upload_video();
    }

    async resizeImages() {
        if (this.images.length === 0 || !this.images) {
            throw new Error('Invalid set of images');
        }

        if (this.imageDim.length === 0 || !this.imageDim) {
            throw new Error('invalid dimensions');
        }

        const tmpImgs = [];
        const w = this.imageDim[0];
        const h = this.imageDim[1];

        this.images.map((url, index) => {
            const newPath = path.normalize(
                `${__dirname}/files/images/image_${index}.png`,
            );

            tmpImgs.push(newPath);
            sharp(url)
                .rotate()
                .resize(w, h)
                .png()
                .toBuffer()
                .then((data) => {
                    fs.writeFileSync(newPath, data);
                })
                .catch((err) => {
                    console.log(err);
                });
        });

        this.images = tmpImgs;
    }

    async makeVideo() {
        if (this.images.length === 0 || !this.images)
            throw new Error('Invalid set of images');

        const pathToSave = path.normalize(
            `${__dirname}/files/${this.videoName}.mp4`,
        );

        // .audio(audio, audioParams)
        videoshow(this.images)
            .save(pathToSave)
            .on('start', (command) => {
                // console.log('ffmpeg process started:', command);
            })
            .on('error', (err) => {
                throws(err);
            })
            .on('end', (output) => {
                // console.log('Video created in:', output);
                this.unlinkImages();
            });
    }
}

module.exports = VideoConverter;
