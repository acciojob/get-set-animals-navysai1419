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




const myCat = new Cat("Cat");
console.log(myCat.species); // Output: Cat
myCat.makeSound(); // Output: The Cat makes a sound
myCat.purr(); // Output: purr

const myDog = new Dog("Dog");
console.log(myDog.species); // Output: Dog
myDog.makeSound(); // Output: The Dog makes a sound
myDog.bark();


// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
