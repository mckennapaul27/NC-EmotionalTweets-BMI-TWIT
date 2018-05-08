const {
    fetchAllFollowers,
    fetchUser,
    searchUsers,
    searchTwitter,
    postTweet,
    addFriend
} = require('../models/twit.model');
const {
    translateToSpanish
} = require('../models/watson.model');

function getAllFollowers(req, res) {
    fetchAllFollowers('PoliticalPunter')
        .then(result => {
            return res.status(200).send(result.data);
        })
        .catch(err => {
            throw err;
        })
}

function getUser(req, res) {
    fetchUser('PoliticalPunter')
        .then(result => {
            return res.status(200).send(result.data);
        })
        .catch(err => {
            throw err;
        })
}

function getUserByQuery(req, res) {
    searchUsers('chelsea')
        .then(result => {
            return res.status(200).send(result);
        })
        .catch(err => {
            throw err;
        })
}

function getTweetsByQuery(req, res) {
    searchTwitter('man city')
        .then(result => {
            return res.status(200).send(result);
        })
        .catch(err => {
            throw err;
        })
}

function createTweet(req, res) {
    postTweet('testing tweet')
        .then(result => {
            return res.status(201).send({
                "Tweet Posted": result.data.text
            });
        })
        .catch(err => {
            throw err;
        })
}


function createFriend(req, res) {
    addFriend('LadPolitics')
        .then(result => {
            return res.status(201).send({
                "Friend Followed": result.data.screen_name
            });
        })
        .catch(err => {
            throw err;
        })
}

function createTranslatedTweets (req, res) {    
    translateToSpanish(query)  
    .then(result => {
        result.translations.forEach(text => {
            postTweet(text.translation);
        });
        return res.status(201).send('Success');
    })
    .catch(err => {
        throw err;
    })
}

function postTranslatedTweets (req, res) {
    let status = req.query.status;
    let language = req.query.language;
    translateToSpanish(status,language)
    .then(result => {
        result.translations.forEach(text => {
            postTweet(text.translation);
        });
    })    
    .then(() => {
        return res.render('pages/test')
    })
    .catch(err => {
        throw err;
    })
}




module.exports = {
    getAllFollowers,
    getUser,
    getUserByQuery,
    getTweetsByQuery,
    createTweet,
    createFriend,
    createTranslatedTweets,
    postTranslatedTweets
}