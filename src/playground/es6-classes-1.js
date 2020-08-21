
class Person {
    constructor(name = 'Anonymous', age = 'unknown') {
        this.name = name
        this.age = age
    }
    getGreeting() {
        return `Howdy ${this.name}`
    }
    getDescription() {
        return `${this.name} is ${this.age} years old`
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age)
        this.major = major
    }
    hasMajor() {
        return !!this.major
    }
    getDescription() {
        let description = super.getDescription()

        if (this.hasMajor()) {
            description += ` Their major is ${this.major}.`
        }

        return description
    }
}

class Traveler extends Person {
    constructor(name, age, homeLocation = 'probably Mars') {
        super(name, age)
        this.homeLocation = homeLocation
    }
    getGreeting() {
        let greeting = super.getGreeting()
        greeting += ` Their hometown is ${this.homeLocation}`
        return greeting
    }
}

const me = new Student('Chris Lojewski', 24, 'Mat Sci')
console.log(me.getDescription())

const other = new Traveler('Billeh', 43, 'Texus')
console.log(other.getGreeting())