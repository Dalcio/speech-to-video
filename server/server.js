const express = require('express');
const app = express();
const cors = require('cors');
const imageScraper = require('./image-scraper');

app.use(cors());

app.get('/:image&:length', async (req, res) => {
    const image = req.params.image;
    const length = req.params.length ? req.params.length : 20;

    const imageJson = await imageScraper(image, length);
    return res.json(imageJson);
});

app.get('/:images&audio', async (req, res) => {
    const images = req.params.images;
    const audio = req.params.audio;

    return res.json('responseURL');
});

const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log('a api está rodando na porta', port);
});
