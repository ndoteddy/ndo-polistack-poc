'use strict';

module.exports = function(app) {
    // Mocking the controllers for testing
    const real_eventController = require('../controllers/event_controller');
    const real_scrappingController = require('../controllers/event_scrapper_controller');

    const mock_eventController = require('../controllers/mock_event_controller');
    const mock_scrappingController = require('../controllers/mock_event_scrapper_controller');

    // Routes for event controller (MongoDB data)
    app.route('/event')
        .get(real_scrappingController.list_all_event_scrapping)   // This will now use the mocked data
        .post(mock_eventController.create_a_event);  // Mock the creation process

    // Route for scrapping controller (external website data)
    app.route('/event/scrapping')
        .get(mock_scrappingController.list_all_event_scrapping);  // Mock scrapping data
};
