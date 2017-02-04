let expect = require('chai').expect;
let starwars = require('./index');

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
      let randomItem = starwars.random();
      expect(starwars.all).to.include(randomItem);
    });
  });
});
