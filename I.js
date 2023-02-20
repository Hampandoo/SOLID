// Interface Segregation Principle
// Client should not be forced to implement an interface that it doesn't use


// Violation of this principle, cause Parrot doesn't hunt other animals unlike Wolf
// class Animal {
//   hunt() {
//     console.log('Animal is hunting...')
//   }
// }
// class Wolf extends Animal {}
// class Goat extends Animal {}

// Good way to follow this principle
class Animal {
  constructor(name) {
    this.name = name
  }
}
class WildAnimal extends Animal{
  hunt() {
    console.log(`${this.name} is hunting...`)
  }
}
class Wolf extends WildAnimal {
  /* implementation */
}


class Pets extends Animal {
  /* implementation */
}
class Parrot extends Pets {
  talk() {
    console.log(`${this.name} is talking...`)
  }
}


// Or there is a way to use objects like Interfaces
class Wolf extends Animal {}
class Parrot extends Animal {}

const hunter = {
  hunt() {
    console.log(`${this.name} is hunting...`)
  }
}
const talker = {
  talk() {
    console.log(`${this.name} is talking...`)
  }
}
const walker = {
  walk() {
    console.log(`${this.name} is walking...`)
  }
}

Object.assign(Wolf.prototype, hunter, walker); //Merge objects
Object.assign(Parrot.prototype, talker);

const wolf = new Wolf('Goofy')
wolf.walk()
wolf.hunt()

const parrot = new Parrot('Somebody')
parrot.talk()
