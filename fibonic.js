/* 5th=4th +3th
4th=3th+2th
nth=(n-1)th+(n-2)th
1th=(1-1)th+(1-2)th
ith=(i-1)th+(i-2)th */

var fabio = [0, 1];
for (var i = 2; i <= 10; i++) {

    fabio[i] = fabio[i - 1] + fabio[i - 2];
}
console.log("Fibonic serise: ", fabio)