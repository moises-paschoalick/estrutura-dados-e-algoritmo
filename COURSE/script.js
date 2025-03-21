function Product(name, price, quantity)  {
    this.name = name;
    this.price = price;
    this.quantity = quantity;

    this.toString = function() {
        return `${this.name}, $${this.price.toFixed(2)}, qty: ${this.quantity}`;
    }
}

function total(product) {
    return product.price * product.quantity;
}

function updatePrice(product, percentage) {
    product.price = product.price * (1 + percentage/100)
}

 // Sintaxe sugar (alternativa q o JS entrega)
/*class Product {   
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    toString() {
        //return this.name + ", " + this.price;
        return `${this.name}, $${this.price.toFixed(2)}, qty: ${this.quantity}`;
    }


}*/

const p1 = new Product("Laptop", 1000.0, 5);
const p2 = new Product("Headphones", 200.0, 2);

const total1 = total(p1);
const total2 = total(p2);

console.log(total1);
console.log(total2);

updatePrice(p1, 10);

console.log(p1.price);