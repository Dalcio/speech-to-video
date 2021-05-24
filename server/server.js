const express = require('express');
const app = express();
const cors = require('cors');
const imageScraper = require('./image-scraper');

app.use(cors());

app.get('/:image', async (req, res) => {
    const image = req.params.image;

    const imageJson = await imageScraper(image);

    return res.json(imageJson);
});

const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log('a api está rodando na porta', port);
});
