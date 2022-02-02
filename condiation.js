let marks = prompt("Enter the number:");


if (marks >= 90 && marks <= 100) {
    console.log("A+");
} else if (marks >= 80 && marks <= 89) {
    console.log("A");
} else if (marks >= 70 && marks <= 79) {
    console.log("B");
} else if (marks >= 60 && marks <= 69) {
    console.log("C");
} else if (marks >= 50 && marks <= 49) {
    console.log("D");
} else if (marks <= 49 && marks <= 0) {
    console.log("F");
} else
    console.log("invalid mark");