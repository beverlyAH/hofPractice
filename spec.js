(function() {
  'use strict';

  describe('numbers', function() {
    describe('underscore', function() {
      describe('_.each', function() {

      });
      describe('_.filter', function() {

      });
      describe('_.map', function() {

      });
      describe('_.reduce', function() {

      });
    });
    describe('native', function() {
      describe('.forEach', function() {

      });
      describe('.filter', function() {

      });
      describe('.map', function() {

      });
      describe('.reduce', function() {

      });
    });
  });

  describe('movies', function() {

  });

  describe('fruits', function() {

  });

  describe('desserts', function() {

  });

  describe('grocery', function() {

  });


//   describe('_.each', function() {
//     describe('numbers', function() {
//       describe('doubleNumbers', function() {
//         underscoreMethods('each', true, function() {
//           var data = numbers.slice();
//           doubleNumbers(data);
//         });
//         nativeMethods('forEach', false, function() {
//           var data = numbers.slice();
//           doubleNumbers(data);
//         });
//         forLoop(doubleNumbers);
//         var arr = [ ];
//         it('should double all given numbers', function() {
//           var data = numbers.slice();
//           doubleNumbers(data)
//           expect(data).to.eql([20, 14, 4, 8, 12, 28, 10, 164])
//         });

//         it('should not create a new array', function() {
//           var stringified = doubleNumbers.toString();

//           expect(stringified.includes('[]')).to.equal(false);
//         });
//       });

//       describe('multiplesOfFive', function() {
//         underscoreMethods('each', true, function() {
//           multiplesOfFive(numbers);
//         });
//         nativeMethods('forEach', false, function() {
//           multiplesOfFive(numbers);
//         });
//         forLoop(multiplesOfFive);

//         it('should return the count of numbers that are multiples of five', function() {
//           expect(multiplesOfFive(numbers)).to.equal(2);
//         })
//       })
//     });
//   });

//   describe('fruits', function() {
//     describe('_.filter', function() {
//       describe('onlyLemons', function() {
//         underscoreMethods('filter', true, function() {
//           onlyLemons(fruits);
//         })
//         nativeMethods('filter', false, function() {
//           onlyLemons(fruits);
//         })

//         it('should return only lemon', function() {
//           var lemons = onlyLemons(fruits);
//           expect(lemons.length).to.eql(1);
//           expect(lemons).to.eql(['lemon']);
//         });

//         it('should not contain any new arrays', function() {
//           var stringified = onlyLemons.toString();

//           expect(stringified.includes('[]')).to.equal(false);
//         });

//         it('should not use a for loop', function() {
//           var stringified = onlyLemons.toString();

//           expect(stringified.includes('for')).to.equal(false);
//         })
//       });
//     })

//     describe('desserts', function() {
//       underscoreMethods('filter', true, function() {
//         cookiesOnly(desserts);
//       })
//       nativeMethods('filter', false, function() {
//         cookiesOnly(desserts);
//       })

//       it('should return only cookies', function() {
//         var cookies = cookiesOnly(desserts);
//         var onlyCookies = _.every(cookies, (dessert) => {
//           return dessert.type === 'cookie';
//         });
//         expect(onlyCookies).to.equal(true);
//       });

//       it('should not contain any new arrays', function() {
//         var stringified = cookiesOnly.toString();

//         expect(stringified.includes('[]')).to.equal(false);
//       });

//       it('should not use a for loop', function() {
//         var stringified = cookiesOnly.toString();

//         expect(stringified.includes('for')).to.equal(false);
//       })
//     })
//   });

//   describe('_.reduce', function() {

//     describe('grocery', function() {
//       var total = sumTotal(grocery);

//       describe('sumTotal', function() {
//         underscoreMethods('reduce', true, function() {
//           sumTotal(grocery);
//         });
//         nativeMethods('reduce', false, function() {
//           sumTotal(grocery)
//         });
//         it('should not use a for loop', function() {
//           var stringified = sumTotal.toString();

//           expect(stringified.includes('for')).to.equal(false);
//         })
//         it('should return total sum of all prices', function() {
//           expect(total).to.equal(126.72)
//         });
//       });
//       describe('sumTotalUnderFive', function() {
//         underscoreMethods('reduce', true, function() {
//           sumTotal(grocery);
//         });
//         nativeMethods('reduce', false, function() {
//           sumTotal(grocery)
//         });
//       })
//     })

//     describe('desserts', function() {

//       describe('dessertCategories', function() {
//         underscoreMethods('reduce', true, function() {
//           dessertCategories(desserts);
//         });
//         nativeMethods('reduce', false, function() {
//           dessertCategories(desserts);
//         });
//         it('should not use a for loop', function() {
//           var stringified = dessertCategories.toString();

//           expect(stringified.includes('for')).to.equal(false);
//         })
//         it('should return an object', function() {
//         expect(dessertCategories(desserts)).to.be.an('object');
//         });
//         it('should return object with correct values', function() {
//           expect(dessertCategories(desserts).pie).to.equal(3);
//           expect(dessertCategories(desserts).cake).to.equal(2);
//           expect(dessertCategories(desserts).cookie).to.equal(2);
//           expect(dessertCategories(desserts).drink).to.equal(1);
//         })
//       })
//     })


//   })

//   describe('_.map', function() {
//     describe('grocery', function() {
//       describe('applyCoupon', function() {
//         underscoreMethods('map', true, function() {
//           applyCoupon(grocery, 0.20);
//         });
//         nativeMethods('map', false, function() {
//           applyCoupon(grocery, 0.20);
//         });
//         it('should return array of items with sale prices', function() {
//           console.log(applyCoupon(grocery, 0.20)[0]);
//           expect(applyCoupon(grocery, 0.20)[0].price).to.equal(6.90);
//         })
//       })
//     });

//   })

}());
