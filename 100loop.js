/*২. একটা লুপ লিখতে হবে যেটা ১ থেকে ১০০ পর্যন্ত যত সংখ্যা আছে সেটা দেখাবে 
 */


console.log('One too 100 print number:');

for (var i = 1; i <= 100; i++) {

    console.log(i);
}


function number(num) {
    var j = 1;
    while (j <= num) {
        console.log(j)
        j++;

    }

}

number(100);