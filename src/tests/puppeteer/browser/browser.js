const puppeteer = require('puppeteer')

const browserInstance = async () => {
  const browser = await puppeteer.launch({
    headless: false,
    ignoreHTTPSErrors: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  })
  return browser
}

module.exports = {
  browserInstance
}
