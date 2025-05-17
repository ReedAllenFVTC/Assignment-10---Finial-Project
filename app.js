const express = require('express');
const app = express();
const port = 3000;

const path = require('path');
const root = path.join(__dirname, 'public');

app.use(express.json());
app.use(express.static('public'));

app.get('/', (request, response) => {
    response.sendFile('index.html', { root });
});

const menuRouter = require('./api/site');
app.use('/menuItems', menuRouter);

app.get('/', (request, response) => {
    response.sendFile('menu.html', { root });
});

app.listen(port, () => console.log(`✅ Listening on http://localhost:${port}`));
