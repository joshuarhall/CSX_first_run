//////////////
// Repeater //
//////////////

console.log('Hello, world!');
      
// function repeater(char) {
//   let tikr = 0; 
//   function intRep(char) {
//     tikr = tikr += 1;
//     if (tikr === 5) { // base case
//       tikr = 0;
//       return char 
//     }
//     return char + intRep(char);
//   }
// 	return intRep(char);
// }

function repeater(char) {
	if (char.length === 5) {
    return char
  } 
  return repeater(char + char[0])
}

[1,2,3,4,5]
"12345"


// To check if you've completed the challenge, uncomment these console.logs!
console.log(repeater('g'));
console.log(repeater('j'));



///////////////
// Factorial //
///////////////

function factorial(num, prod = 1) {
    if (num === 1) return prod; // base case
// return function
return factorial(num-1, prod * num)
}

// To check if you've completed the challenge, uncomment these console.logs!
console.log(factorial(4)); // -> 24
console.log(factorial(6)); // -> 720


///////////////
// getLength //
///////////////

function getLength(array, length = 0) {
	if (array[0] === undefined) return length;
  length++;
  return getLength(array.slice(1), length);  
}

// To check if you've completed the challenge, uncomment these console.logs!
console.log(getLength([1])); // -> 1
console.log(getLength([1, 2])); // -> 2
console.log(getLength([1, 2, 3, 4, 5])); // -> 5
console.log(getLength([])); // -> 0


/////////
// POW //
/////////

function pow(base, exponent) {
	// two inputs, base and exponent
  return Math.pow(base, exponent); 
  // returns expected val of base ^ exponent
}

// ES6
// const pow = (base, exponent) => Math.pow(base, exponent);

// To check if you've completed the challenge, uncomment these console.logs!
console.log(pow(2, 4)); // -> 16
console.log(pow(3, 5)); // -> 243

//////////
// flow //
//////////

function flow(input, funcArray) {
    if (funcArray.length > 0) {
          return flow(funcArray[0](input), funcArray.slice(1));
        } else return input;
  }
  
  // To check if you've completed the challenge, uncomment this code!
  function multiplyBy2(num) { return num * 2; }
  function add7(num) { return num + 7; }
  function modulo4(num) { return num % 4; }
  function subtract10(num) { return num - 10; }
  const arrayOfFunctions = [multiplyBy2, add7, modulo4, subtract10];
  console.log(flow(2, arrayOfFunctions)); // -> -7
  

//////////////////
// shuffleCards //
//////////////////

function shuffleCards(topHalf, bottomHalf, result = []) {
    if (topHalf.length === 0 && bottomHalf.length === 0) {
      return result.filter(el => el != undefined);
    }
    result.push(topHalf[0], bottomHalf[0])
    return shuffleCards(topHalf.slice(1), bottomHalf.slice(1), result);
  }
  
  // UNCOMMENT TO TEST YOUR WORK
  const topHalf = ['Queen of Diamonds', 'Five of Hearts', 'Ace of Spades', 'Eight of Clubs'];
  const bottomHalf = ['Jack of Hearts', 'Ten of Spades'];
  console.log(shuffleCards(topHalf, bottomHalf));
    /*-> ['Queen of Diamonds',
          'Jack of Hearts',
          'Five of Hearts',
          'Ten of Spades',
          'Ace of Spades',
          'Eight of Clubs',
        ]
    */

/////////////
// cascade //
/////////////

// sub optimal solution. I did what was requested, but didn't meet some test condition that is not well defined.

function cascade(number, count = 0, countLength = 0, storage = "") {
    console.log(number);
    number = number.toString();
    
    if (count === 0 && number.length>1) {
      // console.log(storage);
      return cascade(Number(number.slice(0,-1)), count = 0, countLength+1, storage += number[number.length-1])
    } else {
      // console.log(storage)
      number += storage[storage.length-1];
      // console.log(storage)
      if (storage === "") {
        return Number(number);
      }
      return cascade(Number(number), count = 1, countLength, storage.slice(0, -1))
    }
      return
  }
  
  // // Uncomment to test your work!
  cascade(111);
  cascade(12345);
  // // should print
  // /*
  // 111
  // 11
  // 1
  // 11
  // 111
  // */