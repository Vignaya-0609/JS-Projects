const amount = document.getElementById("amt");
const percentage = document.getElementById("percentage");
const persons = document.getElementById("persons");
const calcBtn = document.getElementById("calc");

function calculatePercentage(val) {
    return val / 100;
}

function calculateTip(amt, percent, person) {
    let totalTip = amt * percent;
    let perTip = totalTip / person;
    let totalAmt = amt + totalTip;
    return {
        totalTip: totalTip,
        perTip: perTip,
        totalAmt: totalAmt
    };
}

function calculate() {
    let amt = parseFloat(amount.value);
    let percent = parseFloat(percentage.value);
    let person = parseInt(persons.value);

    if (!amt || !percent || !person) {
        alert("Enter All Values");
    } else {
        let displayPercentage = calculatePercentage(percent);
        let displayTipAmount = calculateTip(amt, displayPercentage, person);
        
        document.getElementById("per-tip").textContent=`Tip Per Person:  ${displayTipAmount.perTip.toFixed(2)}`;
        document.getElementById("total-tip").textContent=`Total Tip:  ${displayTipAmount.totalTip.toFixed(2)}`;
        document.getElementById("tot").textContent=`Total Amount:  ${displayTipAmount.totalAmt.toFixed(2)}`;

        
        // console.log(displayTipAmount.totalTip.toFixed(2));
        // console.log(displayTipAmount.perTip.toFixed(2));
        // console.log(displayTipAmount.totalAmt.toFixed(2));
    }
}

calcBtn.addEventListener("click", calculate);
