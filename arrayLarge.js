function LargeArray(numbers) {
    var large = numbers[0];
    for (var i = 0; i < numbers.length; i++) {
        var index = numbers[i]
        if (index > large) {
            var large = index;
        }
    }
    return large
}

var ArrayLargeNum = LargeArray([50, 30, 40, 78, 50, 79, 50, 60])
console.log(ArrayLargeNum)


var ArrayLargeNeg = LargeArray([-50, -30, -40, -78, -50, -79, -50, -60])
console.log(ArrayLargeNeg)