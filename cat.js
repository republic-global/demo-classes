const animalMood = require('./animal-mood')

class Cat {
	size
	mood
	
	constructor(){
		this.mood = animalMood.SAD
		
		// This is the WORST practice in the world, to instantiate inside another class
		const Dog = require('./dog')
		const cat = new Dog()
		cat.bark()
	}

	bark(){
		console.log("meow meow")
	}

	setSize(s){
		this.size = s
	}
	getSize(){
		return this.size
	}
	
	getMood(){
		return this.mood
	}
}

module.exports = Cat