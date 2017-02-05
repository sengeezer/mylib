var expect = require('chai').expect;
var starwars = require('./index');

describe('my-lib-a', function() {
  describe('all', function() {
    it('should be an array of strings', function() {
      expect(starwars.all).to.satisfy(isArrayOfStrings);

      function isArrayOfStrings(array) {
        return array.every(function(item) {
          return typeof item === 'string';
        });
      }
    });

    it('should contain `Luke Skywalker`', function() {
      expect(starwars.all).to.include('Luke Skywalker');
    });
  });

  describe('random', function() {
    it('should return a random item from starwars.all', function() {
      var randomItem = starwars.random();
      expect(starwars.all).to.include(randomItem);
    });

    it('should return an array of n random items', function() {
      var randomItems = starwars.random(3);
      expect(randomItems).to.have.length(3);
      randomItems.forEach(function(item) {
        expect(starwars.all).to.include(item);
      });
    });
  });
});
