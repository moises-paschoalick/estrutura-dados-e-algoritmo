class Product {

    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    toString() {
        //return this.name + ", " + this.price;
        return `${this.name}, $${this.price.toFixed(2)}, qty: ${this.quantity}`;
    }


}

const p1 = new Product("Laptop", 1000.0, 5);
const p2 = new Product("Headphones", 200.0, 2);

console.log(p1.name);
console.log(p1.price)
console.log(p1.quantity)

console.log(p2.name);

console.log(p1.toString())
console.log(p2.toString())