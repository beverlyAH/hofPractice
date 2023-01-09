// This repo is optional extra practice to use the underscore functions.
// Here we'll be writing new functions, but these functions will use
// the underscore functions within them.

// If you would like to take a look at the inputs that are passed into these functions, please
// feel free to check out the data.js file.

/*
 *
 *  _.each
 *
 */

// use _.each to create a copy of the given array.
var moreFruits = function (fruits) {
  var results = [];

  _.each(fruits, function(fruit, index, collection) {
    results.push(fruit);
  });

  return results;
};

// use _.each to traverse the number array and determine
// which are multiples of five.
//i- array of numbers
//o- count of multiple of 5
//c
//e
var multiplesOfFive = function (numbers) {
  var count5 = 0;
  _.each(numbers, function(n, index, numbers) {
    if (n % 5 === 0) {
      count5++;
    }
  });
  return count5;
};

// use _.each to build an array containing only tweets belonging to a specified user.
//i- array of tweet objects, user value
//o - array of tweets by user
//c -
//e -

var getUserTweets = function(tweets, user) {
  //iterate through _.each tweets to find which one has matching user object value
  var newArr = [];
  _.each(tweets, function(tweet, index, tweets) {
    if (tweet.user === user) {
      newArr.push(tweet);
    }
  });
  return newArr;
};

/*
 *
 *  _.filter
 *
 */

// use _.filter to return the fruits array with only the desired fruit.
var onlyOneFruit = function (fruits, targetFruit) {
  //filter fruits to find targetFruit
  return _.filter(fruits, function (fruit, index, fruits) {
    return fruit === targetFruit;
  });
};

// use _.filter to return the fruits array with only fruits
// starting with the letter 'P'.
var startsWith = function (fruits, letter) {
  //filter fruits to see if str starts with letter
  return _.filter(fruits, function(fruit) {
    return fruit[0] === letter;
  });
};

// return a filtered array containing only cookie-type desserts.
var cookiesOnly = function (desserts) {
  //filter desserts array of objects, return item.type if it is cookie
  return _.filter(desserts, function(item) {
    return item.type === 'cookie';
  });

};

//i - an array of tweet objects
//o - array of users tweets
//c
//e
// rebuild the getUserTweets function from above with _.filter instead
var filterUserTweets = function(tweets, user) {
  //filter tweets to find tweet by user
  return _.filter(tweets, function (tweet) {
    return tweet.user === user;
  });
};

/*
 *
 *  _.map
 *
 */

// given an array of strings, use _.map to return a new array containing all
// strings converted to uppercase letters
//i - array of fruits
//o- newArr with strings to upper case
var upperCaseFruits = function (fruits) {
  var result = _.map(fruits, function(fruit) {
    return fruit.toUpperCase();
  });
  console.log(result);
  return result;
};

// given an array of dessert objects, return a new array of objects
// that have a new "glutenFree" property, with a boolean value.
// TIP: Items that contain flour are not gluten-free.
//i- array of dessert objects
//o- new array of objects that glutenFree is true
var glutenFree = function (desserts) {
  //if dessert ingredients doesn't include gluten, map
  var result =  _.map(desserts, function(dessert) {
    if (!dessert.ingredients.includes('flour')) {
      return dessert['glutenFree'] = true;
    }
  });

  return result;
};

// given an array of tweet objects, return a new array of strings
// containing only the message properties.
var allUserMessages = function(tweets) {

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
var applyCoupon = function (groceries, coupon) {

};

/*
 *
 *  _.reduce
 *
 */

// return the total price of all products.
var sumTotal = function (products) {

};

// return an object consisting of dessert types and how many of each.
// exampleOutput: { dessertType: 3, dessertType2: 1 }
var dessertCategories = function (desserts) {

};

// return an object with the proper count of all user messages
/*
 example output:
  var tweetCountPerUser = countMessagesPerUser(tweets);
  {
    "douglascalhoun": 5,
    "mracus": 6,
    "shawndrost": 5,
    "sharksforcheap": 3
  }
*/
var countMessagesPerUser = function(tweets) {

};

// given an array of movie data objects,return an array containing
// movies that came out between 1990 and 2000.
// TIP: use an array as your accumulator - don't push to an external array!
var ninetiesKid = function (movies) {

};

// return an boolean stating if there exists a movie with a shorter
// runtime than your time limit.
// timeLimit is an integer representing a number of minutes.
var movieNight = function (movies, timeLimit) {

};
