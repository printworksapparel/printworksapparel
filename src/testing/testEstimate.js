const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('http://127.0.0.1:5501/src/request_quote.html',{waitUntil: 'load', timeout: 0}).then(() => {
    console.log('success')
}).catch((res) => {
    console.log('fails', res)
})
  await page.screenshot({path: 'Estimate.png'});

  await browser.close();
})();