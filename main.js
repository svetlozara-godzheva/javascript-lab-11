import { Product } from "./product.js";
import { PerishableProduct } from "./perishableProduct.js";
import { Store } from "./store.js";

let eggs = new PerishableProduct("eggs", 3.93, 12, "2025-08-28");
let mayonnaise = new PerishableProduct("Hellmann's Real Mayonnaise", 6.50, 1, "2025-12-14");
console.log(eggs.toString());
console.log(mayonnaise.toString());

let mainStore = new Store();

let bag = new Product("bag", 0.50, 3);
let plate = new Product("plate", 3, 2);
let mug = new Product("mug", 10, 2);

mainStore.addProduct(eggs);
mainStore.addProduct(mayonnaise);
mainStore.addProduct(bag);
mainStore.addProduct(plate);
mainStore.addProduct(mug);

console.log(mainStore.getInventoryValue());

Product.applyDiscount([eggs, mayonnaise, bag, plate, mug], 0.15);
console.log(mainStore.getInventoryValue());

console.log(mainStore.findProductByName("eggs").toString());
console.log(mainStore.findProductByName("mug").toString());

