const puppeteer = require('puppeteer-core');
const { browser_path } = require('./config.json');
/* 
    Explanation: this file will open a browser (your desired browser, which can be
    configured inside the included config.json), turn microphone access on, and
    click the translate by mic function.
*/
(async () => {
    let launchOptions = { headless: false, 
                          executablePath: browser_path,
                          args: ['--use-fake-ui-for-media-stream'] };

    const browser = await puppeteer.launch(launchOptions);
    const [page] = await browser.pages();

    // go to the target web
    // coccoc://settings/content/microphone?search=microphone
    await page.goto('https://translate.google.com/?sl=ja&tl=en&op=translate', { waitUntil: 'networkidle0' });
    await page.waitForSelector('button[jsname="Sz6qce"]');
    await page.click('button[jsname="Sz6qce"]');
    console.log(await browser.version());

})();