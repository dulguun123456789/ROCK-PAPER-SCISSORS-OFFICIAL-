let playerScore = 0;
let computerScore = 0;

function play(playerChoice) {
    const choices = ["rock", "paper", "scissors"];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    // Display choices
    document.querySelector(".pChoice").textContent = "Player chose: " + playerChoice;
    document.querySelector(".cChoice").textContent = "Computer chose: " + computerChoice;

    // Determine winner
    let result = "";

    if (playerChoice === computerChoice) {
        result = "It's a tie!";
    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        result = "Player wins!";
        playerScore++;
    } else {
        result = "Computer wins!";
        computerScore++;
    }

    // Display result
    document.querySelector(".result").textContent = "Winner: " + result;
    document.querySelector(".pPoint").textContent = "Player: " + playerScore;
    document.querySelector(".cPoint").textContent = "Computer: " + computerScore;
}

function restart() {
    playerScore = 0;
    computerScore = 0;

    document.querySelector(".pPoint").textContent = "Player: 0";
    document.querySelector(".cPoint").textContent = "Computer: 0";
    document.querySelector(".pChoice").textContent = "Player chose: ";
    document.querySelector(".cChoice").textContent = "Computer chose: ";
    document.querySelector(".result").textContent = "Winner: ";
}
