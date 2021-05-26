const fs = require('fs');
const puppeteer = require('puppeteer');

(async () => {
    try {
        const browser = await puppeteer.launch({
            headless: false,
        });
        const page = await browser.newPage();

        console.log('here 1');

        await page.goto(
            'https://www.google.com/search?q=batata&source=lnms&tbm=isch',
            {
                waitUntil: 'networkidle0',
                timeout: 0,
            },
        );

        console.log('here 2');

        const issueImages = await page.evaluate(() => {
            const images = Array.from(
                document.querySelectorAll('.rg_i.Q4LuWd'),
            ).map(({ getAttribute }) => ({
                src: getAttribute('src'),
                alt: getAttribute('alt'),
            }));
            return images;
        });

        fs.writeFileSync('./data.json', JSON.stringify(issueImages));
        console.log('File is created!');

        await browser.close();
    } catch (error) {
        console.log(error);
    }
})();
