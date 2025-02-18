// Task 1: Creating a Product Class

// Defining the Product class
function Product(name, id, price, stock) {
    this.name = name;
    this.id = id;
    this.price = price;
    this.stock = stock;
}

// Adding a method to get product details
Product.prototype.getDetails = function () {
    return `Product: ${this.name}, ID: ${this.id}, Price: $${this.price}, Stock: ${this.stock}`;
};

// Adding a method to update stock quantity
Product.prototype.updateStock = function (quantity) {
    if (this.stock >= quantity) {
        this.stock -= quantity;
    } else {
        console.log("Not enough stock available.");
    }
};

// Test Cases
const prod1 = new Product("Laptop", 101, 1200, 10);
console.log(prod1.getDetails()); // Expected output: "Product: Laptop, ID: 101, Price: $1200, Stock: 10"

prod1.updateStock(3);
console.log(prod1.getDetails()); // Expected output: "Product: Laptop, ID: 101, Price: $1200, Stock: 7"

