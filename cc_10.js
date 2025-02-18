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

// Task 3: Creating an Inventory Class

// Defining the Inventory class
function Inventory() {
    this.products = [];
}

// Adding method to add a new product to inventory
Inventory.prototype.addProduct = function (product) {
    this.products.push(product);
};

// Adding method to list all products
Inventory.prototype.listProducts = function () {
    this.products.forEach(product => console.log(product.getDetails()));
};

// Test Cases
const inventory = new Inventory();
inventory.addProduct(prod1);
inventory.listProducts(); 
// Expected output: "Product: Laptop, ID: 101, Price: $1200, Stock: 5"

// Task 4: Implementing Order Management

// Adding an orders array to Inventory
Inventory.prototype.orders = [];

// Adding method to place an order
Inventory.prototype.placeOrder = function (orderId, product, quantity) {
    if (product.stock >= quantity) {
        const newOrder = new Order(orderId, product, quantity);
        this.orders.push(newOrder);
    } else {
        console.log("Cannot place order. Insufficient stock.");
    }
};

// Adding method to list all orders
Inventory.prototype.listOrders = function () {
    this.orders.forEach(order => console.log(order.getOrderDetails()));
};

// Test Cases
inventory.placeOrder(601, prod1, 2);
inventory.listOrders(); 
// Expected output: "Order ID: 601, Product: Laptop, Quantity: 2, Total Price: $2400"

console.log(prod1.getDetails()); 
// Expected output: "Product: Laptop, ID: 101, Price: $1200, Stock: 3"

// Task 5: Implementing Product Restocking

// Adding method to restock a product
Inventory.prototype.restockProduct = function (productId, quantity) {
    const product = this.products.find(prod => prod.id === productId);
    if (product) {
        product.stock += quantity;
    } else {
        console.log("Product not found.");
    }
};

// Test Cases
inventory.restockProduct(101, 5);
console.log(prod1.getDetails()); 
// Expected output: "Product: Laptop, ID: 101, Price: $1200, Stock: 8"
