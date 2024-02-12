//complete this code
class Animal {

	constructor(private _species: string) {}

  get species(): string {
    return this._species;
  }

  makeSound(): void {
    console.log(`The ${this._species} makes a sound`);
  }
	
}

class Dog extends Animal {
	 purr():void{
		cosole.log('purr')
	}
	
}

class Cat extends Animal {
bark():void{
	consile.log('woof')
}
	
}




const myCat = new Cat("Siamese");
myCat.makeSound(); 
myCat.purr();

const myDog = new Dog("Golden Retriever");
myDog.makeSound(); // Output: The Golden Retriever makes a sound
myDog.bark();


// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
