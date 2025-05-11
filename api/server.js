require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./api/routes/mainroutes');

const app = express();
const port = process.env.PORT || 3000;

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Credentials', true);
    next();
});

// Mock data for events (Simulating MongoDB data)
const mockEvents = [
    {
        eventTitle: "Tech Conference 2025",
        address: "123 Tech Avenue, Silicon Valley, CA",
        desc: "A conference about the future of technology.",
        totalGuest: 500,
        createdDate: "2025-06-15",
        venueName: "Tech Arena",
        organizerName: "Tech World Inc."
    },
    {
        eventTitle: "Health and Wellness Expo",
        address: "456 Wellness St, Los Angeles, CA",
        desc: "A convention focused on health and wellness.",
        totalGuest: 300,
        createdDate: "2025-07-10",
        venueName: "Wellness Center",
        organizerName: "Wellness Co."
    }
];

// Replace mongoose code with mock data
// const dbUrl = `mongodb://${process.env.DB_USER}:${process.env.DB_PASS}${process.env.DB_URL}`;
// console.log(dbUrl);

// mongoose.Promise = global.Promise;
// mongoose.connect(dbUrl, (err) => {
//     if (err) {
//         console.error('Unable to connect to the mongoDB server. Error:', err);
//     } else {
//         console.log('Connection established to', dbUrl);
//     }
// });

// Simulate retrieving events from database (mock)
const getEvents = (req, res) => {
    res.json(mockEvents);
};

// Routes setup
routes(app);

// Example route to get all events
app.route('/event')
    .get(getEvents);

// Middleware to parse JSON and urlencoded data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
