const {languageTranslator} = require('../lib/watson');


function translateToSpanish (text, lang) {    
    return languageTranslator.translate({
        text,
        source: 'en',
        target: lang
    })        
}

module.exports = {
    translateToSpanish
}