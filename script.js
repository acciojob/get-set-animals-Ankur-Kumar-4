class Animal {
  constructor(species) {
    this._species = species;
  }

  get species() {
    return this._species;
  }

  makeSound() {
    console.log(`The ${this.species} makes a sound`);
  }
}

class Cat extends Animal {
  constructor() {
    super(species);
  }

  purr() {
    console.log("Purr");
  }
}

class Dog extends Animal {
  constructor() {
    super(species);
  }

  bark() {
    console.log("Woof");
  }
}


// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
