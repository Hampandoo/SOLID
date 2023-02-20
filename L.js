// The Liskov Substitution Principle 
// If a program is using a base class, it should be able to use any of its extended classes without knowing it.
// Extended classes should be interchanging with parent class

class Product {
  constructor(name, price) {
    this.name = name
    this.price = price
  }

  calculateTax() {
    return this.price * 0.1
  }

  display() {
    console.log(`${this.name} - ${this.price}`)
  }
}

class FoodProduct extends Product {
  
  calculateTax() {
    return this.price * 0.05
  }
}

class ElectronicProduct extends Product {
  display() {
    console.log(`Electronic product: ${this.name} - ${this.price}`)
  }
}

class ClothingProduct extends Product {
  
}

