class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    speak(words) {
        console.log(`${this.name} says "${words}! I'm ${this.age} years old"`)
    }

    greet() {
        return `Hello! My name is ${this.name}. I'm ${this.age} years old"`
    }
}

const myPet = new Animal("Sam", 5)
myPet.name = "Lori"
// myPet.speak("Hi") //> Lori says "Hi! I'm 5 years old"

const pets = [
    {name: "Kermit", word: "Ribbit", age: 10},
    {name: "Ms. Piggy", word: "Oink", age: 14},
    {name: "Fozzie", word: "Wakka wakka", age: 1},
    {name: "Rowlf", word: "Arf arf", age: 3},
    {name: "Big Bird", word: "Cheep cheep", age: 7},
]

// pets.forEach(({name, word, age}) => {
//     (new Animal(name, age)).speak(word);
// })

// console.log((new Animal("Barry", 9)).greet()) //> Hello! My name is Barry. I'm 9 years old"
// console.log((new Animal("Cindy", 4)).greet())

class Cat extends Animal {
    constructor(name, age) {
        super(name, age)
    }

    meow() {
        return "Meeeeow"
    }
}

const myCat = new Cat("Tiny", 6)
myCat.speak(myCat.meow()) //> Tiny says "Meeeeow! I'm 6 years old"

// Questions: Are these statements true of React functional components, React class components, or both?
// They use JSX. yes
// They are functions. only react functional components
// They output JSX using the return keyword. yes
// They output JSX using a render method. only react class components
// They extend the React Component class. only react class components
// They have constructor methods. only react class components