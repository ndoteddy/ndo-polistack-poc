'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define the Event Schema
var EventSchema = new Schema({
    eventTitle: { type: String },
    address: { type: String },
    desc: { type: String },
    totalGuest: { type: String },
    createdDate: { type: String },
    venueName: { type: String },
    organizerName: { type: String }
});

// Register the model with Mongoose
var Event = mongoose.model('EventSchema', EventSchema, 'Event');  // 'Event' is the collection name

module.exports = Event;  // Export the Event model
