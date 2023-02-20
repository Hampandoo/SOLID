// Open closed Principle
// Principle means that module, class, component etc, should be open for extension but closed for modification
// All extended and parent Classes / Components / Modules should be interchangeable.

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  calculateTax() {
    return this.price * 0.1;
  }

  display() {
    console.log(`${this.name} - ${this.price}`);
  }
}
// The FoodProduct class extends the Product class and overrides the calculateTax method
class FoodProduct extends Product {
  calculateTax() {
    return this.price * 0.05;
  }
}

// The ElectronicProduct class extends the Product class and overrides the display method
class ElectronicProduct extends Product {
  display() {
    console.log(`Electronic product: ${this.name} - ${this.price}`);
  }
}
