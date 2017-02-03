const uniqueRandomArr = require('unique-random-array');
const SWNames = require('./SWcharsdata.json');

module.exports = {
  all: SWNames,
  random: uniqueRandomArr(SWNames)
}
