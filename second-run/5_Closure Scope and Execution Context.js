////////////////////
// createFunction //
////////////////////

const createFunction = () => () => "hello world"

/////////////////////////////
// createFunctionWithInput //
/////////////////////////////

const createFunctionWithInput = (input) => () => input;

/////////////
// Scoping //
/////////////

function outer() {
  let counter = 0; // this variable is outside incrementCounter's scope
  function incrementCounter() {
    counter++;
    console.log('counter', counter);
  }
  return incrementCounter;
}

////////////
// addByX //
////////////

const addByX = (num) => (x) => num +=x;

//////////
// once //
//////////

function once(cb) {
  let returnVal;
  function inner(num) {
    if (returnVal === undefined) {
      returnVal = cb(num)
  	} 
    return returnVal
  }
  return inner;
}

///////////
// after //
///////////

function after(num, cb) {
  let count = 1;
  function inner(str) {
    if (count === num) {
       return cb(str);
    } else count ++;
  }
  return inner; 
}

///////////
// delay //
///////////

const delay = (cb, time) => () => setTimeout(cb, time); 

////////////////
// saveOutput //
////////////////

function saveOutput(cb, pw) {
  let newObj = {}
  function inner(str) {
    if (str !== pw) {
      newObj[str] = cb(str)
    	return cb(str);    
    } else return newObj;    
  }
  return inner
}

///////////////////
// cycleIterator //
///////////////////

function cycleIterator(arr) {
  let count = 0
  function inner() {
    if (count < arr.length) {
      count ++
      return arr[count - 1]
    } else {
      count = 0;
      return arr[count];
    }
  }
  return inner;
}

////////////////////
// defineFirstArg //
////////////////////

function defineFirstArg(cb, arg) {
  function inner(...num) {
    return cb(arg, ...num);
  }
  return inner;
}

//////////////////
// hobbyTracker //
//////////////////

function hobbyTracker(hobbies) {
  let newObj = {};
  function inner(str, num) {
    // populate the cached obj from array hobbies
    if (!newObj[hobbies[0]]) {
      hobbies.forEach(el => newObj[el] = 0) 
    }
    // if str and num are undefined, reset vals to 0 and return string
    if (str === undefined && Object.values(newObj).length === hobbies.length) {
      Object.keys(newObj).forEach((item) => newObj[item] = 0)
      return "tracker has been reset!";
    } else if (newObj[str]) {
      newObj[str] += num;
      return newObj;
    } else  newObj[str] = num;
    return newObj
  }
  return inner;
}

///////////////
// dateStamp //
///////////////

function dateStamp(cb) {
  let newObj = {};
  const today = new Date(); //
  function inner(...num) {
    newObj["date"] = today.toDateString()
    newObj["output"] = cb(...num);
    return newObj;
  }
  return inner;
}

////////////
// censor //
////////////

function censor() {
  let cache = [];
  function inner(str1, str2) { 
    if (str2) {
      cache.push([str1, str2]);
      return 
    } 
		if (!str2) {
      for (let i = 0; i < cache.length; i++) {
        str1 = str1.replace(cache[i][0], cache[i][1])
      }
    }
    return str1;
    }
  return inner;
}
