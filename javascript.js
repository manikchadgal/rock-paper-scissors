const options = ["rock", "paper", "scissors"];

function getComputerChoice() {
    return options[Math.floor(Math.random() * options.length)];
}

function checkWinner(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "Tie";
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "rock")
    ) {
        return "Player";
    } else {
        return "Computer";
    }
}

function playRound(playerSelection) {
    const computerSelection = getComputerChoice();  // Get computer choice
    const result = checkWinner(playerSelection, computerSelection);  // Get result of round

    if (result === "Tie") {
        displayResult("It's a tie mf!");
    } else if (result === "Player") {
        displayResult("Mubarakan");  // Player wins the round
        scorePlayer++;
    } else {
        displayResult("chi yawr har gye");  // Computer wins the round
        scoreComputer++;
    }

    updateScore();  // Update score display
    checkGameOver();  // Check if game is over (5 points reached)
}

let scorePlayer = 0;
let scoreComputer = 0;

function displayResult(resultMessage) {
    const resultsDiv = document.getElementById("results");
    resultsDiv.textContent = resultMessage;  // Display the result message
}

function updateScore() {
    const scoreDiv = document.getElementById("score");
    scoreDiv.textContent = `Player: ${scorePlayer} | Computer: ${scoreComputer}`;  // Update the score display
}

function checkGameOver() {
    if (scorePlayer === 5 || scoreComputer === 5) {
        const winnerMessage = scorePlayer === 5 ? "meri selection hogyi!!!!!!!!" : "hag diya";  // Declare the winner
        displayResult(winnerMessage);
        disableImages();  // Disable further input once game is over
    }
}

function disableImages() {
    document.getElementById("rock").style.pointerEvents = "none";
    document.getElementById("paper").style.pointerEvents = "none";
    document.getElementById("scissors").style.pointerEvents = "none";  // Disable clicking on the images
}

// Event listeners for image clicks to select the player choice
document.getElementById("rock").addEventListener("click", () => playRound("rock"));  // Player selects rock
document.getElementById("paper").addEventListener("click", () => playRound("paper"));  // Player selects paper
document.getElementById("scissors").addEventListener("click", () => playRound("scissors"));  // Player selects scissors
