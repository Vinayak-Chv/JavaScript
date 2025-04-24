class Products {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    displayProduct() {
        console.log(`Product: ${this.name}`);
        console.log(`Price: $${this.price.toFixed(2)}`);
    }

    calculateTotal(salesTax) {
        return this.price + (this.price * salesTax);
    }
}

const salesTax = 0.95;

const product1 = new Products("Shirts", 19.99);
const product2 = new Products("Pants", 22.50);
const product3 = new Products("Underwear", 100.00);

console.log(product3.name);

console.log(product3.calculateTotal(salesTax));