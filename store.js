export class Store {
    constructor() {
        this.inventory = [];
    }

    addProduct(product) {
        this.inventory.push(product);
    }

    getInventoryValue() {
        let totalValue = 0;
        for (const product of this.inventory) {
            totalValue += product.price;
        }
        return totalValue;
    }

    findProductByName(name) {
        for (const product of this.inventory) {
            if (product.name === name) {
                return product;
            }
        }
        return null;
    }
}