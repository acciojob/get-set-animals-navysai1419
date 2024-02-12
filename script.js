class Animal {
    constructor(private species: string) {}

    getSpecies(): string {
        return this.species;
    }

    makeSound(): void {
        console.log(`The ${this.species} makes a sound`);
    }
}

class Cat extends Animal {
    purr(): void {
        console.log('purr');
    }
}

class Dog extends Animal {
    bark(): void {
        console.log('woof');
    }
}

// Example usage
const myCat = new Cat("Cat");
console.log(myCat.getSpecies()); // Output: Cat
myCat.makeSound(); // Output: The Cat makes a sound
myCat.purr(); // Output: purr

const myDog = new Dog("Dog");
console.log(myDog.getSpecies()); // Output: Dog
myDog.makeSound(); // Output: The Dog makes a sound
myDog.bark(); // Output: woof



// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
