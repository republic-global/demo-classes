// Construct all our dependency graph, THIS IS CORRECT

const Cat = require('./cat')
const cat = new Cat()
const cat2 = new Cat()
const Dog = require('./dog')
// Here we are doing poor's man dependency injection, using constructor injection
const dog = new Dog(cat)

// An IoC inversal of control, container. Needs to be used, instead of manually (poor's man DI) injecting things

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