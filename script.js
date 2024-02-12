//complete this code
class Animal {

	makeSound(){
		
	}
	
}

class Dog extends Animal {
	function purr(){
		cosole.log('purr')
	}
	
}

class Cat extends Animal {
function bark(){
	consile.log('woof')
}
	
}




const myCat = new Cat("Siamese");
myCat.makeSound(); 
myCat.purr();
// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
