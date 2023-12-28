const express = require('express');
const cors = require('cors'); // Import the cors package
const app = express();
const port = 3001;

// Enable CORS for all routes
app.use(cors());

app.get('/api/data', (req, res) => {
  // Your backend logic here
  res.json({ message: 'Hello from the backend!' });
});

app.listen(port, () => {
  console.log(`Backend server is running at http://localhost:${port}`);
});
