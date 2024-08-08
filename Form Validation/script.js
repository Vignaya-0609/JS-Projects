function validateFullName() {
    const fullName = document.getElementById('full-name').value;
    const errorFullName = document.getElementById('error-full-name');
    if (fullName.trim() === '') {
        errorFullName.textContent = 'Full name is required';
        return false;
    } else {
        errorFullName.textContent = '';
        return true;
    }
}
function validateEmail() {
    const email = document.getElementById('email-address').value;
    const errorEmail = document.getElementById('error-email-address');
    const emailRegex = /^[a-zA-Z]+[a-zA-Z0-9]+@[a-z]+[.]+[a-z]{2,3}$/;
    const emailRegex2 = /^[a-zA-Z0-9]+[a-zA-Z0-9]+@[a-z]+[.]+[a-z]+[.]+[a-z]{2,3}$/;

    if (email.trim().match(emailRegex) || email.trim().match(emailRegex2)) {
        errorEmail.textContent = '';
        return true;
    } else {
        errorEmail.textContent = 'Enter a valid email address';
        return false;
    }
}
function validatePassword() {
    const password = document.getElementById('pswrd').value;
    const errorPassword = document.getElementById('error-pswrd');
    if(password===""){
        errorPassword.textContent = 'Password is required';
        return false;
    }
    else if (password.length < 8) {
        errorPassword.textContent = 'Password must be at least 8 characters';
        return false;
    } else {
        errorPassword.textContent = '';
        return true;
    }
}

function validateConfirmPassword() {
    const password = document.getElementById('pswrd').value;
    const confirmPassword = document.getElementById('c-pswrd').value;
    const errorConfirmPassword = document.getElementById('error-c-pswrd');
    if (confirmPassword !== password) {
        errorConfirmPassword.textContent = 'Passwords do not match';
        return false;
    } else {
        errorConfirmPassword.textContent = '';
        return true;
    }
}
function validatePhoneNumber() {
    const phoneNumber = document.getElementById('phno').value;
    const errorPhoneNumber = document.getElementById('error-phno');
    if (phoneNumber.length !== 10) {
        errorPhoneNumber.textContent = 'Phone number must be 10 digits';
        return false;
    } else {
        errorPhoneNumber.textContent = '';
        return true;
    }
}
function validateBirthDate() {
    const birthDate = document.getElementById('dob').value;
    const errorBirthDate = document.getElementById('error-dob');
    const selectedDate = new Date(birthDate);
    const today = new Date();
    if (birthDate === '') {
        errorBirthDate.textContent = 'Birth date is required';
        return false;
    } else if (selectedDate >= today) {
        errorBirthDate.textContent = 'Birth date must be in the past';
        return false;
    } else {
        errorBirthDate.textContent = '';
        return true;
    }
}
function validateGender() {
    const gender = document.querySelector('input[name="gender"]:checked');
    const errorGender = document.getElementById('error-gender');
    if (!gender) {
        errorGender.textContent = 'Gender is required';
        return false;
    } else {
        errorGender.textContent = '';
        return true;
    }
}
function validateStreet1() {
    const street1 = document.getElementById('street-1').value;
    const errorStreet1 = document.getElementById('error-street1');
    if (street1.trim() === '') {
        errorStreet1.textContent = 'Street address is required';
        return false;
    } else {
        errorStreet1.textContent = '';
        return true;
    }
}

function validateStreet2() {
    const street2 = document.getElementById('street-2').value;
    const errorStreet2 = document.getElementById('error-street2');
    if (street2.trim() === '') {
        errorStreet2.textContent = 'Street address line 2 is required';
        return false;
    } else {
        errorStreet2.textContent = '';
        return true;
    }
}
function validateCity() {
    const city = document.getElementById('city').value;
    const errorCity = document.getElementById('error-city');
    if (city.trim() === '') {
        errorCity.textContent = 'City is required';
        return false;
    } else {
        errorCity.textContent = '';
        return true;
    }
}

function validateState() {
    const state = document.getElementById('state').value;
    const errorState = document.getElementById('error-state');
    if (state === 'State' || state==="") {
        errorState.textContent = 'State is required';
        return false;
    } else {
        errorState.textContent = '';
        return true;
    }
}
function validateDegree() {
    const degree = document.getElementById('degree').value;
    const errorQualification = document.getElementById('error-degree');
    if (degree.trim() === '') {
        errorQualification.textContent = 'Degree is required';
        return false;
    } else {
        errorQualification.textContent = '';
        return true;
    }
}

function validateStream() {
    const stream = document.getElementById('stream').value;
    const errorQualification = document.getElementById('error-stream');
    if (stream.trim() === '') {
        errorQualification.textContent = 'Stream is required';
        return false;
    } else {
        errorQualification.textContent = '';
        return true;
    }
}

function validateCgpa() {
    const cgpaValue = document.getElementById('cgpa').value;
    const cgpa = parseFloat(cgpaValue);
    const errorQualification = document.getElementById('error-qualification');

    if (isNaN(cgpa) || cgpa <= 0) {
        errorQualification.textContent = 'CGPA is required';
        return false;
    } else if (cgpa > 10) {
        errorQualification.textContent = 'Enter a valid CGPA (0 to 10)';
        return false;
    } else {
        errorQualification.textContent = '';
        return true;
    }
}

function validate12th() {
    const twelfthValue = document.getElementById('12th').value;
    const twelfth = parseFloat(twelfthValue);
    const error12th = document.getElementById('error-12th');

    if (isNaN(twelfth) || twelfth <= 0) {
        error12th.textContent = '12th percentage is required';
        return false;
    } else if (twelfth > 100) {
        error12th.textContent = 'Enter a valid percentage (0 to 100)';
        return false;
    } else {
        error12th.textContent = '';
        return true;
    }
}

function validate10th() {
    const tenthValue = document.getElementById('10th').value;
    const tenth = parseFloat(tenthValue);
    const error10th = document.getElementById('error-10th');

    if (isNaN(tenth) || tenth <= 0) {
        error10th.textContent = '10th percentage is required';
        return false;
    } else if (tenth > 100) {
        error10th.textContent = 'Enter a valid percentage (0 to 100)';
        return false;
    } else {
        error10th.textContent = '';
        return true;
    }
}

function validateStatus() {
    const status = document.getElementById('status').value;
    const errorStatus = document.getElementById('error-status');
    if (status === 'Work Status') {
        errorStatus.textContent = 'Work status is required';
        return false;
    } 
    else if(status === 'experienced'){
        return validateExperience();
    }
    else {
        errorStatus.textContent = '';
        return true;
    }
}

function validateExperience() {
    const status = document.getElementById('status').value;
    const experience = document.getElementById('experience').value;
    const errorExperience = document.getElementById('error-experience');
    if (status==="experienced" && (experience.trim() === '' || experience <= 0)) {
        errorExperience.textContent = 'Experience is required';
        return false;
    } else {
        errorExperience.textContent = '';
        return true;
    }
}

function validateInterest() {
    const interest = document.getElementById('interest').value;
    const errorInterest = document.getElementById('error-interest');
    if (interest.trim() === '') {
        errorInterest.textContent = 'Area of interest is required';
        return false;
    } else {
        errorInterest.textContent = '';
        return true;
    }
}

function validateSkill() {
    const skill = document.getElementById('skill').value;
    const errorSkill = document.getElementById('error-skill');
    if (skill.trim() === '') {
        errorSkill.textContent = 'Skill set is required';
        return false;
    } else {
        errorSkill.textContent = '';
        return true;
    }
}

function validateJobTitle() {
    const jobTitle = document.getElementById('job-title').value;
    const errorJobTitle = document.getElementById('error-job-title');
    if (jobTitle.trim() === '') {
        errorJobTitle.textContent = 'Job title is required';
        return false;
    } else {
        errorJobTitle.textContent = '';
        return true;
    }
}

function validateLocation() {
    const location = document.getElementById('location').value;
    const errorLocation = document.getElementById('error-location');
    if (location.trim() === '') {
        errorLocation.textContent = 'Job location is required';
        return false;
    } else {
        errorLocation.textContent = '';
        return true;
    }
}

function validateResume() {
    const resume = document.getElementById('resume').files[0];
    const errorResume = document.getElementById('error-resume');

    if (!resume) {
        errorResume.textContent = 'Resume is required';
        return false;
    } else if (resume.type !== 'application/pdf') {
        errorResume.textContent = 'Only PDF files are allowed';
        return false;
    } else {
        errorResume.textContent = '';
        return true;
    }
}


function validateForm() {
    const isValidFullName = validateFullName();
    const isValidEmail = validateEmail();
    const isValidPassword = validatePassword();
    const isValidConfirmPassword = validateConfirmPassword();
    const isValidPhoneNumber = validatePhoneNumber();
    const isValidBirthDate = validateBirthDate();
    const isValidGender = validateGender();
    const isValidStreet1 = validateStreet1();
    const isValidStreet2 = validateStreet2();
    const isValidCity = validateCity();
    const isValidState = validateState();
    const isValidDegree = validateDegree();
    const isValidStream = validateStream();
    const isValidCgpa = validateCgpa();
    const isValid12th = validate12th();
    const isValid10th = validate10th();
    const isValidStatus = validateStatus();
    const isValidExperience = validateExperience();
    const isValidInterest = validateInterest();
    const isValidSkill = validateSkill();
    const isValidJobTitle = validateJobTitle();
    const isValidLocation = validateLocation();
    const isValidResume = validateResume();

    return isValidFullName && isValidEmail && isValidPassword && isValidConfirmPassword &&
           isValidPhoneNumber && isValidBirthDate && isValidGender && isValidStreet1 &&
           isValidStreet2 && isValidCity && isValidState && isValidDegree && isValidStream &&
           isValidCgpa && isValid12th && isValid10th && isValidStatus && isValidExperience &&
           isValidInterest && isValidSkill && isValidJobTitle && isValidLocation && isValidResume;
}
function resetValues() {
    // Clear all input fields
    document.getElementById('full-name').value = '';
    document.getElementById('email-address').value = '';
    document.getElementById('pswrd').value = '';
    document.getElementById('c-pswrd').value = '';
    document.getElementById('phno').value = '';
    document.getElementById('dob').value = '';
    document.getElementById('street-1').value = '';
    document.getElementById('street-2').value = '';
    document.getElementById('city').value = '';
    document.getElementById('state').selectedIndex = 0; // Reset select box to first option
    document.getElementById('degree').value = '';
    document.getElementById('stream').value = '';
    document.getElementById('cgpa').value = '';
    document.getElementById('12th').value = '';
    document.getElementById('10th').value = '';
    document.getElementById('status').selectedIndex = 0; // Reset select box to first option
    document.getElementById('experience').value = '';
    document.getElementById('interest').value = '';
    document.getElementById('skill').value = '';
    document.getElementById('job-title').value = '';
    document.getElementById('location').value = '';
    document.getElementById('resume').value = ''; // Reset file input

    // Clear all error messages
    document.getElementById('error-full-name').textContent = '';
    document.getElementById('error-email-address').textContent = '';
    document.getElementById('error-pswrd').textContent = '';
    document.getElementById('error-c-pswrd').textContent = '';
    document.getElementById('error-phno').textContent = '';
    document.getElementById('error-dob').textContent = '';
    document.getElementById('error-street1').textContent = '';
    document.getElementById('error-street2').textContent = '';
    document.getElementById('error-city').textContent = '';
    document.getElementById('error-state').textContent = '';
    document.getElementById('error-qualification').textContent = '';
    document.getElementById('error-12th').textContent = '';
    document.getElementById('error-10th').textContent = '';
    document.getElementById('error-status').textContent = '';
    document.getElementById('error-experience').textContent = '';
    document.getElementById('error-interest').textContent = '';
    document.getElementById('error-skill').textContent = '';
    document.getElementById('error-job-title').textContent = '';
    document.getElementById('error-location').textContent = '';
    document.getElementById('error-resume').textContent = '';

    // Reset gender radio buttons
    const genderRadios = document.getElementsByName('gender');
    genderRadios.forEach(radio => radio.checked = false);
}


document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    if (validateForm()) {
        // If form is valid, you can send the form data to the server here
        alert('Form submitted successfully!');
        resetValues()
        
    } else {
        alert('Please correct the errors in the form.');
    }
});