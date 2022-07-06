// This repo is optional extra practice to use the underscore functions.
// Here we'll be writing new functions, but these functions will use
// the underscore functions within them.

/*
 *
 *  _.each
 *
 */

// use _.each to create a copy of the given array.
var moreFruits = function(fruits) {
  var results = [];

  _.each(fruits, function(fruit, index, collection) {
    results.push(fruit);
  });

  return results;
};

// use _.each to traverse the number array and determine
// how many are multiples of five.

 // Problem Solving Steps
  // ---------------------------------------------------------------------------
  //
  // Interpret the prompt:
  //
  // ---------------------------------------------------------------------------
  // I - array
  // O - array with multiples of five
  // C -
  // E -
  // ---------------------------------------------------------------------------
  // Strategy:
  // use _.each
  // Pseudocode

var multiplesOfFive = function(numbers) {
  // create new array
  var newArr = [];
  // use _.each
  _.each(numbers, function(item) {
    // if the number / 5 = integer and not float then
    if (item % 5 === 0) {
      // push it into array
      newArr.push(item);
    }

  });
  return newArr.length;
  // return new array

};



/*
 *
 *  _.filter
 *
 */

  // Problem Solving Steps
  // ---------------------------------------------------------------------------
  //
  // Interpret the prompt:
  //
  // ---------------------------------------------------------------------------
  // I -
  // O -
  // C -
  // E -
  // ---------------------------------------------------------------------------
  // Strategy:
  //
  // Pseudocode


// use _.filter to return the fruits array with only the desired fruit.
var onlyOneFruit = function(fruits, targetFruit) {
  var result = _.filter(fruits, function(item) {
    return item === targetFruit;
  });
  return result;
};

// use _.filter to return the fruits array with only fruits
// starting with the letter 'P'.
var startsWith = function(fruits, letter) {
  var result = _.filter(fruits, function(item) {
    return item.slice(0, 1) === letter;
  });
  return result;
};

// return a filtered array containing only cookie-type desserts.
var cookiesOnly = function(desserts) {
  _.filter(desserts, function(item) {
    return item.type === 'cookie';
  });

};

/*
 *
 *  _.reduce
 *
 */

// return the total price of all products.
var sumTotal = function(products) {
  var result = _.reduce(products, function(total, number) {
    return total + parseFloat(number.price.slice(1));
  }, 0);
  return result;
};

// return an object consisting of dessert types and how many of each.
// exampleOutput: { dessertType: 3, dessertType2: 1 }
var dessertCategories = function(desserts) {
  var result = _.reduce(desserts, function(accumulator, number) {
    if (accumulator[number.type] === undefined) {
      accumulator[number.type] = 1;
    } else {
      accumulator[number.type]++;
    }
    return accumulator;
  }, {});
  return result;
};

// given an array of movie data objects,return an array containing
// movies that came out between 1990 and 2000.
// TIP: use an array as your accumulator - don't push to an external array!
var ninetiesKid = function(movies) {
  var result = _.reduce(movies, function(accumulator, movie) {
    if (movie.releaseYear > 1990 && movie.releaseYear < 2000) {
      accumulator.push(movie.title);
    }
    return accumulator;
  }, []);
  return result;

};

// return an boolean stating if there exists a movie with a shorter
// runtime than your time limit.
// timeLimit is an integer representing a number of minutes.
var movieNight = function(movies, timeLimit) {
  var result = _.reduce(movies, function(accumulator, movie) {
    if (movie.runtime < timeLimit) {
      accumulator = true;
    }
    return accumulator;
  }, false);
  return result;
};

/*
 *
 *  _.map
 *
 */

// given an array of strings, use _.map to return a new array containing all
// strings converted to uppercase letters.
var upperCaseFruits = function(fruits) {
  _.map(fruits, function(item) {
    return item.toUpperCase();
  });
};

// given an array of dessert objects, return a new array of objects
// that have a new "glutenFree" property, with a boolean value.
// TIP: Items that contain flour are not gluten-free.
var glutenFree = function(desserts) {
  // debugger;
  _.map(desserts, function(item) {
    if (item.ingredients.includes('flour')) {
      return item.glutenFree = false;
    } else {
      return item.glutenFree = true;
    }
  });
  // console.log(desserts.forEach(function(item) {
  //   debugger;
  //   if (item.hasOwnProperty('glutenFree')) {
  //     return true;
  //   }
  // }));
  return desserts;
};

// use _.map to return an array of items with their sale prices, with a new property
// containing the sale price. round any decimals to 2 places.
//
// having trouble with decimals? check out this article:
// http://adripofjavascript.com/blog/drips/avoiding-problems-with-decimal-math-in-javascript.html
//
/*

 example output:
  var salePrices = applyCoupon(groceries, 0.20);
  [
    {
      id: 1,
      product: 'Olive Oil',
      price: '$12.1',
      salePrice: '$9.68'
    }
  ];

*/
var applyCoupon = function(groceries, coupon) {
  debugger;
  _.map(groceries, function(item) {
    item.salePrice = parseFloat(item.price.slice(1)) * (1 - coupon);
    item.salePrice = '$' + item.salePrice.toFixed(2);
  });
  return groceries;

};
