const {
    fetchAllFollowers,
    fetchUser,
    searchUsers,
    searchTwitter,
    postTweet
} = require('../models/twit.model');

function getAllFollowers (req, res) {
    fetchAllFollowers('PoliticalPunter')
    .then(result => {
        return res.status(200).send(result.data);
    })
    .catch(err => {
        throw err;
    })
}

function getUser (req, res) {
    fetchUser('PoliticalPunter')
    .then(result => {
        return res.status(200).send(result.data);
    })
    .catch(err => {
        throw err;
    })
}

function getUserByQuery (req, res) {
    searchUsers('chelsea')
    .then(result => {
        return res.status(200).send(result);
    })
    .catch(err => {
        throw err;
    })
}

function getTweetsByQuery (req, res) {
    searchTwitter('man city')    
    .then(result => {
        return res.status(200).send(result);
    })
    .catch(err => {
        throw err;
    })
}

function createTweet (req, res) {
    postTweet('testing tweet')
    .then(result => {
        return res.status(201).send({"Tweet Posted": result.data.text});
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
    createTweet
}