import { Product } from "./product.js";
import { PerishableProduct } from "./perishableProduct.js";

let eggs = new PerishableProduct("eggs", 3.93, 12, "2025-08-28");
let mayonnaise = new PerishableProduct("Hellmann's Real Mayonnaise", 6.50, 1, "2025-12-14");
console.log(eggs.toString());
console.log(mayonnaise.toString());

let perishableProducts = [];
perishableProducts.push(eggs);
perishableProducts.push(mayonnaise);

Product.applyDiscount(perishableProducts, 0.1)
console.log(perishableProducts);