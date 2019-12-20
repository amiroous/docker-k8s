const express = require('express');
const app = express();

app.get('/', (request, response) => {
    response.send('Web App is Running.')
});

app.listen(8080, () => {
    console.log('Listening on Port 8080');
});