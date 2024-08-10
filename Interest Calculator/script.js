function calculateInterest() {
    const principal = parseFloat(document.getElementById('principal').value);
    const rate = parseFloat(document.getElementById('rate').value) / 100;
    const time = parseFloat(document.getElementById('time').value);

    if (isNaN(principal) || isNaN(rate) || isNaN(time)) {
        alert('Please enter valid numbers for all fields.');
        return;
    }

    // Simple Interest
    const simpleInterest = principal * rate * time;
    document.getElementById('simple-interest-result').innerHTML = `Simple Interest: &#8377;${simpleInterest.toFixed(2)}`;
    // Compound Interest
    const n = 4; // Compounded quarterly
    const compoundInterest = principal * Math.pow((1 + rate / n), (n * time)) - principal;
    document.getElementById('compound-interest-result').innerHTML = `Compound Interest: &#8377;${compoundInterest.toFixed(2)}`;
}
