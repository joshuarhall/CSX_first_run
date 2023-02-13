///////////////////////////////
// Variable Assignment - var //
///////////////////////////////

var firstName = "Jenny";

// Try un-commenting the line below
console.log("Hi, " + firstName)

// ADD CODE HERE
const lastName = "Smith"

// Uncomment the line below to check your work!
console.log("Hi, " + firstName + " " + lastName);

///////////////////////////////
// Variable Assignment - let //
///////////////////////////////

let favFood = "tacos";

// Try un-commenting the line below to test your answer
console.log("My favorite food is " + favFood);

// ADD CODE HERE
favFood = "pizza";

// Uncomment the line below to check your work!
console.log("No, but really, my favorite food is " + favFood);

/////////////////////////////////
// Variable Assignment - const //
/////////////////////////////////

const myCodingConfidence = "unwavering";

// Try un-commenting the line below to test your answer
console.log("My confidence in my coding ability is " + myCodingConfidence);

// ADD CODE HERE

myCodingConfidence = "potato";

//////////////////////////
// Primitive Data Types //
//////////////////////////

const name = "Josh Hall"; 
let age = 31; 
const loveJavaScript = true;
let listOfComplaints = null;


// Uncomment these to check your work!
console.log('My name is ' + name);
console.log('I am ' + age + ' years old');
console.log('It\'s ' + loveJavaScript + ', I love JavaScript');
console.log('The list of things I hate about JavaScript is ' + listOfComplaints);

/////////////
// Strings //
/////////////

console.log('A string can be written inside of single quotes.');
console.log("It can also be written inside of double quotes.");
console.log(`Backticks work, too.`);

let mySingleString = '';
let myDoubleString = "";
let myBackString = ``;

console.log(mySingleString);
console.log(myDoubleString);
console.log(myBackString);

//////////////////////
// Escape Sequences //
//////////////////////

const path = "C:\\Users\\Win\\Files\\javascript.js";
console.log(path);

const heSaid = "He said, \"Hey Foo!\"";
console.log(heSaid);

const sheSaid = 'My name ain\'t Foo!';
console.log(sheSaid);

//////////////////////////
// String Concatenation //
//////////////////////////

const first = "Welcome";
const second = "to the";
const third = "jungle!";

// ADD CODE BELOW
let welcomeStatement = first + " " + second + " " + third;

// Uncomment the line below to check your work!
console.log(welcomeStatement);

//////////////////////
// Template literal //
//////////////////////

// Declare 2 variables x & y that are Numbers
// Declare a string 'solution' that when printed to the console reads like:
// "The sum of <x> and <y> is <x + y>"
// ADD CODE BELOW

const x = 2; 
const y = 5; 
const solution  = `The sum of ${x} and ${y} is ${x+y}`;

console.log(solution );

///////////////////////////////////
// String properties and methods //
///////////////////////////////////

let hometown = "New York City";
let favAlbum = "The Rise and Fall of Ziggy Stardust and the Spiders From Mars"

// ADD CODE BELOW
const count = hometown.length;
const upper = favAlbum.toUpperCase();
const lower = favAlbum.toLowerCase();

// Uncomment the line below to check your work!
console.log(count);
console.log(upper);
console.log(lower);

//////////////////////////////////
// Bracket notation for strings // 
//////////////////////////////////

const songTitle = "Space Oddity"
const lyrics = "This is Ground Control to Major Tom / You’ve really made the grade"

// ADD CODE BELOW
const firstLetter = songTitle[0]
const seventhLetter = songTitle[6]
const lastLetter = lyrics[lyrics.length-1]

// Uncomment the line below to check your work!
console.log(firstLetter);
console.log(seventhLetter);
console.log(lastLetter);

////////////////////////////////////
// Numbers - Addition/Subtraction // 
////////////////////////////////////

// ADD CODE BELOW
const birthYear = 1991; 
const age = new Date().getFullYear() - birthYear;
const in10Yrs = age + 10;

// Uncomment these to check your work!
console.log(birthYear);
console.log(age);
console.log(in10Yrs);

console.log(new Date())

///////////////////////////////////////
// Numbers - Multiplication/Division // 
///////////////////////////////////////

// ADD CODE BELOW
const twentyTimesFour = 20 * 4;
const nineOverThree = 9 / 3;
const twoHundredTimesThree = 200.3 * 3;

// Uncomment these to check your work!
console.log(twentyTimesFour);
console.log(nineOverThree);
console.log(twoHundredTimesThree);

//////////////////////////////////////
// Numbers - Exponents & Remainders // 
//////////////////////////////////////

// ADD CODE BELOW
const fiveSquared = 5**2;
const eightCubed = 8**3;
const sevenToTheSixth = 7**6;
const eightyThreeModSix = 83 % 6;
const sixtyModNine = 60 % 9;

// ADD CONSOLE LOGS BELOW
console.log(fiveSquared);
console.log(eightCubed);
console.log(sevenToTheSixth);
console.log(eightyThreeModSix);
console.log(sixtyModNine);

/////////////////////////////////////////
// Numbers - Incrementor & Decrementor // 
/////////////////////////////////////////

let num1 = 32;
let num2 = 44;

// ADD CODE BELOW HERE

num1++;
num2--;

////////////////////////////////////
// Numbers - Assignment Operators //
////////////////////////////////////

let num1 = 32;
let num2 = 25;
let num3 = 92;
let num4 = 64;

// ADD CODE BELOW HERE

num1 += 17;
num2 -= 14;
num3 *= 11;
num4 /= 8;

console.log(num1);
console.log(num2);
console.log(num3);
console.log(num4);

//////////////
// booleans //
//////////////

let iHaveChanged = false;

// ADD CODE BELOW
iHaveChanged = true;
let iLoveCoding = true;
let codingIsTooHard = false;

////////////////////////////////////
// Booleans: Comparison Operators //
////////////////////////////////////

// 1.
const small = 2;
const large = 5342;
// ADD CODE BELOW (isSmaller)
const isSmaller = small < large;

// 2.
const num = 45;
const string = "45";
// ADD CODE BELOW (isLooselyEqual and isStrictlyEqual)
let isLooselyEqual = num == string;
let isStrictlyEqual = num === string;

// 3.
const isTrue = true;
const isFalse = false;
// ADD CODE BELOW (isTrueNotFalse)
let isTrueNotFalse = isTrue !== isFalse;


// Uncomment these to check your work! 
console.log('Is 2 < 5342?');
console.log(isSmaller);
console.log('Is 45 loosely equal to "45"?'); 
console.log(isLooselyEqual);
console.log('Is 45 strictly equal to "45"?');
console.log(isStrictlyEqual);
console.log('Is true not equal to false?');
console.log(isTrueNotFalse);

///////////////////
// Type coercion // 
///////////////////

// Uncomment the code below to test
console.log(10 + 5);
console.log("10" + 5);
console.log(5 + "10");

/////////////////////
// typeof Operator // 
/////////////////////

const favMovie = "Star Wars: Episod IV";
const timesSeen = 732;
const goingToWatchItAgain = true; 

// ADD CODE BELOW HERE
const favMovieType = typeof(favMovie);
const timesSeenType = typeof(timesSeen);
const favMovieseeAgainTypeType = typeof(goingToWatchItAgain);
