const {T} = require('../lib/twitter');

// get list of followers of the given screen_name
function fetchAllFollowers(screen_name) {    
    return T.get('followers/list', {screen_name: screen_name})        
}

// gets user data for the given user screen_name
function fetchUser(screen_name) {    
    return T.get('users/show', {screen_name: screen_name})        
}

// gets users related to search query
function searchUsers(query) {    
    return T.get('users/search', {q: query})        
}

// Get tweets. Similar to regular twitter search - requires query
function searchTwitter(query) {    
    return T.get('search/tweets', {q: query})        
}

// POst new twitter update
function postTweet(status) {    
    return T.post('statuses/update', {status: status})        
}


module.exports = {
    fetchAllFollowers,
    fetchUser,
    searchUsers,
    searchTwitter,
    postTweet
}