const browserInstance = require('./browser/browser')

describe('Word cloud component', () => {
  let browser
  let page
  const SELECTORS = {
    topicComponent: '.cloudComponent',
    topicsOnComponent: '.cloudComponent text',
    singleTopic: ".cloudComponent text[datatype='Berlin']",
    volumeField: "li[datatype='volume']",
    negativeField: "li[datatype='negative']",
    neutralField: "li[datatype='neutral']",
    positiveField: "li[datatype='positive']"
  }

  jest.setTimeout(120000)

  beforeEach(async () => {
    browser = await browserInstance.browserInstance()
    page = await browser.newPage()
    await page.setViewport({width: 1680, height: 1050})
    await page.goto('http://localhost:8080')
  })

  afterEach(async() => {
    await browser.close()
  })

  test('There are Topic Visible on topic cloud', async () => {
    await page.waitForSelector(SELECTORS.topicComponent)
    await page.waitForSelector(SELECTORS.topicsOnComponent)

    const topics = await page.evaluate(() => {
      const results = Array.from(document.querySelectorAll('.cloudComponent text'))
      return results.map(res => res.innerHTML)
    })
    expect(topics).toBeDefined()
    expect(topics.length).toBeGreaterThan(5)
  })

  test('There are possibility to open topic details', async () => {
    await page.waitForSelector(SELECTORS.topicComponent)
    await page.waitForSelector(SELECTORS.topicsOnComponent)

    await page.waitForSelector(SELECTORS.singleTopic)
    await page.click(SELECTORS.singleTopic)
    await page.waitForSelector(SELECTORS.volumeField)

    const volume = await page.evaluate((selector) => {
      const text = document.querySelector(selector).innerText
      const splited = text.split(' ')
      return splited[splited.length - 1]
    }, SELECTORS.volumeField)

    const negative = await page.evaluate((selector) => {
      const text = document.querySelector(selector).innerText
      const splited = text.split(' ')
      return splited[splited.length - 1]
    }, SELECTORS.negativeField)

    const neutral = await page.evaluate((selector) => {
      const text = document.querySelector(selector).innerText
      const splited = text.split(' ')
      return splited[splited.length - 1]
    }, SELECTORS.neutralField)

    const positive = await page.evaluate((selector) => {
      const text = document.querySelector(selector).innerText
      const splited = text.split(' ')
      return splited[splited.length - 1]
    }, SELECTORS.positiveField)

    expect(neutral).toBeDefined()
    expect(volume).toBeDefined()
    expect(negative).toBeDefined()
    expect(positive).toBeDefined()
    expect(parseInt(neutral)).toBeGreaterThan(0)
    expect(parseInt(volume)).toBeGreaterThan(0)
    expect(parseInt(negative)).toBeGreaterThan(0)
    expect(parseInt(positive)).toBeGreaterThan(0)
  })
})
