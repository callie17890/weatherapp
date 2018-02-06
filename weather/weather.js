//8c6fd5bcd5a2fcb32961a572aaeddca8
//https://api.darksky.net/forecast/8c6fd5bcd5a2fcb32961a572aaeddca8/42.1573176,-87.81026829999999
const request = require('request');

var getWeather = (lat, lng, callback) => {

  request({
    url: `https://api.darksky.net/forecast/8c6fd5bcd5a2fcb32961a572aaeddca8/${lat},${lng}`,
    json: true
  }, (error, response, body) => {
    if (response.statusCode === 400) {
      callback('Unable to fetch weather');
    } else if (!error && response.statusCode === 200) {
      callback(undefined, {
        temperature: body.currently.temperature + ' F',
        apparentTemperature: body.currently.apparentTemperature + ' F'
      });
    }
  });
};

module.exports.getWeather = getWeather;
