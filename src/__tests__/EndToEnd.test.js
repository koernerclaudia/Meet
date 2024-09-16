import puppeteer from 'puppeteer';

describe('show/hide event details', () => {
  let browser;
  let page;
  beforeAll(async () => {
    browser = await puppeteer.launch({
      headless: false,
      slowMo: 250, // slow down by 250ms,
      timeout: 0 // removes any puppeteer/browser timeout limitations (this isn't the same as the timeout of jest)
    });
    page = await browser.newPage();
    await page.goto('http://localhost:3000/');
    await page.waitForSelector('.event');
  });

  afterAll(() => {
    browser.close();
  });

  test('An event element is collapsed by default', async () => {
    const eventDetails = await page.$('.event .details');
    expect(eventDetails).toBeNull();
  });

  test('User can expand an event to see details', async () => {
    await page.click('.event .details-btn');
    const eventDetails = await page.$('.event .details');
    expect(eventDetails).toBeDefined();
  });

  test('User can collapse an event to hide details', async () => {
    await page.click('.event .details-btn');
    const eventDetails = await page.$('.event .details');
    expect(eventDetails).toBeNull();
  });
});

describe('filter events by city', () => {
  let browser;
  let page;
  beforeAll(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
    await page.goto('http://localhost:3000/');
    await page.waitForSelector('.event');
  });

  afterAll(() => {
    browser.close();
  });

  test('When user has not searched for a city, show upcoming events from all cities', async () => {
    const eventList = await page.$$('.event');
    expect(eventList.length).toBe(32);
  });

  test('User should see a list of suggestions when they search for a city', async () => {
    await page.click('#city-search input');
    await page.keyboard.type('Berlin');
    await page.waitForSelector('#city-search .suggestions li');
    const suggestions = await page.$$('#city-search .suggestions li');
    expect(suggestions.length).toBeGreaterThan(0);
  });

  test('User can select a city from the suggested list', async () => {
    const timeout = 50000;
    await page.click('#city-search input');
    await page.keyboard.type('Berlin');
    await page.waitForSelector('#city-search .suggestions li', { timeout });

    // Find the suggestion that contains "Berlin, Germany"
    const berlinSuggestion = await page.evaluate(() => {
      const suggestions = Array.from(document.querySelectorAll('#city-search .suggestions li'));
      return suggestions.find(suggestion => suggestion.textContent.includes('Berlin, Germany'));
    });

    if (!berlinSuggestion) {
      throw new Error('Could not find "Berlin, Germany" in the suggestions list');
    }

    // Click the "Berlin, Germany" suggestion
    await page.evaluate((element) => element.click(), berlinSuggestion);
    
    // Wait for the input value to update
    await page.waitForFunction(
      () => document.querySelector('#city-search input').value === 'Berlin, Germany',
      { timeout }
    );

    const searchInputValue = await page.$eval('#city-search input', el => el.value);
    expect(searchInputValue).toBe('Berlin, Germany');

    await page.waitForSelector('.event', { timeout });
    const eventList = await page.$$('.event');
    expect(eventList.length).toBeGreaterThan(0);

    const eventLocations = await page.$$eval('.event .location', locations => locations.map(loc => loc.textContent));
    const allLocationsMatchBerlin = eventLocations.every(location => location.includes('Berlin'));
    expect(allLocationsMatchBerlin).toBe(true);
  });

});

