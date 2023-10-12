//complete this code
class Animal {
	 constructor(species) {
    this._species = species;
  }

  // Getter for species
  get species() {
    return this._species;
  }

  // Method to make a generic sound
  makeSound() {
    console.log("The animal makes a sound.");
  }

	
}

class Dog extends Animal {
	
	constructor(species) {
    super(species);
  }

  // Method to make a dog-specific sound
  bark() {
    console.log("Woof");
  }
}

class Cat extends Animal {
	
	constructor(species) {
    super(species);
  }

  // Method to make a cat-specific sound
  purr() {
    console.log("Purr");
  }
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
