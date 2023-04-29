var http = require('http');
const express = require('express');
const axios = require('axios');
const app = express();

const TIMEOUT_MS = 500;

app.get('/numbers', async (req, res) => {
  const urls = req.query.url;

  // Check if query parameter is provided
  if (!urls) {
    res.status(400).send({ error: 'Missing url parameter' });
    return;
  }
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/')