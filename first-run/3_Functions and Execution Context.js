////////////
// addTwo // 
////////////

// ADD CODE HERE
const addTwo = (num) => num + 2;

// Uncomment these to check your work!
console.log(typeof addTwo); // should log: 'function'
console.log(addTwo(10)); // should log: 12

//////////
// addS // 
//////////

// ADD CODE HERE
const addS = (str) => str + "s";

// Uncomment these to check your work!
console.log(typeof addS); // should log: 'function'
console.log(addS('cat')); // should log: 'cats'


//////////////
// sayHello // 
//////////////

// ADD CODE HERE
const sayHello = (str) => `Hi, ${str}`;

// Uncomment these to check your work!
console.log(sayHello('Mary')); // should log: 'Hi, Mary'
console.log(sayHello('Haley')); // should log: 'Hi, Haley'

/////////////////
// wereAwesome // 
/////////////////

const wereAwesome = (you, yourBuddy) => `${yourBuddy} and ${you} are awesome!`;

// Uncomment the lines below to test your function:
console.log(wereAwesome("Dave", "Will")); // => "Will and Dave are awesome!"
console.log(wereAwesome("Victoria", "Jenny")); // => "Jenny and Victoria are awesome!"
console.log(wereAwesome("Chris", "Jac")); // => "Jac and Chris are awesome!"
console.log(wereAwesome("Phillip", "Skyler")); // => "Skyler and Phillip are awesome!"

////////////////
// lastLetter // 
////////////////

const lastLetter = (word) => word.at(-1);

// Uncomment the lines below to test your code
console.log(lastLetter("hello")); //=> "o"
console.log(lastLetter("goodbye!")); //=> "!"
console.log(lastLetter("ZeltoiD")); //=> "D"
console.log(lastLetter("I love Javascript")); //=> "t"

///////////////////////
// Passing Arguments // 
///////////////////////

const x = 3;

function isX1(num) {
    const x = 5;
    return num === x;
}

function isX2(num) {
    return num === x;
}

const one = isX1(5);
const two = isX2(3/* ADD CODE HERE */);

// Uncomment these to check your work!
console.log(one); // should log: true
console.log(two); // should log: true


////////////////////////
// Invoking Functions // 
////////////////////////

let calls = "";

function jerry(str) {
  str += "Jerry";
	return kramer(str);
}

function george(str) {
  str += "George";
	return elaine(str);
}

function elaine(str) {
  str += "Elaine";
	return str;
}

function kramer(str) {
  str += "Kramer";
	return george(str);
}


// Uncomment these to check your work!
calls = jerry(calls);
console.log(calls); // should log: 'JerryKramerGeorgeElaine'

///////////////
// makePlans // 
///////////////

let friendsAvailable = true;

function makePlans(name) {
  // INSERT CODE HERE
  if (friendsAvailable) {
    return `Plans made with ${name} this weekend`
  }
}

function callFriend(bool, name) {
  // INSERT CODE HERE
  if (bool) {return // makePlans(name)
  return `Plans made with ${name} this weekend.`
  } else return `Everyone is busy this weekend`
}

// Uncomment these to check your work!
console.log(makePlans("Mary")) // should return: "Plans made with Mary this weekend'
friendsAvailable = false;
console.log(makePlans("James")) //should return: "Everyone is busy this weekend."
console.log(callFriend(friendsAvailable, "Josh"));

///////////////////////////////////////
// Functions - Display vs. Execution // 
///////////////////////////////////////

function add20 (num){
    return num + 20
  }
  
  // CREATE YOUR CONSOLE.LOG BELOW 
  console.log(add20(20));

///////////
// isOdd // 
///////////

const isOdd = num =>  num % 2 === 0 ? false : true;

// Uncomment these to check your work!
console.log(isOdd(5)); // should log: true
console.log(isOdd(2008)); // should log: false

///////////////////////////////////////////////
// Control Flow - if statements & remainders // 
///////////////////////////////////////////////

// ADD CODE HERE
const iLoveEvenNumbers = num =>  num % 2 === 0 ? 'Oh Yeah Evens!' : 'I am too normal for odd numbers';


// Uncomment these to check your work!
// console.log(iLoveEvenNumbers(42)); // expected log 'Oh Yeah Evens!'
// console.log(iLoveEvenNumbers(17)); // expected log 'I am too normal for odd numbers'


//////////////////
// getRemainder // 
//////////////////

// function getRemainder(num1, num2) {
//   if (num1 > num2) { 
//   return num1 % num2
//   } else return num2 % num1 
// }

const getRemainder = (num1, num2) => num1 > num2 ? num1 % num2 : num2 % num1;

// Uncomment the lines below to test your code
console.log(getRemainder(17, 5)); // => 2
console.log(getRemainder(20, 5)); // => 0
console.log(getRemainder(8, 22)); // => 6
console.log(getRemainder(7, 42)); // => 0

////////////////////////////////////////////////////////
// Control Flow - if statements & multiple conditions // 
////////////////////////////////////////////////////////

function greetings(hour) {
    // ADD CODE HERE
    if (hour < 12) {
      return "Good Morning!" 
    } else if (hour < 15) {
      return "Good Afternoon!"
    } else return "Good Night!"
  }
  
  // Uncomment these to check your work!
  console.log(greetings(8)); // expected log 'Good Morning!'
  console.log(greetings(12)); // expected log 'Good Afternoon!'
  console.log(greetings(14)); // expected log 'Good Afternoon!'
  console.log(greetings(15)); // expected log 'Good Night!'
  console.log(greetings(18)); // expected log 'Good Night!'
  

/////////////////////
// gradeCalculator // 
/////////////////////

function gradeCalculator(grade) {
    // ADD CODE HERE
    if (grade >= 90) {return "A"} 
    else if (grade >= 80) {return "B"}
    else if (grade >= 70) {return ""}
    else if (grade >= 60) {return "D"}
    else return "F"
  }
  
  // Uncomment the lines below to test your code
  console.log(gradeCalculator(92)); // => "A"
  console.log(gradeCalculator(84)); // => "B"
  console.log(gradeCalculator(70)); // => "C"
  console.log(gradeCalculator(61)); // => "D"
  console.log(gradeCalculator(43)); // => "F"

////////////
// droids // 
////////////

function droids(arr) {
    let result = '';
    // ADD CODE HERE
    if (arr.includes("Droids")) {
          result = "Found Droids!"
      } else result = "These are not the droids you're looking for."
    return result;
  }
  
  // Uncomment these to check your work! 
  const starWars = ["Luke", "Finn", "Rey", "Kylo", "Droids"] 
  const thrones = ["Jon", "Danny", "Tyrion", "The Mountain", "Cersei"] 
  console.log(droids(starWars)) // should log: "Found Droids!"
  console.log(droids(thrones)) // should log: "These are not the droids you're looking for."

///////////////////
// Using forEach // 
///////////////////

function droids(arr) {
    let result = '';
    // ADD CODE HERE
    
    function funcName(el) {
      if (el == "Droids") {
          result = "Found Droids!"
      } else {
      result = "These are not the droids you're looking for."
      }
    }
    
      arr.forEach(funcName)
  // }
    return result;
  }
  
  // Uncomment these to check your work! 
  const starWars = ["Luke", "Finn", "Rey", "Kylo", "Droids"] 
  const thrones = ["Jon", "Danny", "Tyrion", "The Mountain", "Cersei"] 
  console.log(droids(starWars)) // should log: "Found Droids!"
  console.log(droids(thrones)) //should log: "These are not the droids you're looking for."

/////////////////////////////
// Short-Circuiting a Loop // 
/////////////////////////////

// times completed up to this point -- 2x 

// function holidays(arr) {
//   // Do not use a variable to store your result 
//   // ADD CODE HERE
//   if (arr.includes("October")) {
//     return "Happy Halloween";
//   } else return "Have a great day!";
// }

// const holidays = (arr) => arr.includes("October") ? "Happy Halloween" : "Have a great day!";

function holidays(arr) {
	for (let i = 0; i < arr.length; i ++) {
    if (arr.includes("October")) {
    return "Happy Halloween"; // this is the short circuit 
  	} 
  } 
  return "Have a great day!";
}

// Uncomment these to check your work!
const months = ["April", "May", "June", "October"];
const animals = ["Cats", "Dogs", "Pigs"];
console.log(holidays(months)); // should return: "Happy Halloween"
console.log(holidays(animals)); // should return: "Have a great day!"

/////////////////////////////////////////
// For Loops - Updating Array Elements // 
/////////////////////////////////////////

function addN(arr, n){
	return arr.map(el => el += n);
} 

// Uncomment these to check your work!
console.log(addN([1, 2, 3], 3)); // expected log [4, 5, 6]
console.log(addN([3, 4, 5], 2)); // expected log [5, 6, 7]

////////////////////////////////////////
// For Loops - Summing Array Elements // 
////////////////////////////////////////

function getTheSum(arr){
    // ADD CODE HERE
    let sum = 0;
    
    // option 1 -- following instructions with a for loop.
    // for (let i = 0; i < arr.length; i++) {
    //   sum += arr[i];
    // }
    
    // option 2 -- using .forEach
    arr.forEach(el => sum += el);
    return sum; 
  }
  
  
  
  // Uncomment these to check your work!
  console.log(getTheSum([3, 6, 9])); // expected log 18
  console.log(getTheSum([10, 11, 12])); // expected log 33

/////////////////
// multiplyAll // 
/////////////////

// ADD CODE HERE 
function multiplyAll(... theArgs) {
    let total = 1; // initialized value
    for (let arg of theArgs) {
      total *= arg;
    }
    return total;
  }
  
  // Uncomment these to check your work!
  console.log(multiplyAll(9, 4, 5, 6, 7, 2, 1, 8, 3)) // should log: 362880
  console.log(multiplyAll(5, 5, 5, 3)) // should log: 375

////////////////////////////////
// Loops - Summing Two Arrays // 
////////////////////////////////

function mergingElements(array1, array2){
    // ADD CODE HERE
    // return a new array of array1[i] + array2[i]
    const returnArr = [];
    
    for (let i=0; i<array1.length; i++) {
      returnArr.push(array1[i] + array2[i]);
    }
    return returnArr;
  }
  
  // Uncomment these to check your work!
  console.log(mergingElements([1, 2, 3, 4], [5, 6, 7, 8])); // expected log [6, 8, 10, 12]
  console.log(mergingElements([7, 3, 6, 0], [3, 9, 17, 81])); // expected log [10, 12, 23, 81]
  
  
  
  /// original code from first time I solved this
  
  // function mergingElements(array1, array2){
  //   // ADD CODE HERE
  //   // which adds each element in array1 to the corresponding element of array2 and returns the new array.
  //   let array3 = [];
  //   for (let i = 0; i < array1.length; i++) {
  //     array3.push(array1[i] + array2[i]);
  //   }
  //   return array3
  // }

//////////////////////////
// Loops & Control Flow // 
//////////////////////////

function mergingTripletsAndQuints(array1, array2) {
    const array3 = [];
    for (let i = 0; i < array1.length; i++) {
      array1[i] % 3 === 0 || array1[i] % 5 === 0 ? array3[i] = array1[i] += array2[i] : array3[i] = array1[i];
    }
    return array3;
  }
  
  // Uncomment these to check your work!
  console.log(mergingTripletsAndQuints([1, 2, 3, 4, 5, 15], [1, 3, 6, 7, 8, 9])); // expected log [1, 2, 9, 4, 13, 24]
  console.log(mergingTripletsAndQuints([1, 1, 3, 9, 5, 15], [1, 2, 3, 4, 5, 6])); // expected log [1, 1, 6, 13, 10, 21]
  
  
  // old answers
  // function mergingTripletsAndQuints(array1, array2) {
  //   // ADD CODE HERE
  //    const array3 = [];
  //    for (let i = 0; i<array1.length; i++) {
  //      if (array1[i] % 3 === 0 || array1[i] % 5 === 0) {
  //        array3.push(array1[i]+array2[i]) 
  //       } else {array3.push(array1[i])}
  //    } 
  //   return array3
  //  }
   

////////////////////////////
// While Loops - Counters // 
////////////////////////////

function imAboutToExplodeWithExcitement(n){
    // ADD CODE HERE
    let i=10;
    while (i>5) {
      console.log(i)
      i--
    }
    console.log('Oh wow, I can't handle the anticipation!');
    while (i>3) {
      console.log(i)
      i--
    }
    console.log('I'm about to explode with excitement!')
    while (i>1) {
    console.log(i)
    i--
  }
    console.log('That was kind of a let down')
  
  }
  
  // Uncomment the line below to check your work!
  imAboutToExplodeWithExcitement(10); // expected log 10, 9, 8, 7, 6, 'Oh wow, I can't handle the anticipation!', 4, I'm about to explode with excitement!', 2, 1, 'That was kind of a let down'

//////////////////////////////////////////////////////
// Control Flow - if statements and the Math object // 
//////////////////////////////////////////////////////

function closestToTheMark(player1, player2){
    const theMark = Math.floor(Math.random() * 100)
    console.log(`If theMark is ${theMark}...`);
    // ADD CODE HERE
      if (player1 < player2) {
      return "Player 1 is closest"
    } else {
      return "Player 2 is closest"
    }  
  }
  
  // Uncomment the line below to check your work!
  console.log(closestToTheMark(25, 75));
  

///////////////////
// Loops - Range // 
///////////////////

function getTheRange(arr){
	let low = Infinity;
  let high = -Infinity;
  for (let i = 0; i<arr.length; i++) {
    if (arr[i] < low) {
      low = arr[i]
    } else if (arr[i] > high) {
      high = arr[i]
    }
  }
  return [low, high, high - low];
}

// Uncomment these to check your work!
console.log(getTheRange([3, 2, 5, 4, 7, 9, 10])); // expect log [2, 10, 8]

/////////////////////////////////
// Loops - Multiple Conditions // 
/////////////////////////////////

function addingAllTheWeirdStuff(array1, array2){
    // ADD CODE HERE
    //adds the sum of all the odd numbers in array2 to each element under 10 in array1. 
    
    let arr2SumEven = 0
    let arr2SumOdd = 0	
  
    function arr2Sums() {    // identify all odd numbers of array2 and sum them
      for (let i=0; i<array2.length; i++) {
        if (array2[i] % 2 != 0) {   // odd
          arr2SumOdd += array2[i]
        } else {                    // even
          arr2SumEven += array2[i]
        } 
  
      }
    return {
      arr2SumOdd: arr2SumOdd,
      arr2SumEven: arr2SumEven
    }
    }
    
    let arr2SumsResults = arr2Sums()
    // console.log(arr2SumsResults)
    
    
      for (let i=0; i<array1.length; i++) {
        if (array1[i] < 10) {									// under 10
      //add 
          array1[i] = array1[i] + arr2SumsResults.arr2SumOdd
        } else if (array1[i] > 10) {		    	// over 10
      //add 
          array1[i] = array1[i] + arr2SumsResults.arr2SumEven
        }
      }
    
    for (let i=0; i<array1.length; i++) {
        if (array2[i] > 20) {
          // add one to everything and then stop
              // array1.forEach(element => element += 1);
  
        array1.forEach((num, index) => {
                array1[index] = num + 1;
              } )}
        } 
    
    //Similarly, addingAllTheWeirdStuff should also add the sum of all the even numbers in array2 to those elements over 10 in array1.
  
      //BONUS: If any element in array2 is greater than 20, add 1 to every element in array1.
    return array1
  }
  
  // Uncomment these to check your work!
  console.log(addingAllTheWeirdStuff([1, 3, 5, 17, 15], [1, 2, 3, 4, 5])); // expected log [10, 12, 14, 23, 21]
  console.log(addingAllTheWeirdStuff([1, 3, 5, 17, 15, 1], [1, 2, 3, 4, 5, 22])); // expected log [11, 13, 15, 46, 44, 11]
  

////////////////
// disemvowel // 
////////////////

function disemvowel(string) {
    // ADD CODE HERE
    // return a string that removes all vowels
    
    
    // console.log(string[2])
    for (let i=0; i<string.length; i++) {
        string = string.replace(/[aeiou]/gi, "") 
    } return string
  }
  
  // Uncomment these to check your work!
  console.log(disemvowel('CodeSmith')); // => 'CdSmth'
  console.log(disemvowel('BANANA')); // => 'BNN'
  console.log(disemvowel('hello world')); // => 'hll wrld'

//////////////
// addWaldo // 
//////////////

// ADD CODE HERE 

function addWaldo(obj) {
    obj.Waldo = "unknown"
    return obj
  }
  // Uncomment these to check your work!
  const siliconValley = {'Richard': 'Hendricks', 'Erlich': 'Bachman', 'Bertram': 'Gilfoyle'}
  console.log(addWaldo(siliconValley)) // should log:{ Richard: 'Hendricks', Erlich: 'Bachman', Bertram: 'Gilfoyle', Waldo: 'unknown' }

///////////////
// findWaldo // 
///////////////

// ADD CODE HERE
function findWaldo(obj) {
    if (obj.hasOwnProperty("Waldo")) {
    return obj.Waldo
    } else return "Where's Waldo?"
  }
  
  
  // Uncomment these to check your work!
  const DC = {'Bruce': 'Wayne', 'Harley': 'Quinn'}
  const supernatural = {'Sam': 'Winchester', 'Dean': 'Winchester', 'Waldo': 'unknown'}
  console.log(findWaldo(DC)) // should log: 'Where's Waldo?'
  console.log(findWaldo(supernatural)) // should log: 'unknown'

//////////////////
// arrayBuilder // 
//////////////////

function arrayBuilder(obj) { // parameter is an object
    const returnArr = [];
    const keysArr = Object.keys(obj); // creates array from keys
    const valuesArr = Object.values(obj); // creates array from values
    // console.log(keysArr)
    // console.log(valuesArr)
    for (let i = 0; i<valuesArr[0]; i++) {
        returnArr.push(keysArr[0])
    }
    for (let i = 0; i<valuesArr[1]; i++) {
        returnArr.push(keysArr[1])
    }
    return returnArr;
  };
  
  // Uncomment these to check your work!
  console.log(arrayBuilder({ 'cats': 2, 'dogs': 1 })); // => ['cats', 'cats', 'dogs']
  console.log(arrayBuilder({})); // => []

/////////////////////////////////////
// Functions - Function Expression // 
/////////////////////////////////////


// MODIFY THE CODE BELOW 
const myFunc = hello => "Hi there!"
// function functionDeclaration() {
//   return "Hi there!";
// }

console.log(myFunc()) //should log: "Hi there!"

/////////////////////
// Functions - ES6 // 
/////////////////////

// function myJob (name, profession) {
//   return `Hi, my name is ${name} and I'm a ${profession}.`
// }

const myJob = (name, profession) => `Hi, my name is ${name} and I'm a ${profession}.`;

console.log(myJob("Jon", "Knights Watchman")); 