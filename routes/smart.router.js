const express = require('express');
const router = express.Router();
const {postTranslatedTweets} = require('../controllers/main.controller');

router.get('/', (req, res) => {
    return res.render('pages/index')
});

router.get('/send-tweet-page', postTranslatedTweets);








module.exports = router;