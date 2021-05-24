const Scraper = require('images-scraper');

const google = new Scraper({
    puppeteer: {
        headless: false,
    },
});

const imageScraper = async (image) => {
    const results = await google.scrape(image, 200);
    return results;
};

module.exports = imageScraper;
