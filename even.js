function even(evenNumber) {

    if (evenNumber % 2 == 0) {
        return true;
    } else {
        return false;
    }
}

var evenNumberThis = 10;
var evenCheck = even(evenNumberThis);
console.log('Even number ', evenCheck)