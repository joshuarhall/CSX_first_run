////////////////
// makePerson //
////////////////

function makePerson(name, age) {
	// add code here
	return {
    name: name,
    age: age
  }
}

// Uncomment these lines to check your work!
console.log(vicky.name); // -> Logs 'Vicky'
console.log(vicky.age); // -> Logs 24
console.log(vicky.intro());
// console.log(makePerson)

/////////////////
// personStore //
/////////////////

const personStore = {
	greet: () => console.log("hello")
};

///////////////////////////
// personFromPersonStore //
///////////////////////////

const personStore = {
  greet: function() {
    console.log('hello');
  }
}

function personFromPersonStore(name, age) {
  const personObj = Object.create(personStore)
  personObj.name = name
  personObj.age = age
  return personObj;
}

///////////////
// introduce //
///////////////

const personStore = {
  greet: function() {
    console.log('hello');
  }
}

function personFromPersonStore(name, age) {
	const person = Object.create(personStore);
  person.name = name;
  person.age = age;
  return person;
}

///////////////////////
// PersonConstructor //
///////////////////////

function PersonConstructor() {
  this.greet = () => console.log('hello')
}

///////////////////////////
// personFromConstructor //
///////////////////////////

function PersonConstructor() {
  this.greet = function() {
    console.log('hello');
  }
}

function personFromConstructor(name, age) {
	const obj = new PersonConstructor() // returns the function definition of personconstructor, not just the result
	obj.name = name
  obj.age = age
	return obj
}

///////////////////////
// introduce (cont.) //
///////////////////////

PersonConstructor.prototype.introduce = function() {console.log(`Hi, my name is ${this.name}`)}    

/////////////////////
// Dog Constructor //
/////////////////////
function Dog(name, breed) {
  this.name = name;
  this.breed = breed;
  this.tricks = [];
  Dog.prototype.learnTrick = function(trick) {
    if (!this.tricks.includes(trick)) {
      this.tricks.push(trick);
    }
  } 
  Dog.prototype.performTrick = function(trick) {
    if (this.tricks.includes(trick)) {
      console.log(`${this.name} performed ${trick}!`)
    } else console.log(`${this.name} doesn't know that trick.`)
  }
}

///////////////
// Inventory //
///////////////

function Inventory(item, price) { 
  this[item] = {
    price: price, 
  	quantity: 1
  }

  Inventory.prototype.addItem = function(item, price) {
    if (!this[item]) {
      this[item] = {
        price: price, 
        quantity: 1
      }
    } else {
      this[item].quantity++;
      this[item].price = price;
    } 
  }
  
  Inventory.prototype.deleteItem = function(str) {
    if (this[str].quantity > 0) {
      this[str].quantity--;
      return "Deleted"
    } else if (this[str].quantity === 0) {
      return "Nothing to delete"
    } else return "Item not in inventory" // shouldn't log
  }

  Inventory.prototype.checkItem = function(str) {
    if (this[str]) {
      return this[str];
    } else {
      return "Item is not in inventory"
    }
  }
}  

/////////////////
// PersonClass //
/////////////////

class PersonClass {
	constructor(name) {
    this.name = name;
	}
  greet() {console.log('hello')} // note: cannot use arrow functions
}

////////////////////
// DeveloperClass //
////////////////////

class DeveloperClass extends PersonClass {
  introduce() { console.log(`Hello World, my name is ${this.name}`)}
}

//////////////////
// Chain Stores //
//////////////////

class Chain {
	constructor(storeName) {
    this.name = storeName 
    this.totalStores = 0 
    this.locations = [] 
  }
  
  // methods here, stored in the class's prototype. don't need .prototype. b/c this is a class, not function
  openStore(owner, city) {
		this.totalStores++ 
  	this.locations.push(new Franchise(owner, city)) 
	}
  
  closeStore(city) {
    if (this.locations.filter(el => el.city === city).length > 0) {
    // if (this.locations.includes(el => el.city === city)) {
      this.totalStores--; 
      console.log(`${this.name} closed the store in ${city}!`) 
      this.locations = this.locations.filter(el => el.city !== city); 
    } else console.log(`${this.name} doesn't have a store in ${city}.`) 
  } 
}

class Franchise {
	constructor(owner, city) {
    this.owner = owner 
    this.city = city 
  }
}