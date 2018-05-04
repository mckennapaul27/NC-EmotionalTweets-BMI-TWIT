const util = require('util');
const {T} = require('./lib/twitter');
const {languageTranslator} = require('./lib/watson');

function translateToSpanish (text) {
    languageTranslator.translate({
        text,
        source: 'en',
        target: 'es'
    })
    .then(data => { 
               
        return data.translations;
    })
    .then(result => {
        result.forEach(phrase => {            
            T.post('statuses/update', {status: phrase.translation}, function(err, data, response) {
                console.log(`${phrase.translation} posted successfully`)
              });
        });      
    })
    .catch(err => {
        throw err;
    })
}

translateToSpanish(['hi, how are you?', 'my name is paul'])
