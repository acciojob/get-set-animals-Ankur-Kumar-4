//complete this code
class Animal {
	constructor(species){
		this._species = species;
	}

	get species(){
		
		return this._species;
	}

	
}

class Dog extends Animal {
	
	bark(){
		console.log("woof");
	}
}

class Cat extends Animal {
	
	purr(){
		cosole.log("pure");
	}
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
