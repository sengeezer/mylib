const uniqueRandomArr = require('unique-random-array');
const SWNames = require('./SWcharsdata.json');

let getRandomItem = uniqueRandomArr(SWNames);

function random(number) {
    if(number === undefined) {
      return getRandomItem();
    } else {
      let randomItems = [];

      for(let i = 0; i < number; i++) {
        randomItems.push(getRandomItem());
      }

      return randomItems;
    }
}

module.exports = {
  all: SWNames,
  random: random
}
