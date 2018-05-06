const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const apiRouter = require('./routes/api.router');
const PORT = 3000;

app.use(bodyParser.json());

app.use('/api', apiRouter);

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}...`);
});