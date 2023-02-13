////////////////////
// createFunction //
////////////////////

function createFunction() {
    function inner() {
      return "hello world"
    }
    return inner;
  }
  
  // Uncomment these to check your work!
  const myFunction = createFunction();
  // console.log(myFunction)
  console.log(myFunction()); //should log: 'hello world'

/////////////////////////////
// createFunctionWithInput //
/////////////////////////////

function createFunctionWithInput(par) {
    function internal() {
      return par
    }
    return internal;
  }
  
  // UNCOMMENT THESE TO TEST YOUR WORK!
  const sampleFunc = createFunctionWithInput('sample');
  console.log(sampleFunc()); // should log: 'sample'
  const helloFunc = createFunctionWithInput('hello');
  console.log(helloFunc()); // should log: 'hello'

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
  
  const willCounter = outer();
  const jasCounter = outer();
  
  // Uncomment each of these lines one by one.
  // Before your do, guess what will be logged from each function call.
  
  willCounter();
  willCounter();
  willCounter();
  
  jasCounter();
  willCounter();

////////////
// addByX //
////////////

function addByX(par) {
    // return a func that will add an input by X
    function internal(x) {
      return x += par;
    }
    return internal;
  }
  
  const addByTwo = addByX(2);
  
  // Now call addByTwo with an input of 1 and log the output
  console.log(addByTwo(1));
  
  // Now call addByTwo with an input of 2 and log the output
  console.log(addByTwo(2));

//////////
// once //
//////////

function once(callback) {
    let counter = 0;
 let cachedVal;
 function inter(par) {
   if (counter === 1) {
     return cachedVal
   }
     counter ++
   cachedVal = callback(par)
       return cachedVal;
 }
 return inter; 
}

const addByTwoOnce = once(function(num) {
 return num + 2;
});

// UNCOMMENT THESE TO TEST YOUR WORK!
console.log(addByTwoOnce(5));  //should log 7
console.log(addByTwoOnce(10));  //should log 7
console.log(addByTwoOnce(9001));  //should log 7

///////////
// after //
///////////

function after(printOn, callback) {
	let counter = 0
  function inter(str) {
    counter ++
    if (counter >= printOn) {
			return callback(str)
    }
  }
  return inter;
}

const called = function(string) { return('hello ' + string); };
const afterCalled = after(3, called);

// UNCOMMENT THESE LINES TO TEST YOUR WORK
console.log(afterCalled('world')); // -> undefined is printed
console.log(afterCalled('world')); // -> undefined is printed
console.log(afterCalled('world')); // -> 'hello world' is printed
console.log(afterCalled('world'));

///////////
// delay //
///////////

function delay(callback, waitTime) {
    function inner() {
      setTimeout(callback, waitTime)
    }
    return inner
  }
  
  // UNCOMMENT THE CODE BELOW TO TEST DELAY
  let count = 0;
  const delayedFunc = delay(() => count++, 1000);
  delayedFunc();
  console.log(count); 												 // should print '0'
  setTimeout(() => console.log(count), 1000); // should print '1' after 1 second

////////////////
// saveOutput //
////////////////

function saveOutput(callback, password) {
    const obj = {};
    function inner(arg) {
      if (arg !== password){
          obj[arg] = callback(arg)
        return callback(arg)
      }
      return obj;
    }
    return inner;
  }
  
  // Uncomment these to check your work!
  const multiplyBy2 = function(num) { return num * 2; };
  const multBy2AndLog = saveOutput(multiplyBy2, 'boo');
  console.log(multBy2AndLog(2)); // should log: 4
  console.log(multBy2AndLog(9)); // should log: 18
  console.log(multBy2AndLog('boo')); // should log: { 2: 4, 9: 18 }

///////////////////
// cycleIterator //
///////////////////

function cycleIterator(array) {
    let counter = -1
    function inner() {
      counter ++;
      if (counter < array.length) {
              return array[counter]
      } else if (counter === array.length) {
        counter = 0;
        return array[counter];
      } 
    }
    return inner;
  }
  
  // Uncomment these to check your work!
  const threeDayWeekend = ['Fri', 'Sat', 'Sun'];
  const getDay = cycleIterator(threeDayWeekend);
  console.log(getDay()); // should log: 'Fri'
  console.log(getDay()); // should log: 'Sat'
  console.log(getDay()); // should log: 'Sun'
  console.log(getDay()); // should log: 'Fri'

////////////////////
// defineFirstArg //
////////////////////

function defineFirstArg(callback, arg) {
	function inner(...args) {
    return callback(arg, ...args)
  }
	return inner;
}

// Uncomment these to check your work!
const subtract = function(big, small) { return big - small; };
const subFrom20 = defineFirstArg(subtract, 20);
console.log(subFrom20(5)); // should log: 15


//////////////////
// hobbyTracker //
//////////////////

function hobbyTracker(hobbies, num) {
    const obj = {};
    
    // populate the object with the info from hobbies array
    for (let i = 0; i < hobbies.length; i++) {
      obj[hobbies[i]] = 0
    }
    // console.log(obj)
    
    function inner(hobby, num) {
      if (hobby === undefined && num === undefined) {
        for (let val in obj) {
          obj[val] = 0
        }
        console.log(obj)
        return "tracker has been reset!"
      }
      obj[hobby] = obj[hobby] += num;
      return obj
    }
    return inner;
  }
  
  
  
  
  // Uncomment the code below to check your code:
  const updateHobbies = hobbyTracker(['yoga', 'baking', 'piano']);
  // console.log(updateHobbies('yoga', 2)); // --> { yoga: 2, baking: 0, piano: 0} 
  // console.log(updateHobbies('baking', 4)); // --> { yoga: 2, baking: 4, piano: 0 }
  // console.log(updateHobbies('yoga', 1)); // --> { yoga: 3, baking: 4, piano: 0 }
  console.log(updateHobbies('piano', 2)); // --> { yoga: 3, baking: 4, piano: 2 }
  console.log(updateHobbies()); // --> 'tracker has been reset!'
  console.log(updateHobbies('baking', 1)); // --> { yoga: 0, baking: 1, piano: 0}

///////////////
// dateStamp //
///////////////

function dateStamp(callback) {
    const obj = {};
    const today = new Date();
    function inner(...args) {
      obj["date"] = today.toDateString()// today's date
      obj["output"] = callback(...args) // using ...args here b/c the passed in function might need multiple args. This is a sort of CYA.
      return obj; // obj with a date key and value of today's date (date, not time). Basically, obj with a record of date the function was run and the output of the callback
    }
    return inner;
  }
  
  // Uncomment these to check your work!
  const stampedMultBy2 = dateStamp(n => n * 2);
  console.log(stampedMultBy2(4)); // should log: { date: (today's date), output: 8 }
  console.log(stampedMultBy2(6)); // should log: { date: (today's date), output: 12 }

////////////
// censor //
////////////

function censor() { // 
    const cache = {};
    let counter = 1;
    function inner(str1, str2) { 
      if (str1 && str2){
        cache[counter] = [str1, str2]
        counter ++;
        console.log(cache)
        return;
      } else if (str2 === undefined && cache[1] !== undefined) { 
        let returnVal = str1;
        for (let i = 0; i < Object.entries(cache).length; i++)  {
          returnVal = returnVal.replace(cache[i+1][0], cache[i+1][1]) // not there yet. need to call back to the specific array element within the object value
        }      
        return returnVal
      } else if (str2 === undefined && cache == undefined) { 
        return str1
      }
    }
    return inner;
  }


// Uncomment these to check your work!
const changeScene = censor();
changeScene('dogs', 'cats');
changeScene('quick', 'slow');
console.log(changeScene('The quick, brown fox jumps over the lazy dogs.')); // should log: 'The slow, brown fox jumps over the lazy cats.'