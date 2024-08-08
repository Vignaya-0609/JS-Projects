const celsius = document.getElementById("c");
const fahrenheit = document.getElementById("f");

function calculateFahrenheit() {
    // Convert Celsius to Fahrenheit
    let celsiusValue = parseFloat(celsius.value);
    if (!isNaN(celsiusValue)) {
        let fahrenheitValue = (celsiusValue * 9/5) + 32;
        fahrenheit.value = fahrenheitValue.toFixed(2); 
    } else {
        fahrenheit.value = '';
    }
}

function calculateCelsius() {
    // Convert Fahrenheit to Celsius
    let fahrenheitValue = parseFloat(fahrenheit.value);
    if (!isNaN(fahrenheitValue)) {
        let celsiusValue = (fahrenheitValue - 32) * 5/9;
        celsius.value = celsiusValue.toFixed(2);
    } else {
        celsius.value = ''; 
    }
}
