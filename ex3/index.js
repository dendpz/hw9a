const moment = require('moment');

// Display the current date spelled out
const currentDate = moment().format('dddd, MMMM Do YYYY')
console.log(currentDate);

// Number of years since 1976, November 26th
const startDate = moment('1976-11-26');
const yearsSince = moment().diff(startDate, 'years');
console.log(`${yearsSince} years ago.`)