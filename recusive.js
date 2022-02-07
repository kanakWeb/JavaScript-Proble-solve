function consoleNumber(i) {
    if (i > 5) {
        return i;
    }

    console.log(i)
    consoleNumber(i + 1);
}
consoleNumber(1); //this is recursion function