const express = require('express');
const router = express.Router();
const {
    getAllFollowers,
    getUser,
    getUserByQuery,
    getTweetsByQuery,
    createTweet
} = require('../controllers/twit.controller');

router.get('/showuser', getUser);

router.get('/searchfollowers', getAllFollowers);

router.get('/searchusers', getUserByQuery);

router.get('/searchtweets', getTweetsByQuery);

router.post('/sendtweet', createTweet)

module.exports = router;

