/*১. তোমাকে ফাংশনের ইনপুট হিসেবে সেলসিয়াস দিবে। তুমি ক্যালকুলেশন করে তাপমাত্রা ফারেনহাইট এ কনভার্ট করে সেটার আউটপুট রিটার্ন করবে */
function fharenheit(Celsius) {
    var CelsiusToFharenheit = Celsius * 9 / 5 + 32;
    return CelsiusToFharenheit;
}

var CelSiusToFharenheitCalculate = fharenheit(70);
console.log('Celcius to Fharenheit: ', CelSiusToFharenheitCalculate);