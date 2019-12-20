const express = require('express');
const redis   = require('redis');

const app = express();
const client = redis.createClient();

app.get('/', (request, response) => {
    client.set('visits', 0);
    client.get('visits', (error, visits) => {
        response.send(`Visits: ${visits}`);
        client.set('visits', visits++);
    });
});

app.listen(8081, () => {
    console.log('Listening on Port 8081');
});