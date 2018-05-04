const Twit = require('twit');
const {twitConfig} = require('../config/twit.config');
var T = new Twit(twitConfig);


module.exports = {
    T
}