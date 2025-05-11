'use strict';
var Event = require('../models/eventModel');  // Adjust the path if needed

// List all events
exports.list_all_events = function(req, res) {
    Event.find({}, function(err, events) {
        if (err) {
            res.send(err);
        }
        res.json(events);
    });
};

// Create a new event
exports.create_a_event = function(req, res) {
    var newEvent = new Event({
        eventTitle: req.body.eventTitle,
        address: req.body.address,
        desc: req.body.desc,
        totalGuest: req.body.totalGuest,
        createdDate: req.body.createdDate,
        venueName: req.body.venueName,
        organizerName: req.body.organizerName
    });

    newEvent.save(function(err, event) {
        if (err) {
            res.send(err);
        }
        res.json(event);
    });
};
