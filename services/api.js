// global.SERVER_APP_ROOT = __dirname;
// const data = require(SERVER_APP_ROOT + '/data/countries.js');
const data = require('../data/countries');

exports.getCountries = () => {
    return data.countryList();
}