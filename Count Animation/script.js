function animateCount(id, end, duration) {
    let start = 0;
    const increment = Math.ceil(end / (duration / 10));
    const element = document.getElementById(id);

    const counter = setInterval(() => {
        start += increment;
        if (start > end) {
            start = end;
            clearInterval(counter);
        }
        element.textContent = start;
    }, 10);
}

// Function to start the animation on page load
function startCountAnimation() {
    animateCount("branch", 20, 1000);   
    animateCount("customers", 100, 1500); 
    animateCount("reviews", 75, 1200);  
}

//Animation when the page loads
document.addEventListener("DOMContentLoaded", startCountAnimation);
