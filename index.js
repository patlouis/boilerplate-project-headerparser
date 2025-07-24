// index.js
require('dotenv').config();
var express = require('express');
var app = express();
var cors = require('cors');

// Enable CORS
app.use(cors({ optionsSuccessStatus: 200 }));

// Serve static files
app.use(express.static('public'));

// Serve homepage
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

// Test endpoint
app.get('/api/hello', function (req, res) {
  res.json({ greeting: 'hello API' });
});

// ✅ WHOAMI endpoint
app.get('/api/whoami', function (req, res) {
  res.json({
    ipaddress: req.ip,
    language: req.headers['accept-language'],
    software: req.headers['user-agent']
  });
});

// Start the server
var listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
