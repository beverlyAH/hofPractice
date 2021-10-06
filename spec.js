(function() {
  'use strict';
  describe('Underscore Practice', function() {


    describe('_.each', function() {

      describe('fruits', function() {
        var testFruits;
        beforeEach(function() {
          testFruits = cloneObject(fruits);
        });
        describe('moreFruits', function() {

          underscoreMethods('each', true, function() {
            var data = testFruits.slice();
            moreFruits(data);
          });
          nativeMethods('forEach', false, function() {
            var data = testFruits.slice();
            moreFruits(data);
          });

          noForLoops(moreFruits);

          it('create a copy of the given array', function() {
            var data = moreFruits(testFruits);
            expect(data).to.eql(testFruits);
          });
          it('a new array is returned', function() {
            var data = moreFruits(testFruits);
            expect(data).to.not.equal(testFruits);
          });
        });

      });
      describe('numbers', function() {
        var testNumbers;
        beforeEach(function() {
          testNumbers = cloneObject(numbers);
        });
        describe('multiplesOfFive', function() {
          underscoreMethods('each', true, function() {
            multiplesOfFive(testNumbers);
          });
          nativeMethods('forEach', false, function() {
            multiplesOfFive(testNumbers);
          });
          noForLoops(multiplesOfFive);
          it('should return a number', function() {
            expect(typeof multiplesOfFive(testNumbers)).to.equal('number');
          });
          it('should return the count of numbers that are multiples of five', function() {
            var otherNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
            expect(multiplesOfFive(testNumbers)).to.equal(5);
            expect(multiplesOfFive(otherNumbers)).to.equal(2);
          });
        });
      });
    });

    describe('_.filter', function() {

      describe('fruits', function() {
        var testFruits;
        beforeEach(function() {
          testFruits = cloneObject(fruits);
        });
        describe('onlyOneFruit', function() {
          underscoreMethods('filter', true, function() {
            onlyOneFruit(testFruits, 'cherry');
          });
          nativeMethods('filter', false, function() {
            onlyOneFruit(testFruits, 'blueberry');
          });
          noForLoops(onlyOneFruit);
          noNewArrays(onlyOneFruit);

          it('should return an array with only the specified fruit string', function() {
            var lemons = onlyOneFruit(testFruits, 'lemon');
            var strawberries = onlyOneFruit(testFruits, 'strawberry');
            expect(lemons.length).to.eql(1);
            expect(strawberries.length).to.eql(1);
            expect(lemons).to.eql(['lemon']);
            expect(strawberries).to.eql(['strawberry']);
          });
        });

        describe('startsWith', function() {
          underscoreMethods('filter', true, function() {
            startsWith(testFruits, 'a');
          });
          nativeMethods('filter', false, function() {
            startsWith(testFruits, 'b');
          });
          noForLoops(startsWith);
          noNewArrays(startsWith);
          it('should return an array', function() {
            expect(Array.isArray(startsWith(testFruits, 'd'))).to.equal(true);
          });
          it('should return an array containing strings starting with the given letter', function() {
            var startsWithP = startsWith(testFruits, 'p');
            var startsWithA = startsWith(testFruits, 's');
            var startsWithG = startsWith(testFruits, 'g');
            expect(startsWithP.length).to.equal(4);
            expect(startsWithA.length).to.equal(2);
            expect(startsWithG.length).to.equal(1);
          });
        });
      });
      describe('desserts', function() {
        var testDesserts;
        beforeEach(function() {
          testDesserts = cloneObject(desserts);
        });
        describe('cookiesOnly', function() {

          underscoreMethods('filter', true, function() {
            cookiesOnly(testDesserts);
          });
          nativeMethods('filter', false, function() {
            cookiesOnly(testDesserts);
          });
          noForLoops(cookiesOnly);
          noNewArrays(cookiesOnly);
          it('should return a new array containing only cookie object', function() {
            var cookies = cookiesOnly(testDesserts);
            var onlyCookies = _.every(cookies, function(dessert) {
              return dessert.type === 'cookie';
            });
            expect(onlyCookies).to.equal(true);
          });
        });
      });
    });



    describe('_.reduce', function() {

      describe('grocery', function() {
        var testGrocery;
        beforeEach(function() {
          testGrocery = cloneObject(grocery);
        });

        describe('sumTotal', function() {
          underscoreMethods('reduce', true, function() {
            sumTotal(testGrocery);
          });
          nativeMethods('reduce', false, function() {
            sumTotal(testGrocery);
          });
          noForLoops(sumTotal);
          it('should return a number', function() {
            expect(typeof sumTotal(grocery)).to.equal('number');
          });
          it('should return total sum of all prices', function() {
            var total = sumTotal(testGrocery);
            expect(total).to.equal(126.72);
          });
        });
      });

      describe('desserts', function() {
        var testDesserts;
        beforeEach(function() {
          testDesserts = cloneObject(desserts);
        });
        describe('dessertCategories', function() {
          underscoreMethods('reduce', true, function() {
            dessertCategories(testDesserts);
          });
          nativeMethods('reduce', false, function() {
            dessertCategories(testDesserts);
          });
          it('should not use a for loop', function() {
            var stringified = dessertCategories.toString();

            expect(stringified.includes('for')).to.equal(false);
          });
          it('should return an object', function() {
            expect(dessertCategories(testDesserts)).to.be.an('object');
          });
          it('should return object with correct values', function() {
            expect(dessertCategories(testDesserts).pie).to.equal(3);
            expect(dessertCategories(testDesserts).cake).to.equal(2);
            expect(dessertCategories(testDesserts).cookie).to.equal(2);
            expect(dessertCategories(testDesserts).drink).to.equal(1);
          });
        });
      });

      describe('movies', function() {
        var testMovies;
        beforeEach(function() {
          testMovies = cloneObject(movies);
        });

        describe('ninetiesKid', function() {
          underscoreMethods('reduce', true, function() {
            ninetiesKid(testMovies);
          });
          nativeMethods('reduce', false, function() {
            ninetiesKid(testMovies);
          });
          noForLoops(ninetiesKid);

          it('should return a new array', function() {
            var data = ninetiesKid(testMovies);
            expect(data).to.not.equal(movies);
            expect(Array.isArray(data)).to.equal(true);
          });
          it('should return an array containing movies released in the 90s', function() {
            var data = ninetiesKid(testMovies);
            expect(data)
          });
        });

        describe('movieNight', function() {
          underscoreMethods('reduce', true, function() {
            movieNight(movies, 60);
          });
          nativeMethods('reduce', false, function() {
            movieNight(movies, 60);
          });
          noForLoops(movieNight);
          noNewArrays(movieNight);

          it('should return a boolean', function() {
            var data = movieNight(movies, 60);
            expect(typeof data).to.equal('boolean');
          });
          it('should confirm given time is enough for at least one movie', function() {
            var firstNight = movieNight(movies, 60);
            var secondNight = movieNight(movies, 120);
            expect(firstNight).to.equal(false);
            expect(secondNight).to.equal(true);
          });
        });
      });


    });

    describe('_.map', function() {
      describe('fruits', function() {
        var testFruits;
        beforeEach(function() {
          testFruits = cloneObject(fruits);
        });
        describe('upperCaseFruits', function() {
          underscoreMethods('map', true, function() {
            upperCaseFruits(testFruits);
          });
          nativeMethods('map', false, function() {
            upperCaseFruits(testFruits);
          });
          noForLoops(upperCaseFruits);
          noNewArrays(upperCaseFruits);
          it('should not return the original array', function() {
            var data = upperCaseFruits(testFruits);
            expect(data).to.not.eql(testFruits);
          });
          it('should return an array with all strings converted to uppercase', function() {
            var data = upperCaseFruits(testFruits);
            var allUpperCase = true;
            _.each(data, function(fruit) {
              fruit.split('').forEach(function(letter) {
                if (letter !== letter.toUpperCase()) {
                  allUpperCase = false;
                }
              });
            });
            expect(allUpperCase).to.equal(true);
          });
        });
      });

      describe('desserts', function() {
        var testDesserts;
        beforeEach(function() {
          testDesserts = cloneObject(desserts);
        });
        describe('glutenFree', function() {
          underscoreMethods('map', true, function() {
            glutenFree(testDesserts);
          });
          nativeMethods('map', false, function() {
            glutenFree(testDesserts);
          });
          noForLoops(glutenFree);
          noNewArrays(glutenFree);
          it('should not return the original array', function() {
            var data = glutenFree(testDesserts);
            expect(desserts[0].glutenFree).to.equal(undefined);
          });
          it('should return a new array with all items possessing a glutenFree status', function() {
            var data = glutenFree(testDesserts);
            var allHaveGlutenFreeProperty = true;
            data.forEach(function(dessert) {
              if (!dessert.hasOwnProperty('glutenFree')) {
                allHaveGlutenFreeProperty = false;
              }
            });

            expect(allHaveGlutenFreeProperty).to.equal(true);
          });
        });
      });


      describe('grocery', function() {

        describe('applyCoupon', function() {
          var testGrocery;
          beforeEach(function() {
            testGrocery = cloneObject(grocery);
          });
          underscoreMethods('map', true, function() {
            applyCoupon(testGrocery, 0.20);
          });
          nativeMethods('map', false, function() {
            applyCoupon(testGrocery, 0.20);
          });
          noForLoops(applyCoupon);
          noNewArrays(applyCoupon);
          it('should not return the original array', function() {
            var data = applyCoupon(testGrocery, 0.20);
            expect(data).to.not.eql(grocery);
          });
          it('should return array of items with sale prices', function() {
            var data = applyCoupon(testGrocery, 0.20);
            expect(data[10].salePrice).to.equal('$4.47');
          });
          it('items in array should have added salePrice property', function() {
            var onSale = applyCoupon(testGrocery, 0.20);
            expect(onSale[12]).to.have.property('salePrice');
          });
        });

      });
    });
  });

}());
