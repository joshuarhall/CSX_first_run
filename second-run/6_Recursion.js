//////////////
// Repeater //
//////////////

function repeater(char) {
  if (char.length < 5) {
    return repeater(char + char[0]);
  } else return char;
}

///////////////
// Factorial //
///////////////

function factorial(num, returnVal = 1) {
	if (num === 0) return returnVal;
  returnVal *= num
  return factorial(num - 1, returnVal)
}

///////////////
// getLength //
///////////////

function getLength(array, length = 0) {
  if (array[0] === undefined) return length;
  array.pop()
	return getLength(array, ++length)
}

/////////
// POW //
/////////

function pow(base, exponent, total = 1) { // could do this with .reduce() as well
	if (exponent === 0) return total;
  return pow(base, --exponent, total *= base);
}

//////////
// flow //
//////////

function flow(input, funcArray) {
  if (funcArray.length < 1) {
    return input
  }
	return flow(funcArray[0](input), funcArray.slice(1))
} 

//////////////////
// shuffleCards //
//////////////////

function shuffleCards(topHalf, bottomHalf, newArr = []) {
  if (topHalf.length > 0 || bottomHalf.length > 0) {
    return shuffleCards(topHalf.slice(1), bottomHalf.slice(1), newArr.concat(topHalf[0], bottomHalf[0]))
  } 
	return newArr.filter(el => el !== undefined);
}

/////////////
// cascade //
/////////////

function cascade(number) {
  if (Math.floor(number*0.10) > 0) {
  	console.log(number)  
    cascade(Math.floor(number*0.10));
  }
  console.log(number)
  return 
}