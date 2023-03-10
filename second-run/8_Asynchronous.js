////////////////
// setTimeout //
////////////////

console.log("I am at the beginning of the code");

setTimeout(() => console.log("I am in the setTimeout callback function"), 0)

console.log('I am at the end of the code')

/////////////
// forEach //
/////////////

function forEach(arr, cb) {
for (let i = 0; i < arr.length; i++) {
    cb(arr[i], i)
}
}
  
function delayLog(delayTime, i) {
setTimeout(el => console.log(`printing element ${i}`) , delayTime)
}

let delays = [200, 500, 0, 350]

forEach(delays, delayLog);

//////////////////
// ajaxSimulate //
//////////////////

let dataReceived;

function ajaxSimulate(id, callback) {
  const database = ['Aaron', 'Barbara', 'Chris'];
  // Add code here
  setTimeout(() => callback(database[id]), 0);
}

// Also add code here
function storeData(data) {
  dataReceived = data;
  console.log(dataReceived)
}

ajaxSimulate(1, storeData)

/////////////////////
// limitedInterval //
/////////////////////

function limitedInterval(callback, wait, limit) {
    while (limit > wait) {
      limit -= wait;
      setTimeout(callback, wait)
    } 
  }

////////////////
// runInOrder //
////////////////

function runInOrder(arrFunc, arrNum, time) {
	if (arrFunc[0] === undefined) return
	setTimeout(arrFunc[0], time += arrNum[0])
  return runInOrder(arrFunc.slice(1), arrNum.slice(1)) 
}