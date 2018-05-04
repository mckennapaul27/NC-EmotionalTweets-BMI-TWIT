const util = require('util');
const {
    watsonConfig
} = require('../config/watson.config');
const LanguageTranslatorV2 = require('watson-developer-cloud/language-translator/v2');
const languageTranslator = new LanguageTranslatorV2(watsonConfig);
languageTranslator.translate = util.promisify(languageTranslator.translate);

module.exports = {
    languageTranslator
}