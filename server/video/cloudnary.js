const cloudinary = require('cloudinary').v2;

const cloud_name = 'dnqpltfwo';
const api_key = '992422767262645';
const api_secret = 'UfAScSck9L7etvCp1Y3Yd3ah7hw';

cloudinary.config({
    cloud_name,
    api_key,
    api_secret,
});

module.exports = cloudinary;
