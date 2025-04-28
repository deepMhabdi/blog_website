const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

// Load JSON file
const jsonData = JSON.parse(fs.readFileSync('data.json', 'utf8'));

// API route to return the JSON data
app.get('/api/data', (req, res) => {
  res.json(jsonData);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
