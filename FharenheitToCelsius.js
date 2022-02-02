function Celcius(fharenheit) {
    const FharenheitToCelsius = ((fharenheit - 32) * 5 / 9)

    return FharenheitToCelsius;
}

const FharenheitToCelsiusCalculate = Celcius(50);
console.log('Fharenheit To Celsius =', FharenheitToCelsiusCalculate)