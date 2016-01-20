var theday = require('theday');

//find the date of the next day
var tomorrow = theday('after');
console.log('The date of the next day is' + tomorrow);

//find the date of the previous day
var yesterday = theday('before');
console.log('The date of the previous day is' + yesterday);

//find the date of the current day
var today = theday();
console.log('The date of today is' + today);