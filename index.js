import getposts , {getPostsLength} from './postController.js';

/*
const {generateRandomNumber, celciusToFahrenheit} = require('./utils');
console.log(`Random Number: ${generateRandomNumber()}`);
console.log(`Celsius to Fahrenheit: ${celciusToFahrenheit(0)}`);

*/


console.log('Posts:', getposts());
console.log('Posts Length:', getPostsLength());