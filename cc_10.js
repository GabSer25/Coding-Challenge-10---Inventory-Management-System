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

// Task 2: Creating an Order Class

// Defining the Order class
function Order(orderId, product, quantity) {
    if (product.stock >= quantity) {
        this.orderId = orderId;
        this.product = product;
        this.quantity = quantity;
        this.totalPrice = product.price * quantity;

        // Reduce product stock when order is created
        product.updateStock(quantity);
    } else {
        console.log("Order cannot be placed. Insufficient stock.");
    }
}

// Adding a method to get order details
Order.prototype.getOrderDetails = function () {
    return `Order ID: ${this.orderId}, Product: ${this.product.name}, Quantity: ${this.quantity}, Total Price: $${this.totalPrice}`;
};

// Test Cases
const order1 = new Order(501, prod1, 2);
console.log(order1.getOrderDetails()); 
// Expected output: "Order ID: 501, Product: Laptop, Quantity: 2, Total Price: $2400"

console.log(prod1.getDetails()); 
// Expected output: "Product: Laptop, ID: 101, Price: $1200, Stock: 5"
