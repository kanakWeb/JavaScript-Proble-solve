/*৩. ৫০ থেকে ৮০ এর মধ্যে যতো বিজোড় সংখ্যা আছে সেগুলাকে দেখাবে। 

*/


// for (var i = 50; i <= 80; i++) {
//     if (i % 2 !== 0) {
//         console.log(i, "Odd number")
//     }
// }

// console.log(i, "Even Number")





function odd(num1, num2) {
    for (var i = num1; i <= num2; i++) {
        if (i % 2 !== 0) {
            console.log(i, "Odd number")
        }
    }
}

var number1 = odd(50, 80);