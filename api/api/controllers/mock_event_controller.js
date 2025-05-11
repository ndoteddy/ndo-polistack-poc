'use strict';

const mockEvents = [
    {
        eventTitle: 'Tech Conference 2025',
        address: '123 Tech Street, Hong Kong',
        desc: 'A conference about the latest in tech and AI.',
        totalGuest: 200,
        createdDate: '2025-05-01',
        venueName: 'Asia World Expo',
        organizerName: 'TechCorp'
    },
    {
        eventTitle: 'AI & Machine Learning Workshop',
        address: '456 AI Avenue, Hong Kong',
        desc: 'A workshop on AI and ML development.',
        totalGuest: 100,
        createdDate: '2025-06-15',
        venueName: 'Asia World Expo',
        organizerName: 'AI Innovations'
    }
];

exports.list_all_events = function(req, res) {
    res.json(mockEvents);
};

exports.create_a_event = function(req, res) {
    const newEvent = {
        eventTitle: req.body.eventTitle || 'New Event',
        address: req.body.address || 'Unknown Address',
        desc: req.body.desc || 'No Description',
        totalGuest: req.body.totalGuest || 0,
        createdDate: req.body.createdDate || '2025-01-01',
        venueName: req.body.venueName || 'Unknown Venue',
        organizerName: req.body.organizerName || 'Unknown Organizer'
    };
    res.json(newEvent);
};
