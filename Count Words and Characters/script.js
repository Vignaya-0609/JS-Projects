const inputText = document.getElementById("text");
const calc = document.getElementById("calcBtn");

function analyzeText(inputText) {
    const trimmedText = inputText.trim();
    const wordCount = trimmedText === "" ? 0 : trimmedText.split(/\s+/).length;
    const charCount = trimmedText.replace(/\s+/g, '').length;
    return {
        wordCount: wordCount,
        charCount: charCount
    };
}

calc.addEventListener("click", () => {
    const str = inputText.value;
    let result = analyzeText(str);
    document.getElementById("chars").innerText=`${result.charCount} Characters`;
    document.getElementById("words").innerText=`${result.wordCount} Words`;
});