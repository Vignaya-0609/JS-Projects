const weight = document.getElementById("weight");
const height = document.getElementById("height");
const calcBtn = document.getElementById("calc");

function calculateBMI(weight,height){
    let heightInMtr=height/100; //height in meters
    const bmi = weight / (heightInMtr * heightInMtr);
    return bmi;
}
function calculateInterpretation(bmi){
    let interpretation="";
    if (bmi < 16.5) {
        interpretation = 'Severely Underweight';
    }else if (bmi < 18.5) {
        interpretation = 'Underweight';
    } else if (bmi < 24.9) {
        interpretation = 'Normal weight';
    } else if (bmi < 29.9) {
        interpretation = 'Overweight';
    } else {
        interpretation = 'Obese';
    }
    return interpretation;
}

function calculate() {
    let wght = parseFloat(weight.value);
    let hght = parseFloat(height.value);

    if (!wght || !hght || wght<=0 || hght<=0) {
        alert('Please enter valid weight and height values.');
    } else {
        let displayBMI = calculateBMI(wght,hght);
        let displayInterpretation = calculateInterpretation(displayBMI);
        
        document.getElementById("bmi").textContent=`BMI:  ${displayBMI.toFixed(2)}`;
        document.getElementById("interpretation").textContent=`(${displayInterpretation})`;
    }
}

calcBtn.addEventListener("click", calculate);
