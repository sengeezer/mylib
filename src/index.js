var uniqueRandomArr = require('unique-random-array');
var SWNames = require('./SWcharsdata.json');

var getRandomItem = uniqueRandomArr(SWNames);

function random(number) {
    if(number === undefined) {
      return getRandomItem();
    } else {
      let randomItems = [];

      for(var i = 0; i < number; i++) {
        randomItems.push(getRandomItem());
      }

      return randomItems;
    }
}

module.exports = {
  all: SWNames,
  random: random
}
