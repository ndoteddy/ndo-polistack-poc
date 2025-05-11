const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');

const app = express();
const port = 3000;
const TARGET_URL = 'https://technext.github.io/furn./';

// Root route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// New Arrivals
app.get('/newarrivals', async (req, res) => {
  try {
    const data = await extractData('newArrival');
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).send('Failed to fetch new arrivals');
  }
});

// Featured Products
app.get('/featureproducts', async (req, res) => {
  try {
    const data = await extractData('featureProducts');
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).send('Failed to fetch featured products');
  }
});

// Scraping logic
async function extractData(type) {
  const response = await axios.get(TARGET_URL);
  const $ = cheerio.load(response.data);
  const results = [];

  if (type === 'newArrival') {
    $('.single-new-arrival').each((_, el) => {
      const product = $(el).find('h4 > a').text().trim();
      const price = $(el).find('.arrival-product-price').text().trim();
      results.push({ product, price });
    });
  }

  if (type === 'featureProducts') {
    $('.single-feature-txt').each((_, el) => {
      const product = $(el).find('h3 > a').text().trim();
      const price = $(el).find('h5').text().trim();
      results.push({ product, price });
    });
  }

  return results;
}

// Start server
app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});
