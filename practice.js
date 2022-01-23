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
// which are multiples of five.
var multiplesOfFive = function(numbers) {
  // set total number of 5 mutiplers as 0 and iterate over the numbers array, when there is one number is mutipler of 5 add to counter

 var counter = 0 ;
 _.each(numbers,function(number,index,collection){
   if (number%5 === 0 ){counter ++}
 }

 )
 return counter;
};

/*
 *
 *  _.filter
 *
 */

// use _.filter to return the fruits array with only the desired fruit.
var onlyOneFruit = function(fruits, targetFruit ){
  fruitlist = _.filter(fruits, function(fruit) {
    return fruit === targetFruit;
  });
  return fruitlist;
}


// use _.filter to return the fruits array with only fruits
// starting with the letter 'P'.
var startsWith = function(fruits, letter) {
var fruitlist = _.filter(fruits,function(fruit){return fruit[0]===letter})
return fruitlist;
};

// return a filtered array containing only cookie-type desserts.
var cookiesOnly = function(desserts) {
var cookies = _.filter(desserts,function(dessert){
  return dessert === "cookie"
})
return cookies;
};
/*
var groceries = [
  {
    id: 1,
    product: 'Olive Oil',
    price: '$' + 12.1
  },
  {
    id: 2,
    product: 'Tomato Soup',
    price: '$' + 3.48
  },
  {
    id: 3,
    product: 'Cheesecake',
    price: '$' + 17.36
  },
  {
    id: 4,
    product: 'Sirloin Steak',
    price: '$' + 14.8
  },
  {
    id: 5,
    product: 'Brie Cheese',
    price: '$' + 23.28
  },
  {
    id: 6,
    product: 'Ground Beef',
    price: '$' + 1.44
  },
  {
    id: 7,
    product: 'Tofu',
    price: '$' + 11.11
  },
  {
    id: 8,
    product: 'Lentils',
    price: '$' + 21.77
  },
  {
    id: 9,
    product: 'Cola, 12pk',
    price: '$' + 22.58
  },
  {
    id: 10,
    product: 'Skittles',
    price: '$' + 3.79
  },
  {
    id: 11,
    product: 'Flour - White',
    price: '$' + 5.59
  },
  {
    id: 12,
    product: 'Sauce - Pizza',
    price: '$' + 9.23
  },
  {
    id: 13,
    product: 'Whole Milk, Gallon',
    price: '$' + 6.43
  },
  {
    id: 14,
    product: 'Butter',
    price: '$' + 5.11
  },
  {
    id: 15,
    product: 'Bread - Wheat',
    price: '$' + 15.91
  },
];

 *
 *  _.reduce
 *
 */

// return the total price of all products.
var sumTotal = function(groceries) {

  var total = _.reduce(groceries, function(sum,grocery) {return sum = sum + Number(grocery.price.slice(1)); },0)
return total;
};


//desserttype = {cake:2, cookie:2,....}
//dessdert.type = "pie"

// return an object consisting of dessert types and how many of each.
// exampleOutput: { dessertType: 3, dessertType2: 1 }
var dessertCategories = function(desserts) {

//set variable
//inside the reduce fuction, accumulator set as {}, then find dessert.type, if null, then the desserttype= 1, otherwisem dessider.dessertype ++
var desserttypeobj = _.reduce(desserts,function(acc,dessert){
  var kind= dessert.type
  if (acc[kind] === undefined) {
acc[kind]=1
return acc
  }
  else{
    acc[kind] +=1 ;
   return acc
}

},{})
return desserttypeobj

};

var movies = [
  {
    title: 'Back to the Future',
    releaseYear: 1985,
    rating: 8.5,
    genre: ['Adventure', 'Comedy', 'Sci-fi'],
    runtime: 116
  },
  {
    title: 'Star Wars',
    releaseYear: 1977,
    rating: 8.6,
    genre: ['Action', 'Adventure', 'Fantasy'],
    runtime: 121
  },
  {
    title: 'Titanic',
    releaseYear: 1997,
    rating: 7.8,
    genre: ['Drama', 'Romance'],
    runtime: 194
  },
  {
    title: 'The Wizard of Oz',
    releaseYear: 1939,
    rating: 8.0,
    genre: ['Adventure', 'Family', 'Fantasy'],
    runtime: 102
  },
  {
    title: 'Casablanca',
    releaseYear: 1942,
    rating: 8.5,
    genre: ['Drama', 'Romance', 'War'],
    runtime: 102
  },
  {
    title: 'Pulp Fiction',
    releaseYear: 1994,
    rating: 8.9,
    genre: ['Crime', 'Drama'],
    runtime: 154
  },
  {
    title: 'The Shining',
    releaseYear: 1980,
    rating: 8.4,
    genre: ['Horror', 'Drama'],
    runtime: 146
  },
  {
    title: 'The Avengers',
    releaseYear: 2012,
    rating: 8.0,
    genre: ['Action', 'Adventure', 'Sci-fi'],
    runtime: 143
  },
  {
    title: 'Toy Story',
    releaseYear: 1995,
    rating: 8.3,
    genres: ['Animation', 'Adventure', 'Comedy'],
    runtime: 81
  },
  {
    title: 'The Dark Knight',
    releaseYear: 2008,
    rating: 9.0,
    genres: ['Action', 'Crime', 'Drama'],
    runtime: 152
  },
];
// given an array of movie data objects,return an array containing
// movies that came out between 1990 and 2000.
// TIP: use an array as your accumulator - don't push to an external array!
var ninetiesKid = function(movies) {
  var ninetiesmovies = _.reduce(movies, function(acc,movie){
    if (movie.releaseYear <2000 && movie.releaseYear>=1990){
      acc.push(movie.title)
    }
    return acc
  },[])
  return ninetiesmovies;

};

// return an boolean stating if there exists a movie with a shorter
// runtime than your time limit.
// timeLimit is an integer representing a number of minutes.
var movieNight = function(movies, timeLimit) {
  var shorterruntime = _.reduce(movies,function(acc,movie){
  if (movie.runtime < timeLimit){ acc= true;
  }

return acc;
  },false)
  return shorterruntime

};

/*
 *
 *  _.map
 *
 */

// given an array of strings, use _.map to return a new array containing all
// strings converted to uppercase letters.
var upperCaseFruits = function(fruits) {
var uppercase=_.map(fruits,function(fruit){
  return  fruit.toUpperCase()
})
return uppercase
};
/*
var desserts = [
  {
    name: 'Chocolate Cake',
    ingredients: ['cocoa', 'flour', 'sugar', 'eggs', 'milk', 'butter' ],
    type: 'cake'
  },
  {
    name: 'Snickerdoodles',
    ingredients: ['flour', 'milk', 'butter', 'eggs', 'sugar', 'cinnamon', 'cream of tartar'],
    type: 'cookie'
  },
  {
    name: 'Strawberry-Rhubarb Pie',
    ingredients: ['flour', 'water', 'eggs', 'sugar', 'strawberries', 'rhubarb'],
    type: 'pie'
  },
  {
    name: 'Lemonade',
    ingredients: ['water', 'sugar', 'lemons'],
    type: 'drink'
  },
  {
    name: 'Chocolate Chip Cookies',
    ingredients: ['flour', 'butter', 'sugar', 'eggs', 'chocolate chips'],
    type: 'cookie'
  },
  {
    name: 'Apple Pie',
    ingredients: ['flour', 'water', 'cinnamon', 'apples', 'sugar'],
    type: 'pie'
  },
  {
    name: 'Apple Pie',
    ingredients: ['flour', 'water', 'cinnamon', 'apples', 'sugar'],
    type: 'pie'
  },
  {
    name: 'Angel Food Cake',
    ingredients: ['flour', 'eggs', 'sugar', 'cream of tartar'],
    type: 'cake'
  }
]; */
// given an array of dessert objects, return a new array of objects
// that have a new "glutenFree" property, with a boolean value.
// TIP: Items that contain flour are not gluten-free.
var glutenFree = function(desserts) {
var withGlutenFreeOption =_.map(desserts,function(dessert){

  if (dessert.ingredients.indexOf('flour')=== -1 ){ dessert.glutenFree = true

  }
  else {dessert.glutenFree = false}
  return dessert;
})
return withGlutenFreeOption;
};

// use _.map to return an array of items with their sale prices, with a new property
// containing the sale price. round any decimals to 2 places.
//
// having trouble with decimals? check out this article:
// http://adripofjavascript.com/blog/drips/avoiding-problems-with-decimal-math-in-javascript.html
//
/*
var groceries = [
  {
    id: 1,
    product: 'Olive Oil',
    price: '$' + 12.1
  },
  {
    id: 2,
    product: 'Tomato Soup',
    price: '$' + 3.48
  },
  {
    id: 3,
    product: 'Cheesecake',
    price: '$' + 17.36
  },
  {
    id: 4,
    product: 'Sirloin Steak',
    price: '$' + 14.8
  },
  {
    id: 5,
    product: 'Brie Cheese',
    price: '$' + 23.28
  },
  {
    id: 6,
    product: 'Ground Beef',
    price: '$' + 1.44
  },
  {
    id: 7,
    product: 'Tofu',
    price: '$' + 11.11
  },
  {
    id: 8,
    product: 'Lentils',
    price: '$' + 21.77
  },
  {
    id: 9,
    product: 'Cola, 12pk',
    price: '$' + 22.58
  },
  {
    id: 10,
    product: 'Skittles',
    price: '$' + 3.79
  },
  {
    id: 11,
    product: 'Flour - White',
    price: '$' + 5.59
  },
  {
    id: 12,
    product: 'Sauce - Pizza',
    price: '$' + 9.23
  },
  {
    id: 13,
    product: 'Whole Milk, Gallon',
    price: '$' + 6.43
  },
  {
    id: 14,
    product: 'Butter',
    price: '$' + 5.11
  },
  {
    id: 15,
    product: 'Bread - Wheat',
    price: '$' + 15.91
  },
];
 example output:
  var salePrices = applyCoupon(groceries, 0.20);
  [
    {
      id: 1,
      product: 'Olive Oil',
      price: '$12.1',
      salePrice: '$9.61'
    }
  ];

*/
var applyCoupon = function(groceries, coupon) {
var withCouponPrice = _.map(groceries, function(grocery){
  var price = grocery.price
  var priceNum = Number(price.slice(1))
grocery.salePrice = '$' + Math.round(priceNum *100 *((1-coupon)*100)/100)/100;
return grocery
})
return withCouponPrice;
};
