const express = require('express');
const fs = require('fs');

const app = express();
const PORT = 3000;

// Middleware to parse request body as JSON
app.use(express.json());

// Endpoint to save the message
app.post('/api/save-message', (req, res) => {
  const message = req.body.message;

  // Save the message to a text file
  fs.appendFile('messages.txt', message + '\n', (err) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Failed to save the message' });
    } else {
      console.log('Message saved:', message);
      res.status(200).json({ success: true });
    }
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
