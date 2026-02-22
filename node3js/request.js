/*
const request = require('request')
const url =
'https://api.darksky.net/forecast/9d1465c6f3bb7a6c71944bdd8548d026/37.8267,-122.4233';

request({ url: url }, (error, response) => {
 // Parse the response body from JSON string into JavaScript object
 const data = JSON.parse(response.body)
 // Will print the current temperature to the console
 console.log(data.currently.temperature)
})
*/
const request = require('request');

const url = 'https://api.openweathermap.org/data/2.5/onecall?lat=37.8267&lon=-122.4233&appid=582f90ca32029e0b470259b367c084f3';

request({ url, json: true }, (error, response, body) => {
    if (error) {
        console.log('Unable to connect to weather service!');
    } else if (response.statusCode !== 200) {
        console.log('Error:', response.statusCode, body);
    } else {
        // body is already parsed as JSON because of json: true
        console.log(body.daily.data[0].summary + ' It is currently ' + body.currently.temperature);
    }
});
