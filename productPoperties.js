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
        let discountedProducts = [];
        for (const product of products) {
            const discountedProduct = { ...product };
            discountedProduct.price = product.price * (1 - discount);
            discountedProducts.push(discountedProduct);
        }
        return discountedProducts;
    }
}

