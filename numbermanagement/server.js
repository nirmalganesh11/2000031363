const express = require('express');
const axios = require('axios');

const app = express();

app.get('/numbers', async (req, res) => {
   const urls = req.query.url;
   const numbers = [];

   for (const url of urls) {
      try {
         const response = await axios.get(url);
         numbers.push(...response.data.numbers);
      } catch (error) {
         console.error(`Failed to fetch numbers from ${url}: ${error.message}`);
      }
   }

   res.send({ numbers });
});

app.listen(8008, () => {
   console.log('Server is running on port 8008');
});
