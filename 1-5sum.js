/* let sum = 0;
for (let i = 5; i >= 1; i--) {
    sum = sum + i;
}
console.log(sum) */

/* function numberSum(i) {


    console.log(i)

    if (i == 5) {
        return 5;
    }

    return i + numberSum(1 + i);

}
console.log(numberSum(1)); */

// function compare(a, b) {
//     if (a.toString() === b) {
//         return true;
//         console.log(a, b)
//     } else {
//         return false;
//         console.log(a, b)
//     }
// }
// const result = compare(25, 25);
// console.log(result);

const array = [1, 2, 3, 4, 5, 6, 7];

for (let i = 1; i < array.length; i++) {
    if (i == 5) {
        continue;
    }
    console.log(array[i]);
}