function smallNum(num1, num2, num3) {
    if (num1 < num2 && num1 < num3) {
        return num1;
    } else if (num2 < num1 && num2 < num3) {
        return num2;
    } else return num3;
}

var SmalltNumber = smallNum(40, 50, 60);
console.log("Smallest number is : ", SmalltNumber)