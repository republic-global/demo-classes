// Composition root - Construct all our dependency graph, THIS IS CORRECT

const Cat = require('./cat')
const cat = new Cat()
const cat2 = new Cat()
const Dog = require('./dog')
// Here we are doing poor man's dependency injection, using constructor injection
const dog = new Dog(cat)

// An IoC inversion of control, container. Needs to be used, instead of manually (poor man's DI) injecting things

// -- START OF Middleware ---


function loggerAnimalSizeMiddleware(dog) {
	dog.getSize()
	console.log("This is my logger: and the dog is in a mood:", dog.getMood())
}

function increaseSizeOfDogMiddleware(dog) {
	dog.setSize(30)
}

function printDogSize(dog) {
	console.log('This is my printSize MW: ' + dog.getSize())
}

// -- END OF Middleware ---

dog.bark()
dog.setSize(66)
console.log(dog.getSize())

cat.bark()
cat.setSize(24)
console.log(cat.getSize())
console.log(cat.getMood())

cat2.bark()
cat2.setSize(55)
console.log(cat2.getSize())


dog.interactWith()


// Execute Middlewares

ar = [printDogSize, increaseSizeOfDogMiddleware, loggerAnimalSizeMiddleware, printDogSize]
ar.forEach(methd => {
	methd(dog)
});