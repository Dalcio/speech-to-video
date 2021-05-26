const Scraper = require('./scraper/index.js');

const google = new Scraper({
    puppeteer: {
        headless: false,
    },
});

const imageScraper = async (image) => {
    try {
        const results = await google.scrape(image, 20);
        return results;
    } catch (error) {
        return [];
    }
};

module.exports = imageScraper;
