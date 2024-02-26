// server.js (or your main server file)

const express = require('express');
const app = express();
const PORT = 5000;

// Your static data
const staticData = [
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' },
  { id: 3, name: 'Item 3' },
];

// Route to get static data
app.get('/api/static-data', (req, res) => {
  res.json(staticData);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
