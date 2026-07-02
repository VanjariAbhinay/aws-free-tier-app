const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => res.json({ message: "Hello from AWS Free Tier!", status: "healthy" }));

app.get('/api/data', (req, res) => {
  // Simulate CPU work to create measurable bottlenecks for load testing
  let sum = 0; for (let i = 0; i < 1e6; i++) sum += i; 
  res.json({ result: sum, timestamp: new Date(), memory: process.memoryUsage().heapUsed });
});

app.listen(port, () => console.log(`App running on port ${port}`));
