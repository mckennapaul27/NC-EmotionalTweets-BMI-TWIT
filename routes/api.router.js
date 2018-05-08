const express = require('express');
const router = express.Router();
const {
    getAllFollowers,
    getUser,
    getUserByQuery,
    getTweetsByQuery,
    createTweet,
    createFriend,
    createTranslatedTweets
} = require('../controllers/main.controller');

router.get('/showuser', getUser);

router.get('/searchfollowers', getAllFollowers);

router.get('/searchusers', getUserByQuery);

router.get('/searchtweets', getTweetsByQuery);

router.post('/sendtweet', createTweet);

router.post('/follow', createFriend);

router.get('/translate', createTranslatedTweets);

module.exports = router;

