const express = require('express');
const redis   = require('redis');
const process   = require('process');

const app = express();
const client = redis.createClient({
    host: 'redis-server', // Match with Name of the Container in Docker Compose File
    port: 6379
});

client.set('visits', 0);

app.get('/', (request, response) => {
    client.get('visits', (error, visits) => {
        response.send(`Visits: ${visits}`);
        client.set('visits', parseInt(visits) + 1);
    });
});

app.get('/break', (request, response) => {
    process.exit(0);
});

app.listen(8081, () => {
    console.log('Listening on Port 8081');
});