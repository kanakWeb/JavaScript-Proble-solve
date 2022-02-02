function ArraySum(numbers) {
    var sum = 0;
    for (var i = 0; i < numbers.length; i++) {
        var index = numbers[i];
        sum = sum + index;

    }
    return sum;
}

var SumAll = ArraySum([10, 20, 30, 40, 50, 60])
console.log('Total sum is: ', SumAll)