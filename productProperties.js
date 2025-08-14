export class ProductProperties {
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    getTotalValue() {
        let totalValue = this.price * this.quantity;
        return totalValue;
    }

    toString() {
        return `Product: ${this.name}, Price: $${this.price}, Quantity: ${this.quantity}`;
    }

    static applyDiscount(products, discount) {
        for (const product of products) {
            product.price = product.price * (1 - discount);
        }
    }
}

