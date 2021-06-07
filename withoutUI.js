function computerPlay() {
    switch (Math.floor(Math.random()*3)+1) {
        case 1: return "Rock";
        case 2: return "Paper";
        case 3: return "Scissors"
    }
}

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
    playerScore = 0;
    computerScore = 0;
    if (playerSelection.toLowerCase() == computerSelection.toLowerCase()) {
        return "No winner.";
    }
    if (playerSelection.toLowerCase() == "rock") {
        if (computerSelection.toLowerCase() == "paper") {
            computerScore = 1;
            return "You Lose! Paper beats Rock!";
        } else if (computerSelection.toLowerCase() == "scissors") {
            playerScore = 1;
            return "You Win! Rock beats Scissors!";
        }
    }
    if (playerSelection.toLowerCase() == "paper") {
        if (computerSelection.toLowerCase() == "rock") {
            playerScore = 1;
            return "You Win! Paper beats Rock!";
        } else if (computerSelection.toLowerCase() == "scissors") {
            computerScore = 1;
            return "You Lose! Scissors beats Paper!";
        }
    }
    if (playerSelection.toLowerCase() == "scissors") {
        if (computerSelection.toLowerCase() == "rock") {
            computerScore = 1;
            return "You Lose! Rock beats Scissors!";
        } else if (computerSelection.toLowerCase() == "paper") {
            playerScore = 1;
            return "You Win! Scissors beats Paper!";
        }
    }
}

function game() {
    let playerResult = 0;
    let computerResult = 0;
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Rock, Paper, Scissors: ");
        const computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
        playerResult+=playerScore;
        computerResult+=computerScore;
    } 
    if (playerResult > computerResult) {
        return "You Win!";
    } else if (playerResult == computerResult) {
        return "No winner.";
    } else {
        return "You Lose!";
    }
  
}
console.log(game());
