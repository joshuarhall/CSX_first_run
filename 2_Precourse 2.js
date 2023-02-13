/////////////////////////////////
// Arrays - Examining Elements // 
/////////////////////////////////

const horror = ['Freddy', 'Jason', 'Michael', 'Ghostface', 'Chucky'];

// ADD CODE HERE
const fourthItem = horror[3];

// Write a console.log statement below to check your work!
console.log(fourthItem);

//////////////////////////////
// Arrays - Adding Elements // 
//////////////////////////////

const  netflixShows = ["Orange is the New Black", "Black Mirror", "Chewing Gum"];

// ADD CODE HERE
let newArr = netflixShows.push("Stranger Things");

// Write a console.log statement below to check your work!
console.log(netflixShows);

//////////////////////////////
// For Loops - Fundamentals // 
//////////////////////////////

let countDown = 10;
// ADD CODE HERE

for (let i = countDown; i > 0; i--) {
  countDown--
}

// Uncomment the below line to check your work
console.log(countDown) // -> should print 0;

//////////////////////////
// For Loops and Arrays // 
//////////////////////////

const synonyms = ['fantastic', 'wonderful', 'great'];
const greetings = [];

for (let i = 0; i<synonyms.length; i++) {
  greetings.push(`Have a ${synonyms[i]} day!`);
}

for (let i = 0; i<synonyms.length; i++) {
  console.log(greetings[i]);
}

/////////////////////////////////
// For Loops and Array Indices // 
/////////////////////////////////

const firstNames = ["Jon", "Arya", "Jamie"];
const lastNames = ["Snow", "Stark", "Lannister"];
const places = ["The Wall", "Winterfell", "Kings Landing"];

const bios = [];

for (let i = 0; i<firstNames.length; i++) {
  bios.push(`My name is ${firstNames[i]} ${lastNames[i]} and I am from ${places[i]}`)
}

////////////////////////////////////////////
// For Loops - Calculating Array Elements // 
////////////////////////////////////////////

const increaseByTwo = [1, 2, 3, 4, 5];
// ADD CODE HERE

for (let i = 0; i < increaseByTwo.length; i++) {
  increaseByTwo[i] += 2;
}
// increaseByTwo.forEach(x => x + 2)

// Uncomment the line below to check your work!
console.log(increaseByTwo); // -> should print [3, 4, 5, 6, 7];

////////////////////////////////
// While Loops - Fundamentals // 
////////////////////////////////

let count = 2;
// ADD CODE HERE

while (count < 8) {
  count = count + 2;
}

// Uncomment these to check your work!
console.log(count); 

//////////////////////////////////////////
// While Loops - Conditional Expression // 
//////////////////////////////////////////

// ADD CODE HERE
let addThis = 0;
let sum = null;

while (addThis < 10) {
  sum = sum + addThis;
  addThis++;
}

// Uncomment the line below to check your work!
console.log(sum);

//////////////////////////////////
// Control Flow - if statements // 
//////////////////////////////////

const num = 40;
let final;
// ADD CODE HERE

if (num > 100) {
  final = null;
} else {
  final = num*2;
  }

// Log final to the console below to check your work
console.log(final);

//////////////
// fizzbuzz // 
//////////////

const fb = [];
// ADD CODE HERE
for (let i = 0; i < 16; i++) {
  if (i == 0) {
    fb.push(1);
  } else if ((i+1) % 3 == 0 && (i+1) % 5 == 0) {
  	fb.push("fizzbuzz");
  } else if ((i+1) % 3 == 0) {
  	fb.push("fizz");
	} else if ((i+1) % 5 == 0) {
    fb.push("buzz");
  } else {
    fb.push(i+1)
  }
}

console.log(fb); // should log: [1, 2, 'fizz', 4, 'buzz', 'fizz', 7, 8, 'fizz', 'buzz', 11, 'fizz', 13, 14, 'fizzbuzz', 16]

////////////////////////////////
// Control Flow and Iteration // 
////////////////////////////////

const timesTenIfOverFive = [23, 9, 11, 2, 10, 6];
// ADD CODE HERE

for (let i = 0; i < timesTenIfOverFive.length; i++) {
  if (timesTenIfOverFive[i] >= 5) {
    timesTenIfOverFive[i] *= 10;
  }
}

// Uncomment the line below to check your work!
console.log(timesTenIfOverFive); // -> should print [230, 90, 110, 2, 100, 60]

////////////////////////////////////
// Objects - Examining Properties // 
////////////////////////////////////

const checkObj = {
    oddNum: 1,
    evenNum: 2,
    foundNum: 5,
    randomNum: 18
  };
  
  let found = 0;
  // ADD CODE HERE
  
  for (let key in checkObj) {
      if (checkObj[key] === checkObj.foundNum) {
        found = 1;
    }
  }

////////////////////////////////////////
// Objects - Iterating with for... in // 
////////////////////////////////////////

const checkObj = {
    oddNum: 1,
    evenNum: 2,
    foundNum: 5,
    randomNum: 18
  };
  
  const objToArray = [];
  // ADD CODE HERE
  
  for (let key in checkObj) {
    if (key >= 2) {
      objToArray.push(checkObj[key]);
    }
  }

/////////////////////////////////////////
// Objects - Iterating with a for loop // 
/////////////////////////////////////////

const checkObj = {
    oddNum: 1,
    evenNum: 2,
    foundNum: 5,
    randomNum: 18
  };
  
  let divBy6 = false;
  // ADD CODE HERE
  
   // use Object.values() to return array of checkObj values. Assign to const objToArray; 
  const objToArray = Object.values(checkObj);
  
  // forEach through objToArray to determine 
  for (let i = 0; i < objToArray.length; i++)
      if (objToArray[i] % 6 === 0) {
      divby6 = true;
    }

/////////////////////////////
// Objects - Nested Arrays // 
/////////////////////////////

const nestedArr = [];
// ADD CODE HERE

for (let i = 0; i<5; i++) {
  nestedArr.push([`loop${i}`, i])
}
console.log(nestedArr);

/////////////////////////////////
// Objects - Adding Properties // 
/////////////////////////////////

const possibleIterable = [4, 3, 9, 6, 23];
const divByThree = {};
// ADD CODE HERE

for (let i = 0; i<possibleIterable.length; i++) {
  if (possibleIterable[i] % 3 === 0) {
    divByThree[possibleIterable[i]] = i;
  }
}

console.log(divByThree);


///////////////////////////////
// Objects - Evaluating Keys // 
///////////////////////////////

const sumMe = {
    hello: 'there',
    you: 8,
    are: 7,
    almost: '10',
    done: '!'
  };
  let total = 0;
  // ADD CODE HERE
  
  const newArr = Object.values(sumMe);
  console.log(newArr);
  
  for (let i=0; i<newArr.length; i++) {
    if (typeof newArr[i] === "number") {
          total += Number(newArr[i]);
    }
  }
  console.log(typeof "there" === "number");
  console.log(total);
