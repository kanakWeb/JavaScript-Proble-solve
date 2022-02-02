const Vagetables = [
    { name: 'alu', price: 30 },
    { name: 'tomato', price: 35 },
    { name: 'potol', price: 20 },
    { name: 'begun', price: 25 },
    { name: 'fish', price: 100 }
];

let total = 0;
for (const product of Vagetables) {
    total = total + product.price;
}
console.log(total);