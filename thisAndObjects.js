// Welcome message
console.log("=== This console app conatins all I learnt in the book chapter This and Objects\n");

// Creating a Base Class with `this` and a Prototype
console.log(" Creating a Base Class with `this` and Prototypes ---");

class Animal {
  constructor(name, species) {
    this.name = name;
    this.species = species;
  }

  // Prototype method
  introduce() {
    console.log(`Hi! My name is ${this.name}, and I am a ${this.species}.`);
  }

  makeSound() {
    console.log(`${this.name} makes a sound.`);
  }
}

const dog = new Animal("Buddy", "Dog");
const cat = new Animal("Whiskers", "Cat");

console.log("Calling dog.introduce():");
dog.introduce();

console.log("Calling cat.introduce():");
cat.introduce();

// Extending the Class and Overriding Prototype Methods
console.log("\n Extending the Class and Overriding Prototypes ---");

class Dog extends Animal {
  constructor(name, breed) {
    super(name, "Dog");
    this.breed = breed;
  }

  // Override makeSound
  makeSound() {
    console.log(`${this.name} barks! Woof woof!`);
  }

  fetch() {
    console.log(`${this.name} is fetching a ball!`);
  }
}

const husky = new Dog("Max", "Husky");

console.log("Calling husky.introduce():");
husky.introduce(); // Inherited from Animal

console.log("Calling husky.makeSound():");
husky.makeSound(); // Overridden in Dog

console.log("Calling husky.fetch():");
husky.fetch(); // Dog-specific method

//  Using `Object.create` for Custom Prototypes
console.log("\n--- Using `Object.create` for Custom Prototypes ---");

const baseObject = {
  describe() {
    console.log(`This is a base object with the name: ${this.name}`);
  },
};

const customObject = Object.create(baseObject);
customObject.name = "I am the custom Object";

console.log("Calling customObject.describe():");
customObject.describe();

console.log("Adding a new method to baseObject...");
baseObject.greet = function () {
  console.log(`Hello from ${this.name}!`);
};

console.log("Calling customObject.greet():");
customObject.greet(); // Delegates to baseObject


// Exploring the Prototype Chain
console.log("\n--- Exploring the Prototype Chain ---");
console.log("Prototype chain of husky:");
let current = husky;
while (current) {
  console.log(current);
  current = Object.getPrototypeOf(current);
}

console.log("\n=== End of the JS Prototype & 'this' Explorer ===");
