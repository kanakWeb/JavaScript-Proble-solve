function leaperCheck(year) {

    if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
        return "This is leaper";

    } else {
        return "This is not leaper";
    }
}

var leaperYear = 2024;
var leaperYearCheck = leaperCheck(leaperYear);

console.log(leaperYearCheck);