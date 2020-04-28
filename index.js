// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 *
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 *
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
 */
function processFirstItem(stringList, callback) {
  return callback(stringList[0]);
}

// ⭐️ Example Challenge END ⭐️

// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇

/////////////// CALLBACKS AND HIGHER-ORDER FUNCTIONS ///////////////
/////////////// CALLBACKS AND HIGHER-ORDER FUNCTIONS ///////////////
//
//
//
//
//
//
//
//
//
/**
 * ### Challenge `processLength`
 *
 * @instructions
 * PLEASE STUDY THE EXAMPLE CHALLENGE THOROUGHLY BEFORE PROCEEDING!
 * PLEASE STUDY THE EXAMPLE CHALLENGE THOROUGHLY BEFORE PROCEEDING!
 *
 * Implement a higher-order function called `processLength`.
 * It takes two arguments:
 * @param list an array with elements of any type.
 * @param callback function that takes a number as its argument.
 * @returns the result of invoking `callback` passing the LENGTH of `list`.
 *
 * Examples of usage of this higher-order function:
 * [1] Invoking `processLength` passing `['foo', 'bar']` and `(num) => num + 1000`,
 * should return 1002.
 *
 * [2] Invoking `processLength` passing `[]` and `(num) => "There are " + num`,
 * should return "There are 0".
 */
function processLength(list, callback) {
  return callback(list.length);
}
console.log(processLength(["foo", "bar"], (num) => num + 1000));
console.log(processLength([], (num) => "There are " + num));
//
//
//
//
//
//
//
//
//
//
//
//
/**
 * ### Challenge `processLastItem`
 *
 * @instructions
 * Implement a higher-order function called `processLastItem`.
 * It takes two arguments:
 * @param stringList array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the LAST element in `stringList`.
 *
 * Example of usage of this higher-order function:
 * Invoking `processLastItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'barbar'.
 */
function processLastItem(stringList, callback) {
  return callback(stringList[stringList.length - 1]);
}
console.log(
  processLastItem(["foo", "candy bar", "chocolate"], (food) => "I like " + food)
);
//
//
//
//
//
//
//
//
//
/**
 * ### Challenge `processSum`
 *
 * @instructions
 * Implement a higher-order function called `processSum`.
 * It takes three arguments:
 * @param num1 a number.
 * @param num2 a number.
 * @param callback function that takes a number as its argument.
 * @returns the result of invoking `callback` passing the SUM of `num1` and `num2`.
 *
 * Examples of usage of this higher-order function:
 * [1] Invoking `processSum` passing `10`, `30` and `(num) => num + " is a big number!"`,
 * should return "40 is a big number!".
 *
 * [2] Invoking `processSum` passing `-5`, '-1', and `(num) => num + 1000`,
 * should return 994.
 */
function processSum(num1, num2, callback) {
  var sum = num1 + num2;
  return callback(sum);
}

//
//
//
//
//
//
//
//
//
/**
 * ### Challenge `processProduct`
 *
 * @instructions
 * Implement a higher-order function called `processProduct`.
 * It takes three arguments:
 * @param num1 a number.
 * @param num2 a number.
 * @param callback function that takes a number as its argument.
 * @returns the result of invoking `callback` passing the PRODUCT of `num1` and `num2`.
 *
 * Examples of usage of this higher-order function:
 * [1] Invoking `processProduct` passing 2 and 7 and `(num) => num + " is a big number!"`,
 * should return "14 is a big number!".
 *
 * [2] Invoking `processProduct` passing 25 and 0 and `(num) => num + 1000`,
 * should return 1000.
 */
function processProduct(num1, num2, callback) {
  var product = num1 * num2;
  return callback(product);
}

console.log(processProduct(2, 7, (num) => num + " is a big number!"));
//
//
//
//
//
//
//
//
//
/**
 * ### Challenge `processDuplicateFree`
 * THIS IS A STRETCH PROBLEM! ATTEMPT ONLY AFTER COMPLETING ALL NON-STRETCH CHALLENGES!
 *
 * @instructions
 * Implement a higher-order function called `processDuplicateFree`.
 * It takes two arguments:
 * @param list array of elements of any kind.
 * @param callback function that takes an array as its argument.
 * @returns the result of invoking `callback` passing a de-duped version of `list`.
 *
 * Examples of usage of this higher-order function:
 * [1] Invoking `processDuplicateFree` passing `[1,1,1,2]` and `(arr) => arr`,
 * should return `[1,2]`.
 *
 * [2] Invoking `processDuplicateFree` passing `[1,1,2,2,3]` and `(arr) => arr.length`,
 * should return 3.
 */
function processDuplicateFree(list, callback) {
  var duplicate = list.filter(function (element, i) {
    if (list.indexOf(element) === i) {
      return element;
    }
  });
  return callback(duplicate);
}
//
//
//
//
//
//
//
//
//
/////////////// HIGHER-ORDER ARRAY METHODS ///////////////
/////////////// HIGHER-ORDER ARRAY METHODS ///////////////

/**
 * ### Challenge `lowerCaseStrings`
 *
 * @instructions
 * Implement this function using forEach().
 *
 * @param strings an array of strings.
 * @returns an array of equal length to `strings` containing lowercased versions of each string.
 *
 *
 * Examples of usage of this function:
 * [1] Invoking `lowerCaseStrings` with `[ 'Orange', 'APPLE', 'banana', 'mAnGo']` will return `[ 'orange', 'apple', 'banana', 'mango' ]`.
 *
 * [2] Invoking `lowerCaseStrings` with `['a', 'b', 'c' ]` will return `[ 'a', 'b', 'c' ]`.
 */
function lowerCaseStrings(strings) {
  // ???return strings[i].toLowerCase();  why can't i just doi it this way???
  var lowerCased = [];
  for (var i = 0; i < strings.length; i++) {
    lowerCased.push(strings[i].toLowerCase());
  }
  return lowerCased;
  // for (var i = 0; i < strings.length; i++) {
  //   console.log(strings[i].toLowerCase());
  // }
}
console.log(lowerCaseStrings(["Orange", "APPLE", "banana", "mAnGo"]));
//
//
//
//
//
//
//
//
//
/**
 * ### Challenge `isItAnApple`
 *
 * @instructions
 * Implement this function using map().
 *
 * @param strings an array of strings.
 * @returns an array of equal length to `strings` containing `true` if the corresponding entry in the `strings` is 'apple' and `false` if it is anything else.
 *
 *
 * Examples of usage of this function:
 * [1] Invoking `isItAnApple` with `[ 'orange', 'apple', 'banana', 'apples', 'apple', 'mango' ]` will return `[ false, true, false, false, true, false ]`.
 *
 * [2] Invoking `isItAnApple` with `['a', 'b', 'c' ]` will return `[ false, false, false ]`.
 */
function isItAnApple(strings) {
  var appleTrueOrFalse = [];
  for (let i = 0; i < strings.length; i++) {
    if ("apple" === strings[i]) {
      appleTrueOrFalse.push(true);
    } else {
      appleTrueOrFalse.push(false);
    }
  }
  return appleTrueOrFalse;
}
//
//
//
//
//
//
//
//
//
/**
 * ### Challenge `removeApple`
 *
 * @instructions
 * Implement this function using filter().
 *
 * @param strings an array of strings.
 * @returns a similar array, with an entries that are 'apple' removed.
 *
 *This function is case sensitive and, for example, should not remove 'Apple' or 'APPLE'
 *
 * Examples of usage of this function:
 * [1] Invoking `removeApple` with `[ 'orange', 'apple', 'banana', 'apples', 'apple', 'mango' ]` will return `[ 'orange', 'banana', 'apples', 'mango' ]`.
 *
 * [2] Invoking `removeApple` with `['a', 'b', 'c' ]` will return `[ 'a', 'b', 'c' ]`.
 */
function removeApple(strings) {
  const appleTrueOrFalse = strings.filter((fruits) => fruits !== "apple");
  return appleTrueOrFalse;
}
//
//
//
//
//
//
//
//
//
/**
 * ### Challenge `stringSmash`
 *
 * @instructions
 * Implement this function using reduce(). Do NOT use any other array methods.
 *
 * @param strings an array of strings.
 * @returns a string with all entries in `strings` combined together.
 *
 *
 * Examples of usage of this function:
 * [1] Invoking `stringSmash` with `[ 'orange', 'apple', 'banana', 'apples', 'apple', 'mango' ]` will return 'orangeapplebananaapplesapplemango'.
 *
 * [2] Invoking `stringSmash` with `['a', 'b', 'c' ]` will return `abc`.
 */
function stringSmash(strings) {
  const joinedStrings = strings.reduce(
    (accumulator, currentValue) => accumulator + currentValue
  );
  return joinedStrings;
}
//
//
//
//
//
//
//
//
//
// A local community center is holding a fund raising 5k fun run and has invited
// 50 small businesses to make a small donation on their behalf for some much needed
// updates to their facilities. Each business has assigned a representative
// to attend the event along with a small donation.

/**
 * ### Challenge `getFullNames`
 *
 * @instructions
 * Implement this function using forEach() or map().
 *
 * @param runners array of runners like the one inside the /data/runners.js file.
 * @returns an array with all the runners' full names in the following format: "Smith, John".
 * The full names appear in the array in the same order the runners appear in the `runners` array.
 */

//  ??? why not array[i].last_name???  how can you just access the key of the object without going throught the array index first???  item is the item at that index of the array
function getFullNames(runners) {
  let runnerNames = [];
  runners.forEach((item) => {
    runnerNames.push(`${item.last_name}, ${item.first_name}`);
  });
  return runnerNames;
}
//
//
//
//
//
//
//
//
//
/**
 * ### Challenge `firstNamesAllCaps`
 *
 * @instructions
 * The event director needs to have all the runners' first names
 * in uppercase because the director BECAME DRUNK WITH POWER.
 * Implement this function using map().
 *
 * @param runners array of runners like the one inside the /data/runners.js file.
 * @returns an array with all the runners' first names in ALL CAPS.
 * The first names appear in the array in the same order the runners appear in the `runners` array.
 */
function firstNamesAllCaps(runners) {
  let runnerNames = [];
  runners.forEach((i) => {
    runnerNames.push(i.first_name.toUpperCase());
  });
  return runnerNames;
}
//
//
//
//
//
//
//
//
//
/**
 * ### Challenge `getRunnersByTShirtSize`
 * * THIS IS A STRETCH PROBLEM! ATTEMPT ONLY AFTER COMPLETING ALL NON-STRETCH CHALLENGES!
 *
 * @instructions
 * The event director needs a way to find the runners that need
 * a specific t-shirt size, so they can place the orders easily.
 * Implement this function using filter().
 *
 * @param runners array of runners like the one inside the /data/runners.js file.
 * @param tShirtSize string (possible values are "S", "M", "L", "XL", "2XL", "3XL").
 * @returns an array containing only the runners that use the given `tShirtSize`.
 * The runners in the array appear in the same order they appear in the `runners` array.
 */
// ??? if .filter already returns an array why do we still have to .push???
function getRunnersByTShirtSize(runners, tShirtSize) {
  const runnersByshirtSize = runners.filter(
    (runner) => runner.shirt_size == tShirtSize
  );
  return runnersByshirtSize;
}

// const appleTrueOrFalse = strings.filter((fruits) => fruits !== "apple");
//   return appleTrueOrFalse;
//
//
//
//
//
//
//
//
//
/**
 * ### Challenge `tallyUpDonations`
 *  * THIS IS A STRETCH PROBLEM! ATTEMPT ONLY AFTER COMPLETING ALL NON-STRETCH CHALLENGES!
 *
 * @instructions
 * The donations need to be tallied up and reported for tax purposes.
 * Implement this function using reduce().
 *
 * @param runners array of runners like the one inside the /data/runners.js file.
 * @returns a number which is the sum of the donations by all runners.
 */
function tallyUpDonations(runners) {
  // const donations = runners.reduce(
  //   (accumulator, currentValue) => accumulator + currentValue.donation, 0);
  //   return donations;
  return runners.reduce(
    (accumulator, current) => accumulator + current.donation,
    0
  );
}
//
//
//
//
//
//
//
//
//
/////////////// CLOSURES ///////////////
/////////////// CLOSURES ///////////////

/**
 * ### Challenge `counterMaker`
 *
 * @instructions
 * Study the code for counter1 and counter2. Answer the questions below.
 *
 * 1. What is the difference between counter1 and counter2?
 *    Counter 1 has a local variable and an inner function.
 *    Counter 2 has a global variable, has not innter function.
 *
 * 2. Which of the two uses a closure? How can you tell?
 *    Counter 1 uses a closure because it has an inner function.
 *
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better?
 *    Counter1 is preferable when you have a busy webpage with too many global variables that can get mixed   up and confused.  By enclosing the variable "let count = 0;", no other functions can get to it, so it is kind of a safegard for hiding/reserving that data.  Also, if you have too many global variables, that will take up memory space and make your program run slower.  We want o use closures when we have multiple global variables.  You want global variable when we need it to be accessible to all functions on the same page.
 *    Counter2 is better when you need some flexibility for using the variable in a different function or use the function with another variable or both. You want a local variable when when it is only used within that function and not needed       anywhere else;  once it is used, it is not kept in memory and saves space.
 *
 *
 *
 *
 *
 *
 *
 */

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
    count++;
  };
}

const counter1 = counterMaker();
// console.log(counterMaker()());

// counter2 code
let count = 0;

function counter2() {
  return count++;
}
//
//
//
//
//
//
//
//
//
/**
 * ### Challenge `counterMakerWithLimit`
 * THIS IS A STRETCH PROBLEM! ATTEMPT ONLY AFTER COMPLETING ALL NON-STRETCH CHALLENGES!
 *
 * @instructions
 * Implement a counter maker that takes a max value for the count.
 * A counter created with it will reset itself after reaching the max value.
 * Usage is as follows:
 *
 * const counter = counterMakerWithLimit(3)
 * counter() // should return 0
 * counter() // should return 1
 * counter() // should return 2
 * counter() // should return 3
 * counter() // should return 0
 * counter() // should return 1
 * counter() // should return 2
 * counter() // should return 3
 * counter() // should return 0
 * etc
 */
function counterMakerWithLimit(maxValue) {
  // set the initial count to 0
  let count = 0;
  // make a function that's going to increment count with an if condition
  return function counter() {
    //  as the count get increment, once it reaches the maximum value, display 0
    if (count > maxValue) {
      count = 0;
    }
    return count++;
  };
}

const counter = counterMakerWithLimit(3);
counter(); // should return 0 first run it 0 + 0 = 0
counter(); // should return 1 2nd run 0 = 1 = 1
counter(); // should return 2 3rd run 1 + 1 = 2
counter(); // should return 3 4th run 2 + 1 = 3
counter(); // should return 0 5th run 3 + 1 = 4 and 4 > 3 so it display 0
counter(); // should return 1 5th run last number was 0 so 0 + 1
counter(); // should return 2
counter(); // should return 3
counter(); // should return 0

/////////////// END OF CHALLENGE ///////////////
/////////////// END OF CHALLENGE ///////////////
/////////////// END OF CHALLENGE ///////////////
//
//
//
//
//
//
//
//
//
if (typeof exports !== "undefined") {
  // IGNORE: Test/Env Detected
  // For Node/Non-browser test env
  module.exports = module.exports || {};
  if (processFirstItem) {
    module.exports.processFirstItem = processFirstItem;
  }
  if (processLength) {
    module.exports.processLength = processLength;
  }
  if (processLastItem) {
    module.exports.processLastItem = processLastItem;
  }
  if (processSum) {
    module.exports.processSum = processSum;
  }
  if (processProduct) {
    module.exports.processProduct = processProduct;
  }
  if (processDuplicateFree) {
    module.exports.processDuplicateFree = processDuplicateFree;
  }
  if (lowerCaseStrings) {
    module.exports.lowerCaseStrings = lowerCaseStrings;
  }
  if (isItAnApple) {
    module.exports.isItAnApple = isItAnApple;
  }
  if (removeApple) {
    module.exports.removeApple = removeApple;
  }
  if (stringSmash) {
    module.exports.stringSmash = stringSmash;
  }
  if (getFullNames) {
    module.exports.getFullNames = getFullNames;
  }
  if (firstNamesAllCaps) {
    module.exports.firstNamesAllCaps = firstNamesAllCaps;
  }
  if (getRunnersByTShirtSize) {
    module.exports.getRunnersByTShirtSize = getRunnersByTShirtSize;
  }
  if (tallyUpDonations) {
    module.exports.tallyUpDonations = tallyUpDonations;
  }
  if (counterMakerWithLimit) {
    module.exports.counterMakerWithLimit = counterMakerWithLimit;
  }
}
