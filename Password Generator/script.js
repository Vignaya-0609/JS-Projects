const char = "abcdefghijklmnopqrstuvwxyz#$%*@0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";


function randomGenerator() {
    return Math.floor(Math.random() * char.length);
}

// Function to generate and display the password
function passwordGenerator() {
    const pswrdLength = document.getElementById("range-scale").value;
    const passwordDisplay = document.querySelector(".res h3");
    
    document.getElementById("range-val").innerText=pswrdLength;
    // Generate the password
    let password = '';
    for (let i = 0; i < pswrdLength; i++) {
        password += char[randomGenerator()];
    }
    
    passwordDisplay.textContent = password;
}

// onload call the function
passwordGenerator();

