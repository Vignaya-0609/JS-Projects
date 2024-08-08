document.getElementById("convert").addEventListener("click", function() {
    // Get the text input from the textarea
    let text = document.getElementById("text").value;

    // Check if the browser supports speech synthesis
    if ('speechSynthesis' in window) {
        let utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'en-US'; // Language

        window.speechSynthesis.speak(utterance);
    } else {
        alert("Sorry, your browser doesn't support speech synthesis.");
    }
});
