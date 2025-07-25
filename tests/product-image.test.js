const puppeteer = require('puppeteer');
const assert = require('assert');
const path = require('path');
(async () => {
  const filePath = path.resolve(__dirname, 'fixtures/product.html');
  const browser = await puppeteer.launch({args: ['--no-sandbox']});
  const page = await browser.newPage();
  await page.goto('file://' + filePath);
  // Desktop viewport
  await page.setViewport({width: 1280, height: 800});
  let viewerWidth = await page.$eval('.media-gallery__viewer', el => el.clientWidth);
  let imgWidth = await page.$eval('.media-gallery__viewer img', el => el.clientWidth);
  assert(imgWidth >= viewerWidth * 0.95, 'desktop image should fill viewer width');
  // Mobile viewport
  await page.setViewport({width: 375, height: 667});
  await page.reload();
  viewerWidth = await page.$eval('.media-gallery__viewer', el => el.clientWidth);
  imgWidth = await page.$eval('.media-gallery__viewer img', el => el.clientWidth);
  assert(imgWidth >= viewerWidth * 0.95, 'mobile image should fill viewer width');
  // Alignment check
  const styles = await page.evaluate(() => {
    const el = document.querySelector('.media-gallery__viewer');
    const computed = getComputedStyle(el);
    return {display: computed.display, justify: computed.justifyContent, align: computed.alignItems};
  });
  assert(styles.display.includes('flex'), 'viewer should use flexbox');
  assert(styles.justify === 'center', 'image should be horizontally centered');
  assert(styles.align === 'center', 'image should be vertically centered');
  await browser.close();
})();
