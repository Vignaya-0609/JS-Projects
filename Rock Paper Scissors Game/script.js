const arr=["rock","paper","scissors"];
function randomVal(){
    let computerVal= arr[Math.floor(Math.random()*arr.length)];
    return computerVal;
}

function game(value) {
    let compVal = randomVal();
    let displayResult = document.getElementById("result");

    // Determine the winner
    if (value === compVal) {
        displayResult.innerText = `Opponent: ${compVal}, You: ${value} (Match Draw)`;
    } else if (
        (value === "rock" && compVal === "scissors") ||
        (value === "paper" && compVal === "rock") ||
        (value === "scissors" && compVal === "paper")
    ) {
        displayResult.innerText = `Opponent: ${compVal}, You: ${value} (You Win!)`;
    } else {
        displayResult.innerText = `Opponent: ${compVal}, You: ${value} (You Lose)`;
    }
}