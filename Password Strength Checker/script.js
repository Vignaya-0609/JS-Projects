const result = document.getElementById("result");
const text = document.getElementById("txt");

text.addEventListener('input', strengthCheck);

function strengthCheck() {
    let password = text.value.trim();

    // Length check
    if (password.length >= 8) {

        let hasUpperCase = /[A-Z]/.test(password);
        let hasLowerCase = /[a-z]/.test(password);
        let hasNumber = /[0-9]/.test(password);
        let hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

        if (hasUpperCase && hasLowerCase && hasNumber && hasSpecialChar) {
            result.innerText = "Your password is strong";
            result.className = "strong";
        } else if ((hasUpperCase || hasLowerCase) && (hasNumber || hasSpecialChar)) {
            result.innerText = "Your password is moderate";
            result.className = "moderate";
        } else {
            result.innerText = "Your password is weak";
            result.className = "weak";
        }
    } else {
        result.innerText = "Your password is too short";
        result.className = "weak";
    }
}
