////////////////
// makePerson //
////////////////

// create function with two inputs, name and age
// will return object
// create empty object
// add name property to new obj with value as the `name` argument
// add an age property to obj with value `age` argument
// return object

function makePerson(name, age) {
	return { //object
    name: name,
    age: age,
    intro: function() {return `hello, my name is ${name} and I am ${age} years old.`}
  }
}

const vicky = makePerson('Vicky', 24);
const josh = makePerson();

// Uncomment these lines to check your work!
console.log(vicky.name); // -> Logs 'Vicky'
console.log(vicky.age); // -> Logs 24
console.log(vicky.intro());
// console.log(makePerson)

/////////////////
// personStore //
/////////////////

const personStore = {
	greet: function() {console.log('hello')}
};

// Uncomment this line to check your work!
personStore.greet(); // -> Logs 'hello'

///////////////////////////
// personFromPersonStore //
///////////////////////////

const personStore = {
    greet: function() {
      console.log('hello');
    }
  }
  
  function personFromPersonStore(name, age) {
      const obj = Object.create(personStore);
    obj.name = name; 
    obj.age = age;
    return obj;
  }
  
  const sandra = personFromPersonStore('Sandra', 26);
  
  // Uncomment these lines to check your work!
  console.log(sandra.name); // -> Logs 'Sandra'
  console.log(sandra.age); // -> Logs 26
  sandra.greet(); // -> Logs 'hello'
  
  let getMethods = (obj) => Object.getOwnPropertyNames(obj).filter(item => typeof obj[item] === 'function')
  console.log(getMethods(personStore))

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
  
  const sandra = personFromPersonStore('Sandra', 26);
  
  // add code here
  personStore.introduce = function() {console.log( `Hi, my name is ${this.name}`)}
  
  // Uncomment this line to check your work!
  sandra.introduce(); // -> Logs 'Hi, my name is Sandra'

///////////////////////
// PersonConstructor //
///////////////////////

function PersonConstructor() {
	// add code here
  this.greet = function() {console.log("hello")}
}

const simon = new PersonConstructor();

// Uncomment this line to check your work!
simon.greet(); // -> Logs 'hello'

///////////////////////////
// personFromConstructor //
///////////////////////////

function PersonConstructor() {
    this.greet = function() {
      console.log('hello');
    }
  }
  
  function personFromConstructor(name, age) {
      // add code here
      const obj = new PersonConstructor();
      obj.name = name;
      obj.age = age;
    return obj;
  }
  const mike = personFromConstructor('Mike', 30);
  
  // Uncomment these lines to check your work!
  // console.log(mike.name); // -> Logs 'Mike'
  // console.log(mike.age); // -> Logs 30
  // mike.greet(); // -> Logs 'hello'

///////////////////////
// introduce (cont.) //
///////////////////////

function PersonConstructor() {
    this.greet = function() {
      console.log('hello');
    }
  }
  
  function personFromConstructor(name, age) {
    const person = new PersonConstructor();
    person.name = name;
    person.age = age;
    return person;
  }
  
  const mike = personFromConstructor('Mike', 30);
  
  // add code here
  PersonConstructor.prototype.introduce = function() {console.log(`Hi, my name is ${this.name}`)};
  // personStore.introduce = function() {console.log( `Hi, my name is ${this.name}`)}
  
  
  // Uncomment this line to check your work!
  mike.introduce(); // -> Logs 'Hi, my name is Mike'
  

/////////////////////
// Dog Constructor //
/////////////////////

function Dog(name, breed) {
	// add code here
  this.name = name;
  this.breed = breed;
  this.tricks = [];
}
Dog.prototype.learnTrick = function(str) {
  this.tricks.push(str);  
}

Dog.prototype.performTrick = function(trick) {
  if (this.tricks.includes(trick)) {
    console.log(`${this.name} performed ${trick}!`)
  } else {
    console.log(`${this.name} doesn't know that trick.`)
  }
}

const fido = new Dog('Fido', 'poodle');

// Uncomment these lines to check your work!
fido.learnTrick('fetch');
fido.performTrick('fetch'); // should log 'Fido performed fetch!'
fido.performTrick('sit'); // should log 'Fido doesn't know that trick.'

///////////////
// Inventory //
///////////////

function Inventory(item, price) { 
    this[item] = {
      price: price,
      quantity: 1
    }; 
  };
  
  Inventory.prototype.addItem = function(item, price) {
    if (!this[item]) { 
      this[item] = {price: price, quantity: 1}; // there's probably a better way to do this
    } else if (this[item]) {
      this[item].price = price;
      this[item].quantity++
    } 
  }
  
  Inventory.prototype.deleteItem = function(item) {
    if (!this[item]) {
      return "Item not in inventory"; //this shouldn't print given the test conditions"
    } else if (this[item]) {
      if (this[item].quantity === 0) {
        return "Nothing to delete";
      } else {
        this[item].quantity--
        return "Deleted"
      }
    }
  }
  
  Inventory.prototype.checkItem = function(str) {
    if (this[str]) {
      return this[str];
    }
    return "Item is not in inventory";
  }
  
  const myInventory = new Inventory('cucumber', 2);
  
  // Uncomment these lines to check your work!
  myInventory.addItem('carrot', 1);
  console.log(myInventory.checkItem('cucumber')); // Logs: { price: 2, quantity: 1 }
  myInventory.addItem('cucumber', 3); 
  console.log(myInventory.deleteItem('carrot')); // Logs: 'Deleted'
  console.log(myInventory.deleteItem('carrot')); // Logs: 'Nothing to delete'
  console.log(myInventory); // Logs: { cucumber: { price: 3, quantity: 2 }, carrot: { price: 1, quantity: 0 } }
  console.log(myInventory.checkItem('radish')); // Logs: 'Item is not in inventory'

/////////////////
// PersonClass //
/////////////////

class PersonClass {
	constructor(name) {
    this.name = name;
  }
  greet() {
    console.log('hello')
  }
}

const george = new PersonClass('George');

// Uncomment this line to check your work!
george.greet(); // -> Logs 'hello'


////////////////////
// DeveloperClass //
////////////////////

class PersonClass {
	constructor(name) {
    this.name = name;
	}

	greet() {
    console.log('hello');
  }
}

// add code here
class DeveloperClass extends PersonClass {
  introduce(name) {
  	console.log(`Hello World, my name is ${this.name}`);  
  }
}

const thai = new DeveloperClass('Thai', 32);

// Uncomment these lines to check your work!
console.log(thai.name); // -> Logs 'Thai'
thai.introduce(); // -> Logs 'Hello World, my name is Thai'