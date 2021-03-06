import uniqueRandomArr from 'unique-random-array';
import SWNames from './SWcharsdata.json';

var getRandomItem = uniqueRandomArr(SWNames);

function random(number) {
    if(number === undefined) {
      return getRandomItem();
    } else {
      var randomItems = [];

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
