import express from 'express';  // Import Express.js to handle HTTP requests
import fs from 'fs';            // Import the file system module to write logs to a file
import path from 'path';        // Import the 'path' module to work with file paths
import cors from 'cors';        // Import CORS module to allow cross-origin requests

const app = express();         // Create an Express application

// Use CORS middleware
app.use(cors());

// Middleware to parse JSON requests
app.use(express.json());       // This middleware allows us to read JSON data sent in the body of POST requests

// Endpoint for tracking events
app.post('/track', (req, res) => {
  const data = req.body;      // Data from the frontend
  console.log(data);          // Log the received data to the console for debugging
  
  // Correct path setup for logs.txt (assumes logs.txt is in the same directory as this file)
  const logFilePath = path.join(__dirname, 'logs.txt');  

  // Append the received data to the logs.txt file
  fs.appendFile(logFilePath, JSON.stringify(data) + '\n', (err) => {
    if (err) {
      console.error('Failed to log data:', err);
      return res.status(500).send('Error logging data');
    }
    res.status(200).send('Data logged');  // Responding with success if data is logged successfully
  });
});

// Simple GET endpoint to confirm the server is running
app.get('/', (req, res) => {
  res.send('Tracking server is running. Use POST /track to log data.');
});

// Start the server
app.listen(3001, () => console.log('Tracking server running on port 3001'));
