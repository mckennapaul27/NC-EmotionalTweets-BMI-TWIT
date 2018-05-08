const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const apiRouter = require('./routes/api.router');
const smartTweetRouter = require('./routes/smart.router');
const PORT = 3000;

app.use(bodyParser.json());

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.use('/api', apiRouter);

app.use('/', smartTweetRouter);

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}...`);
});