(function () {
  'use strict';
  describe('Underscore Practice', function () {

    describe('_.each', function () {

      describe('fruits', function () {
        var testFruits;
        beforeEach(function () {
          testFruits = cloneObject(fruits);
        });
        describe('moreFruits', function () {

          underscoreMethods('each', true, function () {
            var data = testFruits.slice();
            moreFruits(data);
          });
          nativeMethods('forEach', false, function () {
            var data = testFruits.slice();
            moreFruits(data);
          });

          noForLoops(moreFruits);

          it('create a copy of the given array', function () {
            var data = moreFruits(testFruits);
            expect(data).to.eql(testFruits);
          });
          it('a new array is returned', function () {
            var data = moreFruits(testFruits);
            expect(data).to.not.equal(testFruits);
          });
        });

      });
      describe('numbers', function () {
        var testNumbers;
        beforeEach(function () {
          testNumbers = cloneObject(numbers);
        });
        describe('multiplesOfFive', function () {
          underscoreMethods('each', true, function () {
            multiplesOfFive(testNumbers);
          });
          nativeMethods('forEach', false, function () {
            multiplesOfFive(testNumbers);
          });
          noForLoops(multiplesOfFive);
          it('should return a number', function () {
            expect(typeof multiplesOfFive(testNumbers)).to.equal('number');
          });
          it('should return the count of numbers that are multiples of five', function () {
            var otherNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
            expect(multiplesOfFive(testNumbers)).to.equal(5);
            expect(multiplesOfFive(otherNumbers)).to.equal(2);
          });
        });
      });
      describe('tweets', function () {
        var testTweets;
        beforeEach(function () {
          testTweets = cloneObject(tweets);
        });
        describe('getUserTweets', function () {
          underscoreMethods('each', true, function () {
            getUserTweets(testTweets);
          });
          nativeMethods('forEach', false, function () {
            getUserTweets(testTweets);
          });
          noForLoops(getUserTweets);
          it('should return an array', function () {
            expect(Array.isArray(getUserTweets(testTweets))).to.equal(true);
          });
          it('should return a user-specific array', function () {
            var mracus = [
              {
                user: 'mracus',
                message: ' formulated that cat ',
                createdAt: '2022-09-06T07:39:19.281Z',
                profilePhotoURL: './assets/img/user-2.png'
              },
              {
                user: 'mracus',
                message: ' delegated your belief system #burningman',
                createdAt: '2022-09-06T17:39:19.281Z',
                profilePhotoURL: './assets/img/user-2.png'
              },
              {
                user: 'mracus',
                message: 'ask me how i systematized the big mind #techlife',
                createdAt: '2022-09-07T23:39:20.977Z',
                profilePhotoURL: './assets/img/user-2.png'
              },
              {
                user: 'mracus',
                message: 'just navigated your koolaid ',
                createdAt: '2022-09-07T23:39:23.233Z',
                profilePhotoURL: './assets/img/user-2.png'
              },
              {
                user: 'mracus',
                message: 'just enjoyed the big cloud for real',
                createdAt: '2022-09-07T23:39:24.329Z',
                profilePhotoURL: './assets/img/user-2.png'
              },
              {
                user: 'mracus',
                message: 'last night i delegated the worm ',
                createdAt: '2022-09-07T23:39:24.645Z',
                profilePhotoURL: './assets/img/user-2.png'
              }
            ];

            expect(getUserTweets(testTweets, 'mracus')).to.eql(mracus);

            var shawndrost = [
              {
                user: 'shawndrost',
                message: 'completely enjoyed the way of life ',
                createdAt: '2022-09-06T22:39:19.281Z',
                profilePhotoURL: './assets/img/user-0.png'
              },
              {
                user: 'shawndrost',
                message: ' aided my worm ',
                createdAt: '2022-09-07T03:39:19.281Z',
                profilePhotoURL: './assets/img/user-0.png'
              },
              {
                user: 'shawndrost',
                message: 'the president automated the big system but only i know how',
                createdAt: '2022-09-07T18:39:19.281Z',
                profilePhotoURL: './assets/img/user-0.png'
              },
              {
                user: 'shawndrost',
                message: ' downloaded the money #burningman',
                createdAt: '2022-09-07T23:39:22.259Z',
                profilePhotoURL: './assets/img/user-0.png'
              },
              {
                user: 'shawndrost',
                message: ' developed the cloud ',
                createdAt: '2022-09-07T23:39:25.694Z',
                profilePhotoURL: './assets/img/user-0.png'
              }
            ];

            expect(getUserTweets(testTweets, 'shawndrost')).to.eql(shawndrost);

            expect(getUserTweets(testTweets, 'unknown user')).to.eql([]);
          });
        });
      });
    });

    describe('_.filter', function () {

      describe('fruits', function () {
        var testFruits;
        beforeEach(function () {
          testFruits = cloneObject(fruits);
        });
        describe('onlyOneFruit', function () {
          underscoreMethods('filter', true, function () {
            onlyOneFruit(testFruits, 'cherry');
          });
          nativeMethods('filter', false, function () {
            onlyOneFruit(testFruits, 'blueberry');
          });
          noForLoops(onlyOneFruit);
          noNewArrays(onlyOneFruit);

          it('should return an array with only the specified fruit string', function () {
            var lemons = onlyOneFruit(testFruits, 'lemon');
            var strawberries = onlyOneFruit(testFruits, 'strawberry');
            expect(lemons.length).to.eql(1);
            expect(strawberries.length).to.eql(1);
            expect(lemons).to.eql(['lemon']);
            expect(strawberries).to.eql(['strawberry']);
          });
        });

        describe('startsWith', function () {
          underscoreMethods('filter', true, function () {
            startsWith(testFruits, 'a');
          });
          nativeMethods('filter', false, function () {
            startsWith(testFruits, 'b');
          });
          noForLoops(startsWith);
          noNewArrays(startsWith);
          it('should return an array', function () {
            expect(Array.isArray(startsWith(testFruits, 'd'))).to.equal(true);
          });
          it('should return an array containing strings starting with the given letter', function () {
            var startsWithP = startsWith(testFruits, 'p');
            var startsWithA = startsWith(testFruits, 's');
            var startsWithG = startsWith(testFruits, 'g');
            expect(startsWithP.length).to.equal(4);
            expect(startsWithA.length).to.equal(2);
            expect(startsWithG.length).to.equal(1);
          });
        });
      });
      describe('desserts', function () {
        var testDesserts;
        beforeEach(function () {
          testDesserts = cloneObject(desserts);
        });
        describe('cookiesOnly', function () {

          underscoreMethods('filter', true, function () {
            cookiesOnly(testDesserts);
          });
          nativeMethods('filter', false, function () {
            cookiesOnly(testDesserts);
          });
          noForLoops(cookiesOnly);
          noNewArrays(cookiesOnly);
          it('should return a new array containing only cookie objects', function () {
            var cookies = cookiesOnly(testDesserts);
            var onlyCookies = _.every(cookies, function (dessert) {
              return dessert.type === 'cookie';
            });
            expect(onlyCookies).to.equal(true);
            expect(cookies.length).to.equal(2);
          });
        });
      });
      describe('tweets', function () {
        var testTweets;
        beforeEach(function () {
          testTweets = cloneObject(tweets);
        });
        describe('filterUserTweets', function () {

          underscoreMethods('filter', true, function () {
            filterUserTweets(testTweets);
          });
          nativeMethods('filter', false, function () {
            filterUserTweets(testTweets);
          });
          noForLoops(filterUserTweets);
          noNewArrays(filterUserTweets);
          it('should return a new array of user specific tweets', function () {
            var mracus = [
              {
                user: 'mracus',
                message: ' formulated that cat ',
                createdAt: '2022-09-06T07:39:19.281Z',
                profilePhotoURL: './assets/img/user-2.png'
              },
              {
                user: 'mracus',
                message: ' delegated your belief system #burningman',
                createdAt: '2022-09-06T17:39:19.281Z',
                profilePhotoURL: './assets/img/user-2.png'
              },
              {
                user: 'mracus',
                message: 'ask me how i systematized the big mind #techlife',
                createdAt: '2022-09-07T23:39:20.977Z',
                profilePhotoURL: './assets/img/user-2.png'
              },
              {
                user: 'mracus',
                message: 'just navigated your koolaid ',
                createdAt: '2022-09-07T23:39:23.233Z',
                profilePhotoURL: './assets/img/user-2.png'
              },
              {
                user: 'mracus',
                message: 'just enjoyed the big cloud for real',
                createdAt: '2022-09-07T23:39:24.329Z',
                profilePhotoURL: './assets/img/user-2.png'
              },
              {
                user: 'mracus',
                message: 'last night i delegated the worm ',
                createdAt: '2022-09-07T23:39:24.645Z',
                profilePhotoURL: './assets/img/user-2.png'
              }
            ];

            expect(filterUserTweets(testTweets, 'mracus')).to.eql(mracus);

            var shawndrost = [
              {
                user: 'shawndrost',
                message: 'completely enjoyed the way of life ',
                createdAt: '2022-09-06T22:39:19.281Z',
                profilePhotoURL: './assets/img/user-0.png'
              },
              {
                user: 'shawndrost',
                message: ' aided my worm ',
                createdAt: '2022-09-07T03:39:19.281Z',
                profilePhotoURL: './assets/img/user-0.png'
              },
              {
                user: 'shawndrost',
                message: 'the president automated the big system but only i know how',
                createdAt: '2022-09-07T18:39:19.281Z',
                profilePhotoURL: './assets/img/user-0.png'
              },
              {
                user: 'shawndrost',
                message: ' downloaded the money #burningman',
                createdAt: '2022-09-07T23:39:22.259Z',
                profilePhotoURL: './assets/img/user-0.png'
              },
              {
                user: 'shawndrost',
                message: ' developed the cloud ',
                createdAt: '2022-09-07T23:39:25.694Z',
                profilePhotoURL: './assets/img/user-0.png'
              }
            ];

            expect(filterUserTweets(testTweets, 'shawndrost')).to.eql(shawndrost);

            expect(filterUserTweets(testTweets, 'unknown user')).to.eql([]);
          });
        });
      });
    });

    describe('_.map', function () {
      describe('fruits', function () {
        var testFruits;
        beforeEach(function () {
          testFruits = cloneObject(fruits);
        });
        describe('upperCaseFruits', function () {
          underscoreMethods('map', true, function () {
            upperCaseFruits(testFruits);
          });
          nativeMethods('map', false, function () {
            upperCaseFruits(testFruits);
          });
          noForLoops(upperCaseFruits);
          noNewArrays(upperCaseFruits);
          it('should not return the original array', function () {
            var data = upperCaseFruits(testFruits);
            expect(data).to.not.eql(testFruits);
          });
          it('should return an array of strings', function () {
            var data = upperCaseFruits(testFruits);
            expect(Array.isArray(data), 'returned value should be an array').to.be.true;
            _.each(data, function (fruit) {
              expect(fruit).to.be.a('string');
            });
          });
          it('should return an array with all strings converted to uppercase', function () {
            var data = upperCaseFruits(testFruits);
            var allUpperCase = true;
            _.each(data, function (fruit) {
              fruit.split('').forEach(function (letter) {
                if (letter !== letter.toUpperCase()) {
                  allUpperCase = false;
                }
              });
            });
            expect(allUpperCase).to.equal(true);
          });
        });
      });

      describe('desserts', function () {
        var testDesserts;
        beforeEach(function () {
          testDesserts = cloneObject(desserts);
        });
        describe('glutenFree', function () {
          underscoreMethods('map', true, function () {
            glutenFree(testDesserts);
          });
          nativeMethods('map', false, function () {
            glutenFree(testDesserts);
          });
          noForLoops(glutenFree);
          noNewArrays(glutenFree);
          it('should not return the original array', function () {
            var data = glutenFree(testDesserts);
            expect(desserts[0].glutenFree).to.equal(undefined);
          });
          it('should return a new array with all items possessing a glutenFree status', function () {
            var data = glutenFree(testDesserts);
            var allHaveGlutenFreeProperty = true;
            data.forEach(function (dessert) {
              if (!dessert.hasOwnProperty('glutenFree')) {
                allHaveGlutenFreeProperty = false;
              }
            });

            expect(allHaveGlutenFreeProperty).to.equal(true);
          });
        });
      });

      describe('tweets', function () {
        describe('allUserMessages', function () {
          var testTweets;
          beforeEach(function () {
            testTweets = cloneObject(tweets);
          });
          underscoreMethods('map', true, function () {
            allUserMessages(testTweets, 0.20);
          });
          nativeMethods('map', false, function () {
            allUserMessages(testTweets, 0.20);
          });
          noForLoops(allUserMessages);
          noNewArrays(allUserMessages);
          it('should not mutate input array', function () {
            allUserMessages(testTweets);
            expect(testTweets).to.eql(testTweets);
          });
          it('should return array of only user messages', function () {
            var onlyMessages = [
              "that wizard overhauled this worm #techlife",
              "completely overhauled this security system #sxsw",
              " formulated that cat ",
              "productively deployed my koolaid for real",
              " delegated your belief system #burningman",
              "completely enjoyed the way of life ",
              " aided my worm ",
              " experienced the bad decision but only i know how",
              "efficiently installed an entire koolaid #sf",
              "the president automated the big system but only i know how",
              "a seedy old man invented my city #yolo",
              " interfaced the big potato ",
              "ask me how i systematized the big mind #techlife",
              " debugged the big life #sf",
              " downloaded the money #burningman",
              "just navigated your koolaid ",
              "just enjoyed the big cloud for real",
              "last night i delegated the worm ",
              " developed the cloud "
            ];
            expect(allUserMessages(testTweets)).to.eql(onlyMessages);
          });
        });
      });

      describe('groceries', function () {
        describe('applyCoupon', function () {
          var testGrocery;
          beforeEach(function () {
            testGrocery = cloneObject(groceries);
          });
          underscoreMethods('map', true, function () {
            applyCoupon(testGrocery, 0.20);
          });
          nativeMethods('map', false, function () {
            applyCoupon(testGrocery, 0.20);
          });
          noForLoops(applyCoupon);
          noNewArrays(applyCoupon);
          it('should not return the original array', function () {
            var data = applyCoupon(testGrocery, 0.20);
            expect(data).to.not.eql(groceries);
          });
          it('should return array of items with sale prices', function () {
            var data = applyCoupon(testGrocery, 0.20);
            expect(data[10].salePrice).to.equal('$4.47');
          });
          it('items in array should have added salePrice property', function () {
            var onSale = applyCoupon(testGrocery, 0.20);
            expect(onSale[12]).to.have.property('salePrice');
          });
        });
      });
    });

    describe('_.reduce', function () {

      describe('groceries', function () {
        var testGrocery;
        beforeEach(function () {
          testGrocery = cloneObject(groceries);
        });

        describe('sumTotal', function () {
          underscoreMethods('reduce', true, function () {
            sumTotal(testGrocery);
          });
          nativeMethods('reduce', false, function () {
            sumTotal(testGrocery);
          });
          noForLoops(sumTotal);
          it('should return a number', function () {
            expect(typeof sumTotal(groceries)).to.equal('number');
          });
          it('should return total sum of all prices', function () {
            var total = sumTotal(testGrocery);
            console.log(total);
            expect(total).to.equal(173.98);
          });
        });
      });

      describe('desserts', function () {
        var testDesserts;
        beforeEach(function () {
          testDesserts = cloneObject(desserts);
        });
        describe('dessertCategories', function () {
          underscoreMethods('reduce', true, function () {
            dessertCategories(testDesserts);
          });
          nativeMethods('reduce', false, function () {
            dessertCategories(testDesserts);
          });
          it('should not use a for loop', function () {
            var stringified = dessertCategories.toString();

            expect(stringified.includes('for')).to.equal(false);
          });
          it('should return an object', function () {
            expect(dessertCategories(testDesserts)).to.be.an('object');
          });
          it('should return object with correct values', function () {
            expect(dessertCategories(testDesserts).pie).to.equal(3);
            expect(dessertCategories(testDesserts).cake).to.equal(2);
            expect(dessertCategories(testDesserts).cookie).to.equal(2);
            expect(dessertCategories(testDesserts).drink).to.equal(1);
          });
        });
      });

      describe('tweets', function () {
        var testTweets;
        beforeEach(function () {
          testTweets = cloneObject(tweets);
        });
        describe('countMessagesPerUser', function () {
          underscoreMethods('reduce', true, function () {
            countMessagesPerUser(testTweets);
          });
          nativeMethods('reduce', false, function () {
            countMessagesPerUser(testTweets);
          });
          noForLoops(countMessagesPerUser)
          it('should return an object', function () {
            expect(countMessagesPerUser(testTweets)).to.be.an('object');
          });
          it('should return object with correct values', function () {
            var counts = {
              "douglascalhoun": 5,
              "mracus": 6,
              "shawndrost": 5,
              "sharksforcheap": 3
            };
            expect(countMessagesPerUser(testTweets)).to.eql(counts);
          });
        });
      });

      describe('movies', function () {
        var testMovies;
        beforeEach(function () {
          testMovies = cloneObject(movies);
        });

        describe('ninetiesKid', function () {
          underscoreMethods('reduce', true, function () {
            ninetiesKid(testMovies);
          });
          nativeMethods('reduce', false, function () {
            ninetiesKid(testMovies);
          });
          noForLoops(ninetiesKid);

          it('should return a new array', function () {
            var data = ninetiesKid(testMovies);
            expect(data).to.not.equal(movies);
            expect(Array.isArray(data)).to.equal(true);
          });
          it('should return an array containing movies released in the 90s', function () {
            var data = ninetiesKid(testMovies);
            expect(data).to.eql(['Titanic', 'Pulp Fiction', 'Toy Story']);
          });
        });

        describe('movieNight', function () {
          underscoreMethods('reduce', true, function () {
            movieNight(movies, 60);
          });
          nativeMethods('reduce', false, function () {
            movieNight(movies, 60);
          });
          noForLoops(movieNight);
          noNewArrays(movieNight);

          it('should return a boolean', function () {
            var data = movieNight(movies, 60);
            expect(typeof data).to.equal('boolean');
          });
          it('should confirm given time is enough for at least one movie', function () {
            var firstNight = movieNight(movies, 60);
            var secondNight = movieNight(movies, 120);
            expect(firstNight).to.equal(false);
            expect(secondNight).to.equal(true);
          });
        });
      });
    });
  });

}());
