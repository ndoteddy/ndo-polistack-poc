'use strict';

const mockScrappedEvents = [
    {
        eventTitle: 'Scraped Event 1',
        venue: 'Venue A',
        location: 'Hong Kong',
        date: '2025-07-01'
    },
    {
        eventTitle: 'Scraped Event 2',
        venue: 'Venue B',
        location: 'Hong Kong',
        date: '2025-08-15'
    }
];

exports.list_all_event_scrapping = function(req, res) {
    res.json(mockScrappedEvents);
};
