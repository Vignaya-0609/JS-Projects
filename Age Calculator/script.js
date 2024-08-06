const calcBtn=document.getElementById("calc");

function calculateAge() {
    const dobInput = document.getElementById('dob').value;
    const todayDate = new Date().toISOString().split('T')[0];
    if (!dobInput || dobInput>todayDate) {
        alert('Please enter your correct date of birth.');
        return;
    }

    const dob = new Date(dobInput);
    const today = new Date();

    let years = today.getFullYear() - dob.getFullYear();
    let months = today.getMonth() - dob.getMonth();
    let days = today.getDate() - dob.getDate();

    if (days < 0) {
        months--;
        days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }
    if (months < 0) {
        years--;
        months += 12;
    }

    // Display the result
    document.getElementById('years').innerText = years;
    document.getElementById('months').innerText = months;
    document.getElementById('days').innerText = days;
}  

calcBtn.addEventListener("click",calculateAge)
