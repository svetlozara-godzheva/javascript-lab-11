class Store {
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
}