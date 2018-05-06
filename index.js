const util = require('util');
const {
    T
} = require('./lib/twitter');
const {
    languageTranslator
} = require('./lib/watson');

function translateToSpanish(text) {
    languageTranslator.translate({
            text,
            source: 'en',
            target: 'es'
        })
        .then(data => {
            return data.translations;
        })
        // .then(result => {
        //     result.forEach(phrase => {            
        //         T.post('statuses/update', {status: phrase.translation}, function(err, data, response) {
        //             console.log(`${phrase.translation} posted successfully`)
        //           });
        //     });      
        // })
        .then(() => {
            T.get('followers/list', {
                screen_name: 'LadPolitics',
                count: 40
            }, function (err, data, response) {
                data.users.forEach(person => {
                    console.log(person.screen_name);
                    T.post('friendships/create', {screen_name: person.screen_name}, function(err, data, response) {
                        if(err) console.log(err);
                        console.log('sucess')
                      })
                });
            })
        })
        .catch(err => {
            throw err;
        })
}

translateToSpanish(['hi, how are you?', 'my name is paul'])