import express from 'express';  // ES module import
import fs from 'fs';           // ES module import

const app = express();  // Creating Express application

// Middleware to parse JSON requests
app.use(express.json());  // This middleware allows us to read JSON data sent in the body of POST requests

// Endpoint for tracking events
app.post('/track', (req, res) => {
    const data = req.body;  // Get data sent from the front end in the body of the request

    // Write the received data to a log file
    fs.appendFile('logs.txt', JSON.stringify(data) + '\n', (err) => {
        if (err) {  // If there is an error writing to the file
            console.error('Failed to log data:', err);
            res.status(500).send('Error logging data');  // Responding with an error
        } else {
            res.status(200).send('Data logged');  // Responding with success
        }
    });  // Closing the fs.appendFile method
});  // Closing the app.post method

// Get request for root route
app.get('/', (req, res) => {
    res.send('Tracking server is running. Use POST /track to log data.');
});

// Start the server on port 3001
app.listen(3001, () => console.log('Tracking server running on port 3001'));
