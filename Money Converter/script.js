// Predefined exchange rates
const exchangeRates = {
    INR: {
        USD: 0.012,
        EUR: 0.011,
        GBP: 0.0095
    },
    USD: {
        INR: 83.15,
        EUR: 0.92,
        GBP: 0.79
    },
    EUR: {
        INR: 90.5,
        USD: 1.09,
        GBP: 0.86
    },
    GBP: {
        INR: 105.8,
        USD: 1.27,
        EUR: 1.16
    }
};

// Conversion function
function convertCurrency(amount, fromCurrency, toCurrency) {
    if (fromCurrency === toCurrency) {
        return amount; // No conversion needed if currencies are the same
    }
    let conversionRate = exchangeRates[fromCurrency][toCurrency];
    return amount * conversionRate;
}

function resetValues(){
    document.getElementById('val').value="";
    document.getElementById('from').value="";
    document.getElementById('to').value="";
}
// Event listener for Calculate button
document.getElementById('calculateBtn').addEventListener('click', function() {
    let amount = parseFloat(document.getElementById('val').value);
    let fromCurrency = document.getElementById('from').value;
    let toCurrency = document.getElementById('to').value;

    if (!isNaN(amount) && fromCurrency && toCurrency) {
        let convertedAmount = convertCurrency(amount, fromCurrency, toCurrency);
        document.getElementById("res").innerText=`Converted Amount: ${convertedAmount.toFixed(2)} ${toCurrency}`;
    } else {
        alert('Please fill in all fields correctly.');
        resetValues();
    }
});
