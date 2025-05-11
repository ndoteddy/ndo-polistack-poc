const request = require('request');
const cheerio = require('cheerio');

exports.list_all_event_scrapping = function(req, res) {
    const url = 'https://hongkongcheapo.com/events/';

    request(url, (error, response, html) => {
        if (!error) {
            const $ = cheerio.load(html);
            const json = { event: [] };

            // Scraping event details
            $('.cheapo-preview').each((index, element) => {
                const data = $(element);
                
                // Extract event title
                const eventTitle = data.find('.card__title a').text().trim();
                
                // Extract event date range
                const eventDate = data.find('.card--event__date-box .date').map((i, el) => $(el).text()).get().join(' ~ ').trim();
                
                // Extract event description
                const eventDesc = data.find('.card__excerpt').text().trim();
                
                // Extract event location
                const eventLocation = data.find('.card__category .location').text().trim();
                
                // Extract event category
                const eventCategory = data.find('.card--event__attribute a').text().trim();
                
                // Extract event image URL
                const eventImage = data.find('.card__image img').attr('src');
                
                // Push the scraped data to the JSON array
                json.event.push({
                    eventTitle,
                    eventDate,
                    eventDesc,
                    eventLocation,
                    eventCategory,
                    eventImage
                });
            });

            res.json(json);
        } else {
            console.error(error);
            res.status(500).send('Error scraping events');
        }
    });
};
