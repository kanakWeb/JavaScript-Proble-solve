function factorial(num) {
    var fact = 1;
    for (var i = 1; i <= num; i++) {
        fact = fact * i;

    }
    return fact;
}

var numbers = 7;
var factorialOf = factorial(numbers);
console.log("Factorial is: ", factorialOf);