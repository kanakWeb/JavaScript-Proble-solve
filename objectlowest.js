const MonitorsProduct = [
    { monitor: 'Walton', price: 21000, display: 20 },
    { monitor: 'Hp', price: 40000, display: 18 },
    { monitor: 'Ag', price: 20000, display: 10 },
    { monitor: 'National', price: 8000, display: 12 },
    { monitor: 'Xiomi', price: 2000, display: 13 },
    { monitor: 'xox', price: 30000, display: 14 }

];
let lowest = MonitorsProduct[0];
for (const product of MonitorsProduct) {

    if (product.price < MonitorsProduct.price) {
        lowest = product;

    }
}
console.log(lowest)