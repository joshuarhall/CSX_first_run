////////////
// addTwo // 
////////////

let addTwo = (el) => 2 + 10

//////////
// addS // 
//////////

const addS = (el) => el + "s";

//////////////
// sayHello // 
//////////////

const sayHello = (el) => "Hi " + el;

/////////////////
// wereAwesome // 
/////////////////

const wereAwesome = (you, yourBuddy) => `${yourBuddy} and ${you} are awesome!`;

////////////////
// lastLetter // 
////////////////

const lastLetter = (word) => word.at(-1);

///////////////////////
// Passing Arguments // 
///////////////////////

const one = isX1(5);
const two = isX2(3);

////////////////////////
// Invoking Functions // 
////////////////////////

let calls = "";

function jerry(str) { // first
	return "Jerry" + kramer()
}

function george(str) { // third
	return "George" + elaine();
}

function elaine(str) {  // last
	return "Elaine"
}

function kramer(str) { // second
	return "Kramer" + george();
}

///////////////
// makePlans // 
///////////////

function makePlans(name) {
  return callFriend(friendsAvailable, name);
}

function callFriend(bool, name) {
  if (bool) { 
  return `Plans made with ${name} this weekend`
  } else return "Everyone is busy this weekend"
}

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

///////////////////////////////////////////////
// Control Flow - if statements & remainders // 
///////////////////////////////////////////////

const iLoveEvenNumbers = num =>  num % 2 === 0 ? 'Oh Yeah Evens!' : 'I am too normal for odd numbers';

//////////////////
// getRemainder // 
//////////////////

const getRemainder = (num1, num2) => num1 > num2 ? num1 % num2 : num2 % num1;

////////////////////////////////////////////////////////
// Control Flow - if statements & multiple conditions // 
////////////////////////////////////////////////////////

function greetings(hour) {
	if (hour < 12) { return "Good Morning!"}
  else if (hour < 15) { return "Good Afternoon!"} 
  else return "Good Night!"
}  

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

////////////
// droids // 
////////////

// note: this breaks the rules, as it was supposed to use a for loop
function droids(arr) {
    let result = '';
    if (arr.includes("Droids")) {
          result = "Found Droids!"
      } else result = "These are not the droids you're looking for."
    return result;
  }
  
///////////////////
// Using forEach // 
///////////////////

function droids(arr) {
    let result = '';
    arr.forEach(function(el) {
      if (arr.includes("Droids")) {
        result = "Found Droids!"
      } else {
        result = "These are not the droids you're looking for."
      }
    })
    return result;
  }

/////////////////////////////
// Short-Circuiting a Loop // 
/////////////////////////////

function holidays(arr) {
  return arr.includes("October") ? "Happy Halloween" : "Have a great day!"
}

/////////////////////////////////////////
// For Loops - Updating Array Elements // 
/////////////////////////////////////////

function addN(arr, n){
  for (let i = 0; i < arr.length; i ++) {
    arr[i] += n;
  }
  return arr
} 

////////////////////////////////////////
// For Loops - Summing Array Elements // 
////////////////////////////////////////

function getTheSum(arr){
  let returnVal = 0; 
  for (let i = 0; i < arr.length; i++) {
  	returnVal += arr[i]  
  }
  return returnVal
}

/////////////////
// multiplyAll // 
/////////////////

function multiplyAll(...theArgs) {
  let total = 1;
  for (const arg of theArgs) {
    total *= arg
  }
  return total;
}

////////////////////////////////
// Loops - Summing Two Arrays // 
////////////////////////////////

function mergingElements(array1, array2){
  let newArr = [];
  for (let i = 0; i < array1.length; i++) {
    newArr.push(array1[i] + array2[i])
  }
  return newArr;
}

//////////////////////////
// Loops & Control Flow // 
//////////////////////////

function mergingTripletsAndQuints(array1, array2) {
	const newArr = [];
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] % 3 === 0 || array1[i] % 5 === 0 ) {
      newArr.push(array1[i] += array2[i])
    } else newArr.push(array1[i])
  }
  return newArr;
}

////////////////////////////
// While Loops - Counters // 
////////////////////////////

function imAboutToExplodeWithExcitement(n){
  if (n === 5) {
    console.log("Oh wow, I can't handle the anticipation!")
  } else if (n === 3) {
    console.log("I'm about to explode with excitement!")
  } else if (n === 0) {
    console.log("That was kind of a let down")
		return; // base case
  } else console.log(n)
  imAboutToExplodeWithExcitement(--n)
}

//////////////////////////////////////////////////////
// Control Flow - if statements and the Math object // 
//////////////////////////////////////////////////////

function closestToTheMark(player1, player2){
  const theMark = Math.floor(Math.random() * 100)
  console.log(`If theMark is ${theMark}...`);
  
  // ADD CODE HERE
  let winner = ""
  const playerOne = "Player 1"
  const playerTwo = "Player 2"
  if (Math.abs(player1 - theMark) > Math.abs(player2 - theMark)) {
    winner = playerOne
  } else winner = playerTwo
  return `${winner} is closest`
}

///////////////////
// Loops - Range // 
///////////////////

function getTheRange(arr){
  let high = -Infinity;
  let low = Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < low) {
      low = arr[i]
    }
    if (arr[i] > high) {
      high = arr[i]
    }
  }
  return [low, high, high-low];
}

/////////////////////////////////
// Loops - Multiple Conditions // 
/////////////////////////////////

function addingAllTheWeirdStuff(array1, array2){
  let sumOddArr2 = 0;
  let sumEvenArr2 = 0;
  for (let i = 0; i < array1.length; i++) {
    if (array2[i] % 2 === 0 ) {
      sumEvenArr2 += array2[i];
    } else sumOddArr2 += array2[i];
  }
  console.log(sumOddArr2)
  console.log(sumEvenArr2)
  
  let elOver20 = false
  
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] > 10) {
      array1[i]  += sumEvenArr2;
    } else if (array1[i] < 20) {
      array1[i] += sumOddArr2;
   } 
    if (array2[i] >= 20) {
      elOver20 = true
    }
  }
  console.log(elOver20)
  if (elOver20 = true) {
  // if (elOver20) {
    array1 = array1.map((el) => ++el)
  }
  return array1 
}

////////////////
// disemvowel // 
////////////////

const disemvowel = (str) => str.replace(/[aeiouAEIOU]/g, "")

//////////////
// addWaldo // 
//////////////

// ADD CODE HERE 

function addWaldo(obj) {
    obj.Waldo = "unknown"
    return obj
}

///////////////
// findWaldo // 
///////////////

function findWaldo(obj) {
  if (obj.Waldo) {
  	return obj.Waldo
  } else return "Where's Waldo?"
}

//////////////////
// arrayBuilder // 
//////////////////

function arrayBuilder(obj) {
	let returnArr = [];
	for (let key in obj) {
    while (obj[key] > 0) {
      returnArr.push(key) 
			obj[key]--
    }
  }
  return returnArr
}

/////////////////////////////////////
// Functions - Function Expression // 
/////////////////////////////////////

const myFunc = hello => "Hi there!"

/////////////////////
// Functions - ES6 // 
/////////////////////

const myJob = (name, profession) => `Hi, my name is ${name} and I'm a ${profession}.`;