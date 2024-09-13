class Dog {
	size
	mood

	// Constructor DI ()
	constructor(cat){
		this.cat = cat
	}

	bark(){
		console.log("woof woof")
	}

	setSize(s){
		this.size = s
	}
	getSize(){
		return this.size
	}

	// Method DI (dependency injection)
	interactWith() {
		// This is the WORST practice in the world, to intantiate inside another class

		// const Cat = require('./cat')
		// const cat = new Cat()
		// cat.setSize(42)
		console.log("this is a cat " + this.cat.getSize())
	}
}

module.exports = Dog