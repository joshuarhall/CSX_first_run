///////////////
// pluralize //
///////////////

function pluralize(arr) {
  return arr.map((el) => `${el}s`);
}

/////////
// map //
/////////

function subtractTwo(num) {
  return num -= 2;
}

function map(arr, cb) {
  const returnArr = [];
  for (let i = 0; i < arr.length; i++) {
    returnArr.push(cb(arr[i]))
  }
  return returnArr;
}

//////////////
//  forEach //
//////////////

function forEach(arr, cb) {
  for (let i = 0; i < arr.length; i ++) {
    arr[i] = cb(arr[i]);
  }
}

function map(arr, cb) {
  forEach(arr, cb);
  return arr;
}

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
	if (num % 2 === 0) {
    return num;
  }
}
function func2(num) {
  // ADD CODE HERE
  if (num % 2 !== 0) {
    return num;
  }
}

//////////////////
// eitherFilter //
//////////////////

function eitherFilter(array, callback1, callback2) {
  const newArr = [];
	for (let i = 0; i < array.length; i++) {
    if (callback1(array[i]) || callback2(array[i])) {
      newArr.push(array[i]);
    }
  }
  return newArr;
}

////////////////////
// eitherCallback //
////////////////////

function eitherCallback(callback1, callback2) {
  // ADD CODE HERE
  return (el) => callback1(el) || callback2(el)  // 
}

////////////
// reduce //
////////////

function reduce(arr, cb, sum) {
  for (let i = 0; i < arr.length; i++) {
    sum = cb(sum, arr[i]);
  }
  return sum
}

//////////////////
// intersection //
//////////////////

function intersection(arrays) {
  let returnArr = arrays.reduce((acc, curr) => {
    if (acc === undefined) { // if initial val is undefined, set to curr
      return acc = curr;
    } else {
      return acc.filter((el) =>  curr.indexOf(el) > -1) // filter 
    }
  }); // No initial provided, thus uses 0.
  return returnArr;
}

///////////
// union //
///////////

function union(arrays) {
  return arrays.reduce(function (acc, curr) {
    if (acc === undefined) {
      return curr
    } else 
    return acc.concat(curr.filter((el) => !acc.includes(el)));
}

//////////////////
// objOfMatches //
//////////////////

function objOfMatches(arr1, arr2, cb) {
  let newObj = {};
  for (let i = 0; i < arr1.length; i++)  {
    if (cb(arr1[i]) === arr2[i]) {
      newObj[arr1[i]] = arr2[i]
    }
  }
  return newObj; 
}

//////////////
// arrToObj //
//////////////

function arrToObj(array, callback) {
  let returnObj = {};
	array.forEach(el => returnObj[el] = callback(el))  
  return returnObj;
}

//////////////
// multiMap //
//////////////

// input: array of values, array of callbacks
// output: return obj, keys == elements of the array of values, values === callback[i](array[i])

function multiMap(arrVals, arrCb) {
  let newObj = {};
  for (let i = 0; i < arrVals.length; i++) {
    newObj[arrVals[i]] = arrCb.map(el => el(arrVals[i])); 
  }
  return newObj;
}

//////////////
// majority //
//////////////

function majority(arr, cb) {
  let ifFalse = 0;
  let ifTrue = 0;
  arr.forEach(el => cb(el) ? ifTrue++: ifFalse++)
  return numOdd > ifFalse;//either true or false
}

////////////////
// prioritize //
////////////////

function prioritize(arr, cb) {
  let arrTrue = [];
  for (let i = 0; i < arr.length; i++) {
    if (cb(arr[i])) {
      arrTrue.push(arr[i]);
    }
  }
  return arrTrue.concat(arr.filter(el => !cb(el)))
}

/////////////
// countBy //
/////////////

function countBy(arr, cb) {
  let newObj = {};
  arr.forEach(function(el) {
    if (!newObj[cb(el)]) {
      newObj[cb(el)] = 1;
    } else newObj[cb(el)] += 1
  })
  return newObj;
}

/////////////
// groupBy //
/////////////

function groupBy(arr, cb) {
  let newObj = {};
  arr.forEach(function(el) {
    if (!newObj[cb(el)]) {
      newObj[cb(el)]  = [el]
    } else newObj[cb(el)].push(el)     
   }); // need to add a if(thing exists) 
	return newObj;
} 

//////////////
// goodKeys //
//////////////

function goodKeys(obj, cb) {
  let newArr =[]; 
  for (let el in obj) {
    if (cb(obj[el])) {
      newArr.push(el)
    }
  }
  return newArr;
}