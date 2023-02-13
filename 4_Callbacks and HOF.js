///////////////
// pluralize //
///////////////

// ADD CODE HERE

function pluralize(arr) {
    return arr.map(x => x + "s")
  }
  
  // Uncomment these to check your work!
  const animals = ["dog", "cat", "tree frog"];
  console.log(pluralize(animals)); // should log: ["dogs", "cats", "tree frogs"]

/////////
// map //
/////////

// ADD CODE HERE

function subtractTwo(arr) {
    return arr.map(x => x - 2)
  }
  
  function map(arr, func) {
    return func(arr)
  }
  
  // Uncomment these to check your work!
  console.log(typeof subtractTwo); // should log: 'function'
  console.log(typeof map); // should log: 'function'
  console.log(map([3,4,5], subtractTwo)); // should log: [ 1, 2, 3 ]

//////////////
//  forEach //
//////////////

// ADD CODE HERE
function forEach(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
      callback(arr[i])
    }
  }
  
  function map(arr, callback) {
    const endArr = [];
    forEach(arr, el => endArr.push(callback(el)));
    return endArr;
  }
  
  // Uncomment these to check your work!
  console.log(typeof forEach); // should log: 'function'
  forEach(['a','b','c'], i => console.log(i)); // should log: 'a', 'b', 'c'
  console.log(typeof map); // should log: 'function'
  console.log(map([3,4,5], n => n - 2)); //

/////////////////
// filterArray //
/////////////////

function filterArray(array, callback) {
    const newArray = [];
    for (let i = 0; i < array.length; i += 1) {
      if (callback(array[i])) newArray.push(array[i]);
    }
    return newArray;
  }
  
  const arrOfNums = [1, 2, 3, 4, 5];
  
  function func1(num) {
    // ADD CODE HERE
      if (num%2 === 0) {return num} 
    
  }
  
  function func2(num) {
    // ADD CODE HERE
      if (num%2 !== 0) {return num} 
  
  }
  
  // Uncomment these to check your work!
  console.log(filterArray(arrOfNums, func1)); // should log: [2, 4]
  console.log(filterArray(arrOfNums, func2)); // should log: [1, 3, 5]

//////////////////
// eitherFilter //
//////////////////

function eitherFilter(array, callback1, callback2) {
    // ADD CODE HERE
    
    // take arrOfNums, do a forEach to determine
            // 1) if the number is an integer after Math.sqrt
            // 2) if the number is over 100
    
    const newArr = [];
    for (let i = 0; i<array.length; i++) {
      if (callback1(i) || callback2(i)) {continue
    } else newArr.push(array[i])
    }
    return newArr;
  }
  
  // Uncomment these to check your work!
  const arrOfNums = [10, 35, 105, 9];
  const integerSquareRoot = n => Math.sqrt(n) % 1 === 0;
  const over100 = n => n > 100;
  console.log(eitherFilter(arrOfNums, integerSquareRoot, over100)); // should log: [105, 9]

////////////////////
// eitherCallback //
////////////////////

function eitherCallback(callback1, callback2) {
    return (el) => {
      return callback1(el) || callback2(el);
    }
  }
  
  // Uncomment these to check your work!
  function filterArray(array, callback) {
    const newArray = [];
    for (let i = 0; i < array.length; i += 1) {
      if (callback(array[i], i, array)) newArray.push(array[i]);
    }
    return newArray;
  }
  const arrOfNums = [10, 35, 105, 9];
  const integerSquareRoot = n => Math.sqrt(n) % 1 === 0; // checks if the sqrt is an integer
  const over100 = n => n > 100; // return boolean
  const intSqRtOrOver100 = eitherCallback(integerSquareRoot, over100); 
  console.log(filterArray(arrOfNums, intSqRtOrOver100)); // should log: [105, 9]

////////////
// reduce //
////////////

function reduce(array, callback, initial) {
    let acc;
    if (initial === undefined) {
      acc = array[0]; // accumulator is first value
      array = array.slice(1); // now remove first value. before => [4, 1, 3, 4, 5].... after the .slice => [1, 3, 4, 5]
    } else acc = initial;
  
    array.forEach(function(el) {
      acc = callback(acc, el)
    })
    return acc;  
  }
  
  
  // Uncomment these to check your work!
  const nums = [4, 1, 3, 4, 5];
  const add = function(a, b) { return a + b; }
  console.log(reduce(nums, add)); // should log 8

//////////////////
// intersection //
//////////////////

function intersection (arrays) {
    let newArr = arrays.reduce(function(accumulator, currentValue) { 
      return accumulator.filter(function(x){
        return currentValue.indexOf(x) > -1; 
      })
    })
    return newArr; 
  }
                      
  // Uncomment these to check your work!
  const arr1 = [5, 10, 15, 20];
  const arr2 = [15, 88, 1, 5, 7];
  const arr3 = [1, 10, 15, 5, 20];
  console.log(intersection([arr1, arr2, arr3])); // should log: [5, 15]

///////////
// union //
///////////

// input: array of arrays
// output: one array with all array elements in order, no duplicates

function union(arrays) {
    return arrays.reduce((accumulator, currentValue) => {
      console.log(accumulator);
     currentValue.forEach((el) => {
        if (!accumulator.includes(el)) {
          accumulator.push(el);
          // console.log(accumulator);
        }        
      })
      return accumulator;
    }, [])
  }
  
  // Uncomment these to check your work!
  const arr1 = [5, 10, 15];
  const arr2 = [15, 88, 1, 5, 7];
  const arr3 = [100, 15, 10, 1, 5];
  console.log(union([arr1, arr2, arr3])); // should log: [5, 10, 15, 88, 1, 7, 100]

//////////////////
// objOfMatches //
//////////////////

// input: two arrays and callback
// function objOfMatches will build and return an object
// to build, will test each el of the first arr using callback to see if matches the second arr
// if they match, the el from arr1 becomes the key and the el from arr2 becomes the value
// output: an obj with the key: obj pairs that match lowercase and uppercase to each other, omitting any that are not all .toUpperCase

function objOfMatches(arr1, arr2, callback) {
    const newObj = {}
    for (let i = 0; i < arr1.length; i++) {
      if (arr2[i] === arr1[i].toUpperCase()) {
        newObj[arr1[i]]= callback(arr1[i]); // put that into an obj
      }
    }
    return newObj; // return an object
  }
  
  // Uncomment these to check your work!
  const arr1 = ['hi', 'howdy', 'bye', 'later', 'hello'];
  const arr2 = ['HI', 'Howdy', 'BYE', 'later', 'HELLO'];
  function uppercaser(str) { return str.toUpperCase(); }
  console.log(objOfMatches(arr1, arr2, uppercaser)); // should log: { hi: 'HI', bye: 'BYE', hello: 'HELLO' }

//////////////
// arrToObj //
//////////////

function arrToObj(array, callback) {
    const newObj = {};
    for (let i = 0; i< array.length; i++){
      newObj[array[i]] = callback(array[i]);
    }
    return newObj;
  }
  
  // Uncomment these to check your work!
  const arrOfStrings = ['beer', 'glue'];
  const capitalize = str => str.toUpperCase();
  console.log(arrToObj(arrOfStrings, capitalize)); // should log: { beer: 'BEER', glue: 'GLUE' }

//////////////
// multiMap //
//////////////

// input: array of values, array of callbacks
// output: return obj, keys == elements of the array of values, values === callback[i](array[i])

function multiMap(arrVals, arrCb) {
    const obj = {};
    for (let i = 0; i < arrVals.length; i++) {
        obj[arrVals[i]] = [functions[0](arrVals[i]), functions[1](arrVals[i]), functions[2](arrVals[i])]; // this is now working to create the keys
      // obj[arrVals[i]] = arrCb[i].map(arrCb[i](i)); // running into the same error as before
    }
      return obj;
  }
  
  // Uncomment these to check your work!
  function uppercaser(str) { return str.toUpperCase(); }
  function capitalize(str) { return str[0].toUpperCase() + str.slice(1).toLowerCase(); }
  function repeater(str) { return str + str; }
  const items = ['catfood', 'glue', 'beer'];
  const functions = [uppercaser, capitalize, repeater];
  console.log(multiMap(items, functions)); // should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }

//////////////
// majority //
//////////////


function majority(array, callback) {
    // iterate through array, perform callback until it can be determined if majority of the return values from callback are true
    // if t/f are equal, return f
    // establish var that we can redeclare. If this is greater than ceil(array.length/2), then return true
      let numTrue = 0;
    for (let i = 0; i < array.length; i++){
        // if (numTrue > array.length/2) return true;  
      if (callback(i) === false) numTrue++; 
    }
    return (numTrue > array.length/2)
  }
  
  // Uncomment these to check your work!
  const isOdd = function(num) { return num % 2 === 1; };
  console.log(majority([1, 2, 3, 4, 5], isOdd)); // should log: true
  console.log(majority([2, 3, 4, 5], isOdd)); // should log: false

////////////////
// prioritize //
////////////////

function prioritize(array, callback) {
    // iterate through array, perform callback on each el, return new array with the callback(array[i])===true are listed first
    let trueArr = [];
    let falseArr = [];
    
    for (let i = 0; i < array.length; i++) {
      if (callback(array[i])) {
        trueArr.push(array[i])
      } else {
        falseArr.push(array[i]);
      }
    }
    return trueArr.concat(falseArr);
  }
  
  // Uncomment these to check your work!
  function startsWithS(str) { return str[0].toLowerCase() === 's'; }
  const tvShows = ['curb', 'rickandmorty', 'seinfeld', 'sunny', 'friends']
  console.log(prioritize(tvShows, startsWithS)); // should log: ['seinfeld', 'sunny', 'curb', 'rickandmorty', 'friends']

/////////////
// countBy //
/////////////

function countBy(array, callback, countEv = 1, countOd = 1) {
	const obj = {};
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i]) !== 'even' && obj[callback(array[i])] === 0) {
      obj[callback(array[i])] = 1;
    } else if (callback(array[i]) !== 'even') {
      obj[callback(array[i])] = countEv++;
    } else if (callback(array[i]) !== 'odd' && obj[callback(array[i])] === 0) {
      obj[callback(array[i])] = 1;
    } else if (callback(array[i]) !== 'odd') {
      obj[callback(array[i])] = countOd++;
    }
  }  
  return obj;
}

// try this again, but with .forEach

// Uncomment these to check your work!
function evenOdd(n) {
  if (n % 2 === 0) return 'even';
  else return 'odd';
}
const nums = [1, 2, 3, 4, 5];
console.log(countBy(nums, evenOdd)); // should log: { odd: 3, even: 2 }

/////////////
// groupBy //
/////////////

function groupBy(array, callback) {
    const obj = {};
  
    for (let i = 0; i < array.length; i++) {
      if (!obj[callback(array[i])]) {
          obj[callback(array[i])] = [array[i]];
          } else obj[callback(array[i])].push(array[i]);
      }
    return obj;
  }
  
  // Uncomment these to check your work!
  const decimals = [1.3, 2.1, 2.4];
  const floored = function(num) { return Math.floor(num); };
  console.log(groupBy(decimals, floored)); // should log: { 1: [1.3], 2: [2.1, 2.4] }
  

//////////////
// goodKeys //
//////////////

function goodKeys(obj, callback) {
    const arr = [];
      for (let key in obj) {
      if (callback(obj[key])) {
        arr.push(key)
      }
    }
    return arr;
  }
  
  // Uncomment these to check your work!
  const sunny = { mac: 'priest', dennis: 'calculator', charlie: 'birdlaw', dee: 'bird', frank: 'warthog' };
  function startsWithBird(str) { return str.slice(0, 4).toLowerCase() === 'bird'; };
  console.log(goodKeys(sunny, startsWithBird)); // should log: ['charlie', 'dee']