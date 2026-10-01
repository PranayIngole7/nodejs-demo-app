const http = require('http');

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  // New feature: Health check endpoint
  if (req.url === '/health') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ status: 'UP', uptime: process.uptime() }));
    return;
  }

  // Existing root route (kept as is)
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Welcome! Continuous Integration Pipeline with GitHub Actions is running successfully.\n');
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});