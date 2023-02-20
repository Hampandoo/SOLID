// Single Responsibility

// Instead of Class it is better to use Vuex or Pinia stores for Vue framework

// The Cart class is responsible only for cart operations
class Cart {
  constructor() {
    this.items = [];
  }

  addItem(item) {
    this.items.push(item);
  }

  removeItem(item) {
    const index = this.items.indexOf(item);
    if (index > -1) {
      this.items.splice(index, 1);
    }
  }
}

// The Order class is responsible only for placing an order and sending information to the server
class Order {
  constructor(cart, customer) {
    this.cart = cart;
    this.customer = customer;
  }

  async placeOrder() {
    return await fetch("http://example.com/api/order", {
      method: 'POST',
      mode: 'cors',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({...this.cart, ...this.customer})
    })
      .then((response) => {
        return response.json();
      })
      .catch((error) => {
        throw new Error("Order Error", error)
      });
  }
}
