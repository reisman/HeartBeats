const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const handler = require('./handler');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/heartbeat', (req, res) => {
    const message = req.body;
    handler.handleHeartBeatData(message);
    res.sendStatus(200);
});

app.listen(3000, () => {
    console.log('Listening on http://localhost:3000');
});